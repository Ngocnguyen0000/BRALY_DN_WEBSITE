"use client"

import { useState, useEffect } from "react"
import {
  ChevronUp,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Award,
  Target,
  Heart,
  Lightbulb,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function BralyWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const coreValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Minh bạch",
      description:
        "Chúng tôi tin vào sự cởi mở và trung thực trong mọi giao dịch của mình, cho dù đó là với khách hàng hay nhân viên.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Sát sao",
      description: "Tại Braly, văn hóa 'sát sao' không chỉ là một phương châm mà còn là cách sống của chúng tôi.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Sáng tạo",
      description:
        "Chúng tôi luôn khuyến khích mọi nhân viên được nuôi dưỡng trí tưởng tượng và thỏa mãn để xuất những ý tưởng mới.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Linh hoạt",
      description: "Tại Braly linh hoạt không chỉ là giá trị mà còn là một phần không thể thiếu của văn hóa tổ chức.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Đồng hành",
      description:
        "Tại công ty chúng tôi, văn hóa 'đồng hành' không chỉ là một phương châm mà còn là tinh thần chung của mọi người.",
      color: "bg-teal-100 text-teal-600",
    },
  ]

  const activities = [
    {
      image: "/images/activities.png",
      title: "[BIRTHDAY & YEAR END PARTY 2024] SPEED UP! BRALY! - TĂNG TỐC VƯƠN XA 🏎️🏁",
      description:
        "Ngày 18/1, tại vùng đất thơ mộng Ba Vì, đại gia đình BRALY đã cùng nhau bùng nổ với sự kiện Birthday & Year End Party 2024...",
      date: "January 23, 2025",
    },
    {
      image: "/images/activities.png",
      title: "[TẾT DƯƠNG LỊCH 2024] HÀO HỨNG ĐÓN TẾT - NHẬN QUÀ TỪ BRALY 🏠🎄🎁",
      description:
        "Hôm nay, ngày 30/12, không khí tại công ty Braly ngập tràn niềm vui khi các phần quà Tết Dương Lịch được trao tận tay đến từng nhân viên...",
      date: "December 31, 2024",
    },
    {
      image: "/images/activities.png",
      title: "[GIÁNG SINH 2024] MERRY CHRISTMAS 🏠🎄🎁",
      description:
        "Chiều nay, cả nhà Braly đã có một buổi lễ Giáng sinh thật đầm ấm và vui nhộn. Secret Santa, những món quà bí mật được trao nhau đầy bất ngờ và ý nghĩa...",
      date: "December 31, 2024",
    },
  ]

  const stats = [
    { number: "300K+", label: "Lượt tải" },
    { number: "100K+", label: "Người dùng" },
    { number: "50+", label: "Nhân viên" },
    { number: "5+", label: "Năm kinh nghiệm" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold text-gray-900">BRALY</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                Trang chủ
              </a>
              <a href="#activities" className="text-gray-700 hover:text-blue-600 transition-colors">
                Hoạt động
              </a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">
                Sản phẩm
              </a>
              <a href="#recruitment" className="text-gray-700 hover:text-blue-600 transition-colors">
                Tuyển dụng
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                Giới thiệu
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Trang chủ
                </a>
                <a href="#activities" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Hoạt động
                </a>
                <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Sản phẩm
                </a>
                <a href="#recruitment" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Tuyển dụng
                </a>
                <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Giới thiệu
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">We Are Braly</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We create mobile apps for millions user around the world
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            Khám phá ngay
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <img src="/images/hero-team.png" alt="Braly Team" className="w-full h-auto object-cover opacity-80" />
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl font-bold text-blue-100 mb-4">WE</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Young, Smart
                <br />
                and <span className="text-blue-600">Work Hard</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Sứ mệnh</h3>
                    <p className="text-gray-600">"Make it easy to do everything"</p>
                    <p className="text-gray-600 mt-2">
                      Sứ mệnh của chúng tôi là xây dựng một thế giới nơi mọi người có thể dễ dàng hoàn thành mọi việc
                      thông qua công nghệ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/company-values.png"
                alt="Company Values"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Giá trị <span className="text-blue-600">cốt lõi</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  <Button variant="link" className="text-blue-600 mt-4 p-0">
                    Xem thêm {">"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Văn hóa <span className="text-blue-600">Braly</span>
            </h2>
          </div>

          <div className="space-y-16">
            {/* Supportive Culture */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Supportive</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Văn hóa supportive là một nguyên tắc hướng dẫn cho mọi hành động và quyết định của công ty.
                </p>
                <p className="text-gray-600 mb-4">
                  Chúng tôi coi trong sự thành công của cá nhân những sự phát triển của đội nhóm là vấn đề tiên quyết.
                </p>
                <p className="text-gray-600">
                  Văn hóa supportive của chúng tôi cũng thể hiện thông qua sự chú trọng đặc biệt vào sự công tác và giao
                  tiếp.
                </p>
              </div>
              <div>
                <img
                  src="/images/company-culture.png"
                  alt="Supportive Culture"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Learning & Development */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="/images/company-culture.png"
                  alt="Learning & Development"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Learning & Development</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Văn hóa của chúng tôi đặt sự coi trọng học tập và phát triển ở vị trí trung tâm, nhìn nhận rằng sự
                  tiến bộ không ngừng và sự học hỏi liên tục là chìa khóa của sự thành công cá nhân và tập thể.
                </p>
                <p className="text-gray-600">
                  Chúng tôi khuyến khích mọi thành viên của tổ chức học hỏi, phát triển kỹ năng, và không ngần ngại
                  thách thức bản thân.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Hard Play Hard Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold">Work hard – Play hard</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Chúng tôi không chỉ là những người làm việc chăm chỉ, mà còn là những người đam mê, tràn đầy nhiệt
                huyết. Mỗi ngày, chúng tôi đặt tâm huyết và nỗ lực tối đa vào công việc của mình, đạt ra những mục tiêu
                cao lớn và không ngừng vươn lên.
              </p>
              <p className="text-gray-300">
                Chúng tôi không chỉ là những con người nghiêm túc mà chúng tôi cũng biết mình, đam mê và sống tạo. Chúng
                tôi tận hưởng mỗi khoảnh khắc, tạo ra những kỷ niệm đáng nhớ và kết nối mạnh mẽ với đồng đội.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <img src="/images/work-play.png" alt="Work Hard Play Hard" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hoạt <span className="text-blue-600">động</span>
            </h2>
            <p className="text-gray-600">Những hoạt động mới nhất của chúng tôi!</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{activity.description}</p>
                  <p className="text-blue-600 text-sm font-medium">{activity.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              Xem thêm {">"}
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Sản phẩm nổi bật</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">🌱</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-6">My Plant</h3>
                <div className="grid grid-cols-2 gap-8 mb-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                      <div className="text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Plant Identifier & Plant Care, ứng dụng giúp nhận dạng và chăm sóc thực vật, hay khám phá một thế giới
                  nơi bạn có thể xác định nhiều loại cây, hoa, thảo mộc và cây cối khác nhau chỉ bằng cách chụp một bức
                  ảnh.
                </p>
              </div>
              <div className="relative">
                <img src="/images/featured-product.png" alt="My Plant App" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Liên hệ với chúng tôi</h2>
              <p className="text-gray-600">Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn sớm nhất</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Thông tin liên hệ</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Địa chỉ</h4>
                      <p className="text-gray-600">123 Đường ABC, Quận XYZ, Hà Nội</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Điện thoại</h4>
                      <p className="text-gray-600">+84 123 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">contact@braly.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Giờ làm việc</h4>
                      <p className="text-gray-600">Thứ 2 - Thứ 6: 8:00 - 17:30</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên *</label>
                        <Input placeholder="Nhập họ và tên" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <Input type="email" placeholder="Nhập email" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
                      <Input placeholder="Nhập số điện thoại" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tin nhắn *</label>
                      <Textarea placeholder="Nhập tin nhắn của bạn" rows={5} required />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Gửi tin nhắn
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Đăng ký nhận tin tức mới nhất</h3>
            <p className="text-blue-100 mb-8">Nhận thông tin về các sản phẩm mới và hoạt động của Braly</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Nhập email của bạn" className="flex-1 bg-white" />
              <Button className="bg-white text-blue-600 hover:bg-gray-100">Đăng ký</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold">BRALY</span>
              </div>
              <p className="text-gray-400 mb-6">We create mobile apps for millions user around the world</p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Công ty</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Tuyển dụng
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Sản phẩm</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    My Plant
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Ứng dụng khác
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Hỗ trợ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Liên hệ</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">123 Đường ABC, Hà Nội</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">+84 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">contact@braly.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 Braly. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50 flex items-center justify-center"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
