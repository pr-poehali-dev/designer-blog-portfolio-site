import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      id: "logo-trends-2024",
      title: "Тренды в дизайне логотипов 2024",
      excerpt: "Разбираем основные направления и подходы к созданию логотипов в новом году. Минимализм, градиенты и анимация.",
      date: "15 августа 2024",
      readTime: "5 мин",
      category: "Логотипы",
      image: "/img/286fb8e2-f3c6-4fda-a398-aef172451d77.jpg"
    },
    {
      id: "color-psychology",
      title: "Психология цвета в брендинге",
      excerpt: "Как цветовые решения влияют на восприятие бренда и поведение потребителей. Практические советы по выбору палитры.",
      date: "8 августа 2024",
      readTime: "7 мин",
      category: "Брендинг"
    },
    {
      id: "packaging-design",
      title: "Упаковка как инструмент маркетинга",
      excerpt: "Роль дизайна упаковки в продвижении продукта и увеличении продаж. Кейсы успешных решений.",
      date: "1 августа 2024",
      readTime: "6 мин",
      category: "Упаковка",
      image: "/img/d57a7af1-1649-4e50-9f98-d79c33b3d798.jpg"
    },
    {
      id: "ui-ux-trends",
      title: "Тенденции UI/UX дизайна в 2024",
      excerpt: "Что актуально в пользовательских интерфейсах: нейроморфизм, темные темы и персонализация.",
      date: "25 июля 2024", 
      readTime: "8 мин",
      category: "UI/UX"
    },
    {
      id: "brand-identity",
      title: "Создание сильной визуальной идентичности",
      excerpt: "Пошаговое руководство по разработке фирменного стиля от анализа до финального брендбука.",
      date: "18 июля 2024",
      readTime: "10 мин",
      category: "Брендинг",
      image: "/img/828d4e1c-fa7e-43c0-9f2d-ef94e76efe30.jpg"
    },
    {
      id: "design-tools",
      title: "Инструменты дизайнера 2024",
      excerpt: "Обзор современных программ и сервисов для дизайна: от Figma до AI-помощников.",
      date: "10 июля 2024",
      readTime: "4 мин",
      category: "Инструменты"
    }
  ];

  const categories = ["Все", "Логотипы", "Брендинг", "Упаковка", "UI/UX", "Инструменты"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-soft-purple/20 to-background" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      {/* Header */}
      <header className="sticky top-0 bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-coral to-turquoise bg-clip-text text-transparent">
              Анна Дизайн
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
              <Link to="/portfolio" className="hover:text-primary transition-colors">Портфолио</Link>
              <Link to="/blog" className="text-primary">Блог</Link>
              <Link to="/services" className="hover:text-primary transition-colors">Услуги</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Контакты</Link>
            </div>
            <Button className="bg-gradient-to-r from-coral to-primary text-white">
              Написать
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Блог о{' '}
            <span className="bg-gradient-to-r from-coral via-turquoise to-blue bg-clip-text text-transparent">
              дизайне
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Делюсь опытом, трендами и практическими советами в мире графического дизайна и брендинга
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={category === "Все" ? "default" : "secondary"}
                className={`px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors ${
                  category === "Все" ? "bg-primary text-primary-foreground" : ""
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Рекомендуемая статья</h2>
          <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/img/286fb8e2-f3c6-4fda-a398-aef172451d77.jpg" 
                  alt="Тренды в дизайне логотипов 2024" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary">
                  Рекомендуем
                </Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <Badge variant="outline">Логотипы</Badge>
                  <span>15 августа 2024</span>
                  <span>•</span>
                  <span>5 мин</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  Тренды в дизайне логотипов 2024
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Разбираем основные направления и подходы к созданию логотипов в новом году. Минимализм, градиенты и анимация — что действительно работает в современном дизайне.
                </p>
                <Link to="/blog/logo-trends-2024">
                  <Button className="bg-gradient-to-r from-coral to-primary text-white">
                    Читать статью
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Все статьи</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="aspect-[16/9] relative overflow-hidden">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-coral/20 via-turquoise/20 to-blue/20" />
                  )}
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={`/blog/${post.id}`} className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Не пропускайте новые статьи</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Подпишитесь на рассылку и получайте свежие материалы о дизайне прямо на почту
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваша почта"
              className="px-4 py-3 border rounded-lg flex-1"
            />
            <Button className="bg-gradient-to-r from-coral to-primary text-white px-6">
              Подписаться
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}