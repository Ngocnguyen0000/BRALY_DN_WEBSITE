import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Địa chỉ",
      details: ["123 Đường ABC, Quận XYZ", "Hà Nội, Việt Nam"],
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Điện thoại",
      details: ["+84 123 456 789", "+84 987 654 321"],
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["contact@braly.com", "support@braly.com"],
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Giờ làm việc",
      details: ["Thứ 2 - Thứ 6: 8:00 - 17:30", "Thứ 7: 8:00 - 12:00"],
      color: "bg-orange-100 text-orange-600",
    },
  ]

  const offices = [
    {
      city: "Hà Nội",
      address: "123 Đường ABC, Quận XYZ, Hà Nội",
      phone: "+84 123 456 789",
      email: "hanoi@braly.com",
    },
    {
      city: "Hồ Chí Minh",
      address: "456 Đường DEF, Quận 1, TP.HCM",
      phone: "+84 987 654 321",
      email: "hcm@braly.com",
    },
    {
      city: "Đà Nẵng",
      address: "789 Đường GHI, Quận Hải Châu, Đà Nẵng",
      phone: "+84 555 666 777",
      email: "danang@braly.com",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Liên hệ với chúng tôi</h1>
            <p className="text-xl leading-relaxed">
              Hãy để lại thông tin hoặc liên hệ trực tiếp với chúng tôi. Đội ngũ Braly luôn sẵn sàng hỗ trợ bạn.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Gửi tin nhắn cho chúng tôi</h2>
              <Card className="border-0 shadow-lg">
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

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
                        <Input placeholder="Nhập số điện thoại" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Công ty</label>
                        <Input placeholder="Tên công ty" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Chủ đề *</label>
                      <Input placeholder="Chủ đề tin nhắn" required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tin nhắn *</label>
                      <Textarea placeholder="Nhập tin nhắn của bạn" rows={6} required />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                      <Send className="w-5 h-5 mr-2" />
                      Gửi tin nhắn
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Office Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Văn phòng của chúng tôi</h2>

              {/* Google Maps Placeholder */}
              <div className="aspect-video bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Google Maps sẽ được tích hợp tại đây</p>
                </div>
              </div>

              {/* Office Locations */}
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{office.city}</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 mt-0.5 text-gray-400" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span>{office.email}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Câu hỏi thường gặp</h2>
              <p className="text-gray-600">Những câu hỏi phổ biến khi liên hệ với chúng tôi</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Thời gian phản hồi của Braly là bao lâu?",
                  answer:
                    "Chúng tôi cam kết phản hồi trong vòng 24 giờ làm việc. Đối với các yêu cầu khẩn cấp, vui lòng gọi trực tiếp đến hotline.",
                },
                {
                  question: "Có thể đặt lịch hẹn trực tiếp tại văn phòng không?",
                  answer:
                    "Có, bạn có thể đặt lịch hẹn trước qua email hoặc điện thoại. Chúng tôi sẽ sắp xếp thời gian phù hợp cho cả hai bên.",
                },
                {
                  question: "Braly có cung cấp tư vấn miễn phí không?",
                  answer:
                    "Có, chúng tôi cung cấp buổi tư vấn miễn phí đầu tiên để hiểu rõ nhu cầu và đưa ra giải pháp phù hợp nhất.",
                },
                {
                  question: "Có thể liên hệ ngoài giờ làm việc không?",
                  answer:
                    "Bạn có thể gửi email hoặc để lại tin nhắn bất cứ lúc nào. Chúng tôi sẽ phản hồi vào giờ làm việc tiếp theo.",
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
