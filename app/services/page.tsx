import { Smartphone, Code, Palette, BarChart3, Shield, Headphones } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Phát triển ứng dụng di động",
      description: "Tạo ra các ứng dụng iOS và Android chất lượng cao với trải nghiệm người dùng tuyệt vời",
      features: ["React Native", "Flutter", "Native iOS/Android", "Cross-platform"],
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Phát triển web",
      description: "Xây dựng website và ứng dụng web hiện đại, responsive và tối ưu hiệu suất",
      features: ["React/Next.js", "Vue.js", "Node.js", "Progressive Web Apps"],
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Thiết kế UX/UI",
      description: "Thiết kế giao diện người dùng đẹp mắt và trải nghiệm người dùng tối ưu",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Phân tích dữ liệu",
      description: "Cung cấp insights từ dữ liệu để giúp doanh nghiệp đưa ra quyết định thông minh",
      features: ["Data Analytics", "Business Intelligence", "Machine Learning", "Reporting"],
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bảo mật ứng dụng",
      description: "Đảm bảo an toàn và bảo mật cho các ứng dụng và hệ thống của bạn",
      features: ["Security Audit", "Penetration Testing", "Compliance", "Risk Assessment"],
      color: "bg-red-100 text-red-600",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Hỗ trợ & Bảo trì",
      description: "Dịch vụ hỗ trợ 24/7 và bảo trì định kỳ để đảm bảo ứng dụng hoạt động ổn định",
      features: ["24/7 Support", "Regular Updates", "Performance Monitoring", "Bug Fixes"],
      color: "bg-teal-100 text-teal-600",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Tư vấn & Phân tích",
      description: "Hiểu rõ nhu cầu và mục tiêu của khách hàng để đưa ra giải pháp phù hợp nhất",
    },
    {
      step: "02",
      title: "Thiết kế & Lập kế hoạch",
      description: "Tạo ra wireframe, mockup và lập kế hoạch chi tiết cho dự án",
    },
    {
      step: "03",
      title: "Phát triển",
      description: "Triển khai phát triển sản phẩm theo đúng tiêu chuẩn và timeline đã đề ra",
    },
    {
      step: "04",
      title: "Kiểm thử & Triển khai",
      description: "Thực hiện kiểm thử toàn diện và triển khai sản phẩm lên môi trường production",
    },
    {
      step: "05",
      title: "Hỗ trợ & Bảo trì",
      description: "Cung cấp dịch vụ hỗ trợ và bảo trì liên tục để đảm bảo sản phẩm hoạt động tốt",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Dịch vụ của chúng tôi</h1>
            <p className="text-xl leading-relaxed">
              Chúng tôi cung cấp các dịch vụ công nghệ toàn diện để giúp doanh nghiệp của bạn phát triển và thành công
              trong kỷ nguyên số.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dịch vụ chuyên nghiệp</h2>
            <p className="text-gray-600">Giải pháp công nghệ toàn diện cho mọi nhu cầu của bạn</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    Tìm hiểu thêm
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quy trình làm việc</h2>
            <p className="text-gray-600">Phương pháp tiếp cận có hệ thống để đảm bảo chất lượng dự án</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>

                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Sẵn sàng bắt đầu dự án của bạn?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Hãy liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Liên hệ ngay
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Xem portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Câu hỏi thường gặp</h2>
              <p className="text-gray-600">Những câu hỏi phổ biến về dịch vụ của chúng tôi</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Thời gian phát triển một ứng dụng di động là bao lâu?",
                  answer:
                    "Thời gian phát triển phụ thuộc vào độ phức tạp của ứng dụng. Một ứng dụng đơn giản có thể mất 2-3 tháng, trong khi ứng dụng phức tạp có thể mất 6-12 tháng.",
                },
                {
                  question: "Chi phí phát triển ứng dụng là bao nhiêu?",
                  answer:
                    "Chi phí được tính dựa trên yêu cầu cụ thể của dự án. Chúng tôi sẽ cung cấp báo giá chi tiết sau khi hiểu rõ nhu cầu của bạn.",
                },
                {
                  question: "Có hỗ trợ sau khi ứng dụng được phát hành không?",
                  answer:
                    "Có, chúng tôi cung cấp dịch vụ hỗ trợ và bảo trì 24/7 để đảm bảo ứng dụng của bạn luôn hoạt động ổn định.",
                },
                {
                  question: "Có thể phát triển cho cả iOS và Android không?",
                  answer:
                    "Có, chúng tôi có thể phát triển ứng dụng native cho từng platform hoặc sử dụng công nghệ cross-platform để tiết kiệm thời gian và chi phí.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
