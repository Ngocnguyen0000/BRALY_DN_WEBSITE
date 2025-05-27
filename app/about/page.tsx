import { Target, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Nguyễn Văn A",
      position: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      description: "10+ năm kinh nghiệm trong lĩnh vực công nghệ",
    },
    {
      name: "Trần Thị B",
      position: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      description: "Chuyên gia về phát triển ứng dụng di động",
    },
    {
      name: "Lê Văn C",
      position: "Head of Design",
      image: "/placeholder.svg?height=300&width=300",
      description: "Thiết kế UX/UI với hơn 8 năm kinh nghiệm",
    },
    {
      name: "Phạm Thị D",
      position: "Head of Marketing",
      image: "/placeholder.svg?height=300&width=300",
      description: "Chuyên gia marketing số với nhiều chiến dịch thành công",
    },
  ]

  const milestones = [
    {
      year: "2019",
      title: "Thành lập công ty",
      description: "Braly được thành lập với tầm nhìn tạo ra những ứng dụng di động hữu ích",
    },
    {
      year: "2020",
      title: "Sản phẩm đầu tiên",
      description: "Ra mắt ứng dụng đầu tiên với 10K+ người dùng trong tháng đầu",
    },
    {
      year: "2021",
      title: "Mở rộng đội ngũ",
      description: "Tăng quy mô lên 25 nhân viên và mở văn phòng mới",
    },
    {
      year: "2022",
      title: "My Plant ra mắt",
      description: "Ứng dụng My Plant đạt 100K+ lượt tải trong 6 tháng đầu",
    },
    {
      year: "2023",
      title: "Mở rộng quốc tế",
      description: "Sản phẩm có mặt tại 10+ quốc gia với 500K+ người dùng",
    },
    {
      year: "2024",
      title: "Hiện tại",
      description: "50+ nhân viên, 1M+ người dùng trên toàn thế giới",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Về chúng tôi</h1>
            <p className="text-xl leading-relaxed">
              Braly là một công ty công nghệ trẻ, năng động với sứ mệnh tạo ra những ứng dụng di động giúp cuộc sống của
              hàng triệu người trở nên dễ dàng và tiện lợi hơn.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Sứ mệnh</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "Make it easy to do everything" - Chúng tôi cam kết mang lại sự thuận tiện và linh hoạt cho các cá
                  nhân trong mọi khía cạnh của cuộc sống, từ công việc đến giải trí, từ giáo dục đến sức khỏe.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Tầm nhìn</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Trở thành công ty công nghệ hàng đầu trong việc phát triển các ứng dụng di động thông minh, được tin
                  dùng bởi hàng triệu người dùng trên toàn thế giới.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hành trình phát triển</h2>
            <p className="text-gray-600">Những cột mốc quan trọng trong quá trình phát triển của Braly</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h4>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Đội ngũ lãnh đạo</h2>
            <p className="text-gray-600">Những người dẫn dắt Braly hướng tới thành công</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Nhân viên</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">Người dùng</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Sản phẩm</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Năm kinh nghiệm</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
