import { useState, useEffect } from 'react'
import { 
  Calendar, ArrowRight, ExternalLink, User, Tag,
  Search, Loader2, AlertCircle
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { fetchNews, fetchCategories, formatNewsDate, type NewsArticle, type NewsCategory } from '@/lib/newsApi'

const News = () => {
  const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [newsItems, setNewsItems] = useState<NewsArticle[]>([])
  const [categories, setCategories] = useState<NewsCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  // const [hasMore, setHasMore] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalItems, setTotalItems] = useState(0)
  const ITEMS_PER_PAGE = 12

  // Fetch full article when a news card is clicked
  const BASE_API = import.meta.env.VITE_BASE_API_URL ;
  async function handleNewsClick(newsItem: NewsArticle) {
    try {
      
      const apiUrl = `${BASE_API}/api/news`
      // Fetch full article by slug to get the content
      const response = await fetch(`${apiUrl}?slug=${newsItem.slug}`);
      const data = await response.json();
      
      if (data.success && data.data) {
        setSelectedNews(data.data);
      } else {
        // Fallback to the list item (without full content)
        setSelectedNews(newsItem);
      }
    } catch (error) {
      console.error('Failed to fetch full article:', error);
      // Fallback to the list item
      setSelectedNews(newsItem);
    }
  }

  // Load categories on mount
  useEffect(() => {
    async function loadCategories() {
      try {
        const cats = await fetchCategories()
        setCategories(cats)
      } catch (err) {
        console.error('Failed to load categories:', err)
      }
    }
    loadCategories()
  }, [])

  // Load news articles
  useEffect(() => {
    async function loadNews() {
      try {
        setLoading(true)
        setError(null)

        const params: any = {
          limit: ITEMS_PER_PAGE,
          offset: (currentPage - 1) * ITEMS_PER_PAGE,
        }

        if (selectedCategory !== 'All') {
          params.category = selectedCategory.toLowerCase()
        }

        if (searchTerm) {
          params.search = searchTerm
        }

        const response = await fetchNews(params)
        setNewsItems(response.data)
        // setHasMore(response.pagination.hasMore)
        setTotalItems(response.pagination.total)
      } catch (err) {
        console.error('Failed to load news:', err)
        setError(err instanceof Error ? err.message : 'Failed to load news')
      } finally {
        setLoading(false)
      }
    }

    // Debounce search
    const timeoutId = setTimeout(() => {
      loadNews()
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [searchTerm, selectedCategory, currentPage])

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategory])

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)

  const categoryLabels = ['All', ...categories.map(c => c.label)]

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-ahiti-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-ahiti-secondary text-ahiti-primary">Latest Updates</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              News & Announcements
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Stay updated with the latest happenings, government initiatives, and announcements from AHITI Ndomba.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                disabled={loading}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categoryLabels.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  disabled={loading}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors disabled:opacity-50 ${
                    selectedCategory === category
                      ? 'bg-ahiti-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-ahiti-primary/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-ahiti-primary" />
              <span className="ml-3 text-gray-600">Loading news...</span>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-12">
              <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
              <p className="text-red-600 text-lg mb-2">Failed to load news</p>
              <p className="text-gray-500 text-sm mb-4">{error}</p>
              <Button 
                onClick={() => window.location.reload()}
                className="bg-ahiti-primary text-white"
              >
                Try Again
              </Button>
            </div>
          ) : newsItems.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((news) => (
                <article
                  key={news.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 cursor-pointer"
                  onClick={() => handleNewsClick(news)}
                >
                  {news.coverImage && (
                    <div className="aspect-video overflow-hidden bg-gray-200">
                      <img
                        src={news.coverImage}
                        alt={news.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Hide image if it fails to load
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      {news.category && (
                        <Badge 
                          style={{ 
                            backgroundColor: `${news.category.color}20`,
                            color: news.category.color 
                          }}
                        >
                          {news.category.label}
                        </Badge>
                      )}
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatNewsDate(news.publishedDate || news.dates.created)}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-ahiti-primary mb-3 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <User className="w-4 h-4 mr-1" />
                        {news.author || news.source?.name || 'AHITI Ndomba'}
                      </div>
                      <Button variant="link" className="p-0 text-ahiti-primary hover:text-ahiti-dark">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No news found matching your criteria.</p>
            </div>
          )}

          {/* Pagination */}
          {!loading && !error && totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <Button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                variant="outline"
                className="border-ahiti-primary text-ahiti-primary hover:bg-ahiti-primary hover:text-white disabled:opacity-50"
              >
                Previous
              </Button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum: number;
                  
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <Button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      className={currentPage === pageNum 
                        ? "bg-ahiti-primary text-white hover:bg-ahiti-dark" 
                        : "border-ahiti-primary text-ahiti-primary hover:bg-ahiti-primary hover:text-white"
                      }
                    >
                      {pageNum}
                    </Button>
                  );
                })}
              </div>

              <Button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                variant="outline"
                className="border-ahiti-primary text-ahiti-primary hover:bg-ahiti-primary hover:text-white disabled:opacity-50"
              >
                Next
              </Button>
            </div>
          )}

          {/* Results info */}
          {!loading && !error && newsItems.length > 0 && (
            <div className="text-center mt-6 text-gray-500 text-sm">
              Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1} to {Math.min(currentPage * ITEMS_PER_PAGE, totalItems)} of {totalItems} articles
            </div>
          )}
        </div>
      </section>

      {/* Government Sources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-ahiti-primary/10 text-ahiti-primary">Official Sources</Badge>
            <h2 className="text-3xl font-bold text-ahiti-primary mb-4">
              Government & Official Sources
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Stay informed with official updates from government agencies and partner organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Ministry of Agriculture', url: 'https://kilimo.go.ke', desc: 'Official ministry website' },
              { name: 'Kenya Veterinary Board', url: 'https://kenyavetboard.or.ke', desc: 'Veterinary regulations' },
              { name: 'KAGRC', url: 'https://kagrc.go.ke', desc: 'Animal genetic resources' },
              { name: 'AHITI Ndomba X', url: 'https://x.com/AhitiNdomba', desc: 'Official social media' },
            ].map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <Tag className="w-5 h-5 text-ahiti-primary" />
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-ahiti-primary transition-colors" />
                </div>
                <h3 className="font-bold text-ahiti-primary mb-1">{source.name}</h3>
                <p className="text-gray-500 text-sm">{source.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-ahiti-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ahiti-primary mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-ahiti-primary/80 mb-8">
            Subscribe to our newsletter to receive the latest news and updates from AHITI Ndomba.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-white"
            />
            <Button className="bg-ahiti-primary text-white hover:bg-ahiti-dark whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* News Detail Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50"
            onClick={() => setSelectedNews(null)}
          />
          
          {/* Modal Content */}
          <div className="relative z-50 w-full max-w-3xl max-h-[90vh] bg-white rounded-lg shadow-xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-md transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Cover Image */}
              {selectedNews.coverImage && (
                <div className="w-full aspect-video overflow-hidden bg-gray-200">
                  <img
                    src={selectedNews.coverImage}
                    alt={selectedNews.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    {selectedNews.category && (
                      <Badge 
                        style={{ 
                          backgroundColor: `${selectedNews.category.color}20`,
                          color: selectedNews.category.color 
                        }}
                      >
                        {selectedNews.category.label}
                      </Badge>
                    )}
                    <span className="text-gray-500 text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatNewsDate(selectedNews.publishedDate || selectedNews.dates.created)}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-ahiti-primary mb-2">
                    {selectedNews.title}
                  </h2>
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="w-4 h-4 mr-1" />
                    By {selectedNews.author || selectedNews.source?.name || 'AHITI Ndomba'}
                  </div>
                </div>

                {/* Body */}
                <div className="prose prose-gray max-w-none">
                  {selectedNews.content ? (
                    selectedNews.content.split('\n\n').map((paragraph: string, idx: number) => (
                      <p key={idx} className="text-gray-600 mb-4 whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-gray-600 mb-4">
                      {selectedNews.excerpt || 'No content available.'}
                    </p>
                  )}
                </div>

                {/* Source Link */}
                {selectedNews.source?.url && (
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm text-gray-500 mb-2">
                      Source: {selectedNews.source.name || 'External Source'}
                    </p>
                    <a 
                      href={selectedNews.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-ahiti-primary hover:underline"
                    >
                      Read original article
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default News
