import { useState } from 'react'
import { 
  Calendar, ArrowRight, ExternalLink, User, Tag,
  Search
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

const News = () => {
  const [selectedNews, setSelectedNews] = useState<any>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Government', 'Milestone', 'Admission', 'Courses', 'Events']

  const newsItems = [
    {
      date: 'April 3, 2025',
      author: 'Kenya News Agency',
      title: 'President Ruto Launches Goat AI Center at AHITI Ndomba',
      excerpt: 'President William Ruto officially commissioned the Goat Artificial Insemination Centre at AHITI Ndomba in Kirinyaga County, marking a historic milestone as the first facility of its kind in East and Central Africa.',
      content: `President William Ruto officially commissioned the Goat Artificial Insemination Centre at AHITI Ndomba in Kirinyaga County, marking a historic milestone as the first facility of its kind in East and Central Africa.

The Centre, located at Animal Health & Industrial Training Institute (AHITI), Ndomba in Kirinyaga, brings a radical breakthrough in the County and the Country's agricultural sector, especially in goat farming.

During the event, Kirinyaga Governor Anne Waiguru expressed gratitude for the transformative initiative, highlighting the positive impact it would have on local farming communities and the wider economy.

"We are particularly honoured to host the Goat AI Centre at Ndomba, which is not only a great treasure for our County but also a key development milestone for our Country. This Center is a significant step forward in improving goat production and food security in Kirinyaga County."

The Governor noted that the Centre's role in improving breeding practices is critical to advancing food security and economic stability for local farmers. She further emphasized the importance of goat farming to the county's agricultural ecosystem, which benefits from both meat and milk production, offering a sustainable source of income and nutrition for many families.

The Goat AI Center is part of a broader effort to transform the agricultural sector in Kirinyaga, highlighting that the County has trained AI inseminators who assist farmers with timely and efficient services.

The Governor emphasized that the County government has been actively sensitizing farmers on the importance of AI in livestock production and making AI services more accessible through subsidies that significantly reduce the cost compared to private sector rates.`,
      category: 'Milestone',
      image: '/images/1_President_Ruto_s_Full_Speech_During.png',
      source: 'Kenya News Agency',
      sourceUrl: 'https://www.kenyanews.go.ke/kirinyaga-farmers-optimistic-as-president-launches-goat-ai-center/'
    },
    {
      date: 'April 14, 2026',
      author: 'State Department for Livestock Development',
      title: 'Government Opens 2026 Training Intake for Livestock Courses',
      excerpt: 'The State Department for Livestock Development has announced applications for 2026 training programmes targeting students across different KCSE performance levels.',
      content: `The State Department for Livestock Development has announced applications for 2026 training programmes targeting students across different KCSE performance levels, including those with C plain and below.

The opportunities cover diploma, certificate, and artisan pathways in animal health, dairy, meat, leather, apiculture, and range management.

The Ministry of Agriculture and Livestock Development says applicants can choose institutions under the department, including AHITI campuses, Dairy Training Institute Naivasha, and Meat Training Institute Athi River.

**Institutions and Application Deadlines**

Courses are available at these institutions:
- Animal Health and Industry Training Institute (AHITI) Kabete
- Animal Health and Industry Training Institute (AHITI) Nyahururu
- Animal Health and Industry Training Institute (AHITI) Ndomba
- Dairy Training Institute (DTI) Naivasha
- Meat Training Institute (MTI) Athi River
- Livestock Training Institute (LTI) Wajir
- Livestock Training Institute (LTI) Mogotio
- National Beekeeping Institute Lenana

Applications should be submitted to the principal of the preferred institution.

**General Application Requirements**

Applicants must submit a complete application package and pay a non-refundable KSh 1,000 application fee using the payment instructions provided by each institution.

Required attachments include:
- Copies of academic certificates
- National ID (or relevant identification document)
- Secondary school leaving certificate
- Birth certificate
- Two recent passport-size photos

**Key Diploma Options for 2026**

Diploma in Animal Health and Production is offered at AHITI Kabete, AHITI Ndomba, and AHITI Nyahururu with a duration of 2½ years (5 semesters) at KSh 210,300.

Upgrading Course to Diploma in Animal Health and Production is available at AHITI Nyahururu, AHITI Ndomba, and Livestock Training Institute Wajir for 1 year (3 semesters) at KSh 111,300.`,
      category: 'Admission',
      image: '/images/2_Department_of_Animal_Health_and_Production.png',
      source: 'EduPoa',
      sourceUrl: 'https://edupoa.com/blog/govt-opens-2026-livestock-training-intake-for-diploma-certificate-and-artisan-levels/'
    },
    {
      date: 'February 17, 2025',
      author: 'African Agribusiness',
      title: 'Kenya Introduces AI in Goats to Improve Dairy and Meat Production',
      excerpt: 'The Kenya Animal Genetic Resources Centre (KAGRC) is taking a bold step in transforming the country\'s dairy and meat production through AI technology for goats.',
      content: `The Kenya Animal Genetic Resources Centre (KAGRC) is taking a bold step in transforming the country's dairy and meat production through the introduction of Artificial Insemination (AI) technology for goats.

In an effort to boost productivity and enhance food security, KAGRC is working closely with farmers to implement selective breeding techniques that will improve the quality and quantity of milk and meat production in the country.

Speaking during an open day event with goat dairy farmers at the Kutus AHITI Domba centre, Kirinyaga County, KAGRC Managing Director Benadette Misoi emphasised the importance of AI in modern farming, describing it as a groundbreaking technology that will help farmers maximise their yields.

"Today is a great day for us as we engage with goat dairy farmers, a key segment of livestock farming. AI in goats is a new technology that we are trying to introduce to farmers, with the main objective of increasing productivity. Through selective breeding, we are producing the best semen from our top breeds to ensure higher milk production and better quality meat," said Misoi.

She explained that KAGRC has a variety of male breeds at its stations, which are used to produce high-quality semen for artificial insemination. The focus is on both dairy and meat breeds, ensuring that farmers have access to superior genetic material that will enhance their herds.

Misoi expressed her delight at the large turnout of farmers, noting that the interaction was vital in equipping them with essential information about the new technology.

"We are happy to see farmers showing great interest in this initiative. Information is power, and we want to continue passing it on to ensure that farmers make informed decisions. KAGRC works with a network of agents, distributors, universities, and suppliers who provide the necessary chemicals and equipment for our laboratories. It is a collaborative effort that will drive this sector forward," she said.

The Kenyan government, through the Ministry of Agriculture, has outlined ambitious goals to enhance food security and promote livestock breeding as key interventions.`,
      category: 'Government',
      image: '/images/1_Successful_Artificial_Insemination.png',
      source: 'African Agribusiness',
      sourceUrl: 'https://africanagribusiness.com/kenya-introduces-ai-in-goats-to-improve-dairy-and-meat-production/4239/'
    },
    {
      date: 'April 1, 2025',
      author: 'KAGRC',
      title: 'Commissioning of the Goat Artificial Insemination Centre',
      excerpt: 'William Samoei Ruto, PhD., CGH, officially commissioned the Goat Artificial Insemination Centre in Ndomba, Kirinyaga County.',
      content: `William Samoei Ruto, PhD., CGH, officially commissioned the Goat Artificial Insemination Centre in Ndomba, Kirinyaga County, on April 2, 2025.

The Centre represents a significant investment by the Kenyan government in livestock development, specifically targeting the improvement of goat breeds for enhanced dairy and meat production.

The facility at AHITI Ndomba will serve as a regional hub for goat artificial insemination services, providing training, semen production, and technical support to farmers across East and Central Africa.

This milestone achievement aligns with the government's Bottom-Up Economic Transformation Agenda (BETA) and the broader vision of enhancing food security and agricultural productivity in Kenya.

The Centre will work closely with the Kenya Animal Genetic Resources Centre (KAGRC) to ensure the availability of high-quality genetic material and the training of skilled inseminators.`,
      category: 'Government',
      image: '/images/4_Building_a_More_Resilient_Livestock.png',
      source: 'KAGRC',
      sourceUrl: 'https://kagrc.go.ke/commissioning-of-the-goat-artificial-insemination-centre/'
    },
    {
      date: 'March 15, 2025',
      author: 'AHITI Ndomba',
      title: 'Short Courses Registration Now Open',
      excerpt: 'Registration is now open for our practical short courses including Artificial Insemination, Poultry Farming, Bee Farming, and more.',
      content: `AHITI Ndomba is pleased to announce that registration for our short courses is now open. These practical courses are designed to provide hands-on training for farmers, extension workers, and anyone interested in improving their livestock management skills.

**Available Short Courses:**

1. **Artificial Insemination in Cattle** (4 weeks)
   - Comprehensive training in cattle AI techniques
   - Hands-on practical sessions
   - Certificate upon completion

2. **Artificial Insemination in Goats** (2 weeks)
   - Specialized goat AI training
   - Practical demonstrations
   - Expert instructors

3. **Feed Formulation and Milling Technology** (5 days)
   - Learn to formulate balanced animal feeds
   - Feed processing techniques
   - Quality control measures

4. **Poultry Farming** (5 days)
   - Complete poultry management
   - Health and nutrition
   - Marketing strategies

5. **Bee Farming (Apiculture)** (5 days)
   - Modern beekeeping techniques
   - Honey harvesting and processing
   - Value addition

6. **Beef Fattening and Feedlot Management** (5 days)
   - Profitable beef production
   - Feedlot management
   - Marketing

All courses include practical sessions at our demonstration farm. For registration and inquiries, please contact the Registrar's office or visit our website.`,
      category: 'Courses',
      image: '/images/3_Vet_Treks_Is_Heading_In_A_New_Direction.png',
      source: 'AHITI Ndomba',
      sourceUrl: '#'
    },
    {
      date: 'January 20, 2025',
      author: 'State Department for Livestock Development',
      title: 'Digital Livestock Registration Exercise at AHITI Ndomba',
      excerpt: 'Catherine and a team from the Animal Health Department conducted a digital livestock registration exercise at AHITI Ndomba farm.',
      content: `The State Department for Livestock Development, through the Directorate of Veterinary Services, conducted a digital livestock registration exercise at AHITI Ndomba farm.

Led by Dr. Kihara from the Animal Health Department, the exercise aimed to digitize livestock records at the institute's demonstration farm, enhancing data management and traceability.

The digital registration system will help in:
- Improved livestock tracking and management
- Better disease surveillance
- Enhanced breeding records
- Accurate production statistics
- Compliance with international standards

This initiative is part of the government's broader strategy to modernize livestock management in Kenya and align with international best practices in animal health and production.

AHITI Ndomba continues to serve as a model training institution, embracing modern technologies to enhance the quality of training provided to students.`,
      category: 'Government',
      image: '/images/6_Researching_and_analysing_the_Kenya.png',
      source: 'X (Twitter) - AHITI Ndomba',
      sourceUrl: 'https://x.com/AhitiNdomba'
    },
    {
      date: 'December 15, 2024',
      author: 'AHITI Ndomba',
      title: 'End of Year Graduation Ceremony',
      excerpt: 'AHITI Ndomba celebrated the graduation of over 150 students from various programs.',
      content: `AHITI Ndomba proudly celebrated the graduation of over 150 students from various diploma and certificate programs at the end-of-year graduation ceremony held at the institute.

The graduating class included:
- 80 Diploma in Animal Health and Production graduates
- 50 Certificate in Animal Health and Production graduates
- 20 Upgrading Certificate to Diploma graduates

The Chief Guest, representing the State Department for Livestock Development, congratulated the graduates and urged them to apply the knowledge and skills gained to transform the livestock sector in Kenya.

"You are now equipped with the skills to make a real difference in our communities. Go out there and be ambassadors of excellence in animal health and production," the Chief Guest said.

The Principal, Mr. G.W. Silfuna, highlighted the institute's achievements over the past year, including improved pass rates, enhanced practical training facilities, and increased enrollment.

Several outstanding students received awards for academic excellence and exemplary performance in practical skills.

The ceremony concluded with a call for the graduates to maintain high professional standards and contribute to the sustainable development of the livestock sub-sector.`,
      category: 'Events',
      image: '/images/5_Graduants_fears_headache_amid_unemployment.png',
      source: 'AHITI Ndomba',
      sourceUrl: '#'
    },
    {
      date: 'November 10, 2024',
      author: 'Kenya Veterinary Board',
      title: 'AHITI Ndomba Maintains Accreditation Status',
      excerpt: 'The Kenya Veterinary Board has renewed AHITI Ndomba\'s accreditation for all animal health training programs.',
      content: `The Kenya Veterinary Board (KVB) has renewed AHITI Ndomba's accreditation for all animal health training programs following a comprehensive inspection and evaluation.

The accreditation covers:
- Diploma in Animal Health and Production
- Certificate in Animal Health and Production
- Upgrading Certificate to Diploma
- All short courses in animal health

The KVB inspection team commended the institute for:
- Maintaining high standards in curriculum delivery
- Excellent practical training facilities
- Qualified and dedicated teaching staff
- Good student-teacher ratios
- Adequate learning resources
- Proper record keeping

The Principal expressed gratitude to the KVB for the recognition and assured that the institute will continue to uphold the highest standards of training.

"This accreditation is a testament to our commitment to quality education. We will continue to invest in our facilities and staff to ensure our graduates are well-prepared for the industry," the Principal said.

Students and prospective applicants are assured that qualifications from AHITI Ndomba are recognized and respected both locally and internationally.`,
      category: 'Milestone',
      image: '/images/5_The_Role_of_Ministry_of_Agriculture.png',
      source: 'Kenya Veterinary Board',
      sourceUrl: 'https://kenyavetboard.or.ke'
    }
  ]

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
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
          {filteredNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news, index) => (
                <article
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 cursor-pointer"
                  onClick={() => setSelectedNews(news)}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-ahiti-secondary text-ahiti-primary">{news.category}</Badge>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {news.date}
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
                        {news.author}
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
      <Dialog open={!!selectedNews} onOpenChange={() => setSelectedNews(null)}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedNews && (
            <>
              <div className="h-64 -mx-6 -mt-6 mb-6 overflow-hidden">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-ahiti-secondary text-ahiti-primary">{selectedNews.category}</Badge>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {selectedNews.date}
                  </span>
                </div>
                <DialogTitle className="text-ahiti-primary text-2xl">{selectedNews.title}</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <User className="w-4 h-4 mr-1" />
                  By {selectedNews.author}
                </div>
                <div className="prose prose-gray max-w-none">
                  {selectedNews.content.split('\n\n').map((paragraph: string, idx: number) => (
                    <p key={idx} className="text-gray-600 mb-4 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {selectedNews.sourceUrl && (
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm text-gray-500 mb-2">Source: {selectedNews.source}</p>
                    <a 
                      href={selectedNews.sourceUrl}
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
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default News
