import { Calendar, User, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  const featuredPost = {
    title: "Xu hướng phát triển ứng dụng di động năm 2024",
    excerpt:
      "Khám phá những công nghệ và xu hướng mới nhất trong phát triển ứng dụng di động sẽ định hình ngành công nghiệp trong năm 2024.",
    image: "/placeholder.svg?height=400&width=800",
    author: "Nguyễn Văn A",
    date: "15 Tháng 1, 2024",
    category: "Công nghệ",
    readTime: "5 phút đọc",
  }

  const blogPosts = [
    {
      title: "React Native vs Flutter: So sánh chi tiết 2024",
      excerpt: "Phân tích ưu nhược điểm của hai framework phát triển ứng dụng di động phổ biến nhất hiện nay.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Trần Thị B",
      date: "12 Tháng 1, 2024",
      category: "Development",
      readTime: "8 phút đọc",
    },
    {
      title: "Tối ưu hiệu suất ứng dụng React Native",
      excerpt: "Những kỹ thuật và best practices để cải thiện hiệu suất ứng dụng React Native của bạn.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Lê Văn C",
      date: "10 Tháng 1, 2024",
      category: "Performance",
      readTime: "6 phút đọc",
    },
    {
      title: "UI/UX Design Trends 2024",
      excerpt: "Khám phá những xu hướng thiết kế giao diện người dùng sẽ thống trị trong năm 2024.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Phạm Thị D",
      date: "8 Tháng 1, 2024",
      category: "Design",
      readTime: "4 phút đọc",
    },
    {
      title: "Bảo mật ứng dụng di động: Những điều cần biết",
      excerpt: "Hướng dẫn chi tiết về cách bảo vệ ứng dụng di động khỏi các mối đe dọa bảo mật.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Hoàng Văn E",
      date: "5 Tháng 1, 2024",
      category: "Security",
      readTime: "7 phút đọc",
    },
    {
      title: "Machine Learning trong ứng dụng di động",
      excerpt: "Cách tích hợp AI và Machine Learning vào ứng dụng di động để tạo ra trải nghiệm thông minh.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Nguyễn Thị F",
      date: "3 Tháng 1, 2024",
      category: "AI/ML",
      readTime: "9 phút đọc",
    },
    {
      title: "Progressive Web Apps: Tương lai của web",
      excerpt: "Tìm hiểu về PWA và cách chúng đang thay đổi cách chúng ta tiếp cận phát triển web.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Vũ Văn G",
      date: "1 Tháng 1, 2024",
      category: "Web Development",
      readTime: "5 phút đọc",
    },
  ]

  const categories = ["Tất cả", "Công nghệ", "Development", "Design", "Security", "AI/ML", "Web Development"]

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Blog & Tin tức</h1>
            <p className="text-xl leading-relaxed">
              Chia sẻ kiến thức, kinh nghiệm và những xu hướng mới nhất trong lĩnh vực công nghệ
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-blue-100 text-blue-600 hover:bg-blue-100">Bài viết nổi bật</Badge>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <Badge variant="outline">{featuredPost.category}</Badge>
                  </div>
                  <Button className="w-fit bg-blue-600 hover:bg-blue-700">
                    Đọc tiếp <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={
                    index === 0
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "border-gray-300 hover:border-blue-600 hover:text-blue-600"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                        Đọc thêm <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Load More */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Xem thêm bài viết
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Đăng ký nhận bài viết mới</h3>
            <p className="text-gray-600 mb-8">
              Nhận thông báo về những bài viết mới nhất và xu hướng công nghệ từ Braly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-8">Đăng ký</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
