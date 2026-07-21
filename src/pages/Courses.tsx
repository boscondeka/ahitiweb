import { useState } from 'react'
import { 
  GraduationCap, Clock, BookOpen, Award, CheckCircle2,
  Target, Heart, Sparkles, ArrowRight, Users
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null)

  const regularCourses = [
    {
      title: 'Diploma in Animal Health and Production',
      duration: '2.5 years (2,905 hours)',
      fee: 'KSh 210,300',
      icon: GraduationCap,
      description: 'Comprehensive training for veterinary paraprofessionals with extensive practical experience in animal health and production.',
      requirements: [
        'KCSE Mean Grade C with C in Biology, C- in Chemistry, and C- in Mathematics/Agriculture/Physics',
        'OR relevant Certificate/Diploma qualifications',
        'OR KCE/EACE Division II with credit in Biology and Chemistry'
      ],
      careers: [
        'Veterinary Paraprofessional',
        'Livestock Extension Officer',
        'Farm Manager',
        'Animal Health Technician',
        'Quality Control Officer'
      ],
      modules: [
        'Animal Anatomy and Physiology',
        'Animal Nutrition',
        'Animal Health and Disease Control',
        'Livestock Production Systems',
        'Veterinary Pharmacology',
        'Surgery and Anesthesia',
        'Reproductive Health',
        'Farm Management'
      ]
    },
    {
      title: 'Upgrading to Diploma in Animal Health and Production',
      duration: '1.5 years (1,470 hours)',
      fee: 'KSh 111,300',
      icon: Award,
      description: 'Advanced program for certificate holders seeking diploma qualification in animal health and production.',
      requirements: [
        'Certificate in Animal Health and Production',
        'OR Certificate in Animal Health and Range Management',
        'OR equivalent qualifications from recognized institutions'
      ],
      careers: [
        'Senior Veterinary Paraprofessional',
        'Livestock Officer',
        'Farm Consultant',
        'Quality Assurance Officer'
      ],
      modules: [
        'Advanced Animal Health',
        'Livestock Economics',
        'Research Methods',
        'Extension Methods',
        'Project Management'
      ]
    },
    {
      title: 'Certificate in Animal Health and Production',
      duration: '2 years (2,125 hours)',
      fee: 'KSh 136,700',
      icon: BookOpen,
      description: 'Foundation course for frontline extension workers in the livestock sector.',
      requirements: [
        'KCSE Mean Grade C with C- in Biology or Biological Sciences',
        'OR Credit in relevant one-year certificate course',
        'OR D+ in Biology for certificate holders'
      ],
      careers: [
        'Frontline Extension Worker',
        'Community Animal Health Worker',
        'Farm Assistant',
        'Livestock Attendant'
      ],
      modules: [
        'Basic Animal Science',
        'Animal Health Basics',
        'Livestock Management',
        'Pasture and Fodder Production',
        'Basic Veterinary Skills'
      ]
    }
  ]

  const shortCourses = [
    {
      title: 'Artificial Insemination in Cattle',
      duration: '4 weeks (130 hours)',
      icon: Target,
      description: 'Comprehensive training in cattle artificial insemination techniques and reproductive management.',
      topics: [
        'Anatomy of the reproductive system',
        'Heat detection and synchronization',
        'Semen handling and storage',
        'Insemination techniques',
        'Record keeping'
      ]
    },
    {
      title: 'Artificial Insemination in Goats',
      duration: '2 weeks (79 hours)',
      icon: Target,
      description: 'Specialized training in goat artificial insemination with hands-on practical sessions.',
      topics: [
        'Goat reproductive physiology',
        'Semen collection and processing',
        'AI techniques for goats',
        'Breeding management'
      ]
    },
    {
      title: 'Feed Formulation and Milling Technology',
      duration: '5 days',
      icon: Sparkles,
      description: 'Learn to formulate balanced animal feeds and operate feed milling equipment.',
      topics: [
        'Nutritional requirements',
        'Feed ingredient selection',
        'Ration formulation',
        'Feed processing',
        'Quality control'
      ]
    },
    {
      title: 'Poultry Farming',
      duration: '5 days',
      icon: Heart,
      description: 'Complete guide to successful poultry farming from day-old chicks to market.',
      topics: [
        'Housing and equipment',
        'Breeds and breeding',
        'Nutrition and feeding',
        'Health management',
        'Marketing'
      ]
    },
    {
      title: 'Bee Farming (Apiculture)',
      duration: '5 days',
      icon: Sparkles,
      description: 'Learn modern beekeeping techniques for honey production and pollination services.',
      topics: [
        'Hive management',
        'Bee behavior',
        'Honey harvesting',
        'Bee health',
        'Value addition'
      ]
    },
    {
      title: 'Beef Fattening and Feedlot Management',
      duration: '5 days',
      icon: Target,
      description: 'Master the art of profitable beef fattening and feedlot operations.',
      topics: [
        'Breed selection',
        'Nutrition programs',
        'Health protocols',
        'Record keeping',
        'Marketing strategies'
      ]
    }
  ]

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-ahiti-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-ahiti-secondary text-ahiti-primary">Our Programs</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Courses Offered
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We offer practical-oriented training in regular courses and short-duration courses 
              designed to equip you with industry-relevant skills.
            </p>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="regular" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="regular" className="data-[state=active]:bg-ahiti-primary data-[state=active]:text-white">
                Regular Courses
              </TabsTrigger>
              <TabsTrigger value="short" className="data-[state=active]:bg-ahiti-primary data-[state=active]:text-white">
                Short Courses
              </TabsTrigger>
            </TabsList>

            <TabsContent value="regular">
              <div className="grid lg:grid-cols-3 gap-8">
                {regularCourses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
                  >
                    <div className="w-14 h-14 bg-ahiti-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <course.icon className="w-7 h-7 text-ahiti-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-ahiti-primary mb-3">{course.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm">{course.duration}</span>
                      </div>
                      <div className="flex items-center text-ahiti-primary font-semibold">
                        <span className="text-sm">Fee: {course.fee}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 flex-grow">{course.description}</p>
                    <Button 
                      className="w-full bg-ahiti-primary text-white hover:bg-ahiti-dark"
                      onClick={() => setSelectedCourse(course)}
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="short">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {shortCourses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-ahiti-secondary/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <course.icon className="w-6 h-6 text-ahiti-primary" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold text-ahiti-primary mb-2">{course.title}</h3>
                        <div className="flex items-center text-gray-500 text-sm mb-3">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-ahiti-primary text-ahiti-primary hover:bg-ahiti-primary hover:text-white"
                          onClick={() => setSelectedCourse(course)}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-ahiti-primary/10 text-ahiti-primary">General Requirements</Badge>
              <h2 className="text-3xl font-bold text-ahiti-primary mb-6">
                Entry Requirements
              </h2>
              <p className="text-gray-600 mb-6">
                All applicants must meet the minimum entry requirements as set by the Kenya Veterinary Board (KVB) 
                and the Kenya National Qualifications Authority (KNQA).
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-ahiti-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Diploma Courses</h4>
                    <p className="text-gray-600 text-sm">KCSE Mean Grade C with C in Biology, C- in Chemistry, and C- in Mathematics/Agriculture/Physics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-ahiti-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Certificate Courses</h4>
                    <p className="text-gray-600 text-sm">KCSE Mean Grade C with C- in Biology or Biological Sciences</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-ahiti-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Short Courses</h4>
                    <p className="text-gray-600 text-sm">Open to all interested individuals with basic education</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-ahiti-primary mb-6">Required Documents</h3>
              <div className="space-y-3">
                {[
                  'Copies of academic certificates',
                  'National ID or relevant identification',
                  'Secondary school leaving certificate',
                  'Birth certificate',
                  'Two recent passport-size photos',
                  'Application fee receipt (KSh 1,000)'
                ].map((doc, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-ahiti-secondary" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-ahiti-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-ahiti-secondary text-ahiti-primary">Your Future</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Career Opportunities
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              Our graduates are well-equipped for various career paths in the livestock industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Veterinary Services', desc: 'Work in government or private veterinary clinics' },
              { icon: Target, title: 'Livestock Extension', desc: 'Support farmers with technical knowledge' },
              { icon: Award, title: 'Farm Management', desc: 'Manage commercial livestock operations' },
              { icon: BookOpen, title: 'Research', desc: 'Contribute to livestock research and development' },
            ].map((career, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-ahiti-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <career.icon className="w-7 h-7 text-ahiti-secondary" />
                </div>
                <h3 className="font-bold text-white mb-2">{career.title}</h3>
                <p className="text-white/70 text-sm">{career.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ahiti-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ahiti-primary mb-6">
            Ready to Apply?
          </h2>
          <p className="text-lg text-ahiti-primary/80 mb-8">
            Applications for the 2026 intake are now open. Secure your place today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-ahiti-primary text-white hover:bg-ahiti-dark" asChild>
              <a href="/admissions">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-ahiti-primary text-ahiti-primary hover:bg-ahiti-primary hover:text-white" asChild>
              <a href="/contact">Contact Admissions</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-ahiti-primary text-2xl">{selectedCourse?.title}</DialogTitle>
          </DialogHeader>
          {selectedCourse && (
            <div className="space-y-6 py-4">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  {selectedCourse.duration}
                </div>
                {selectedCourse.fee && (
                  <div className="text-ahiti-primary font-semibold">
                    Fee: {selectedCourse.fee}
                  </div>
                )}
              </div>
              
              <p className="text-gray-600">{selectedCourse.description}</p>

              {selectedCourse.requirements && (
                <div>
                  <h4 className="font-bold text-ahiti-primary mb-3">Entry Requirements</h4>
                  <ul className="space-y-2">
                    {selectedCourse.requirements.map((req: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-ahiti-primary flex-shrink-0 mt-1" />
                        <span className="text-gray-600 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedCourse.modules && (
                <div>
                  <h4 className="font-bold text-ahiti-primary mb-3">Course Modules</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCourse.modules.map((module: string, idx: number) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {module}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedCourse.topics && (
                <div>
                  <h4 className="font-bold text-ahiti-primary mb-3">Topics Covered</h4>
                  <ul className="space-y-2">
                    {selectedCourse.topics.map((topic: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-ahiti-primary flex-shrink-0 mt-1" />
                        <span className="text-gray-600 text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedCourse.careers && (
                <div>
                  <h4 className="font-bold text-ahiti-primary mb-3">Career Opportunities</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCourse.careers.map((career: string, idx: number) => (
                      <span key={idx} className="px-3 py-1 bg-ahiti-primary/10 text-ahiti-primary text-sm rounded-full">
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <Button className="w-full bg-ahiti-primary text-white hover:bg-ahiti-dark" asChild>
                <a href="/admissions">Apply for this Course</a>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Courses
