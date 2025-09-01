import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Index() {
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
              <a href="#hero" className="hover:text-primary transition-colors">Главная</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <Link to="/blog" className="hover:text-primary transition-colors">Блог</Link>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-coral to-primary text-white">
              Написать
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Создаю дизайн, который{' '}
              <span className="bg-gradient-to-r from-coral via-turquoise to-blue bg-clip-text text-transparent">
                работает
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Современный дизайн с фокусом на пользователя. Логотипы, фирменный стиль, упаковка и продуктовый дизайн.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-coral to-primary text-white px-8 py-6 text-lg">
                <Icon name="Palette" className="mr-2" />
                Посмотреть работы
              </Button>
              <Button size="lg" variant="outline" className="border-2 px-8 py-6 text-lg">
                <Icon name="MessageCircle" className="mr-2" />
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Избранные работы в области дизайна логотипов, фирменного стиля и упаковки
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/img/286fb8e2-f3c6-4fda-a398-aef172451d77.jpg" 
                  alt="Дизайн логотипа" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">Логотип</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Логотип IT-стартапа
                </CardTitle>
                <CardDescription>
                  Минималистичный логотип для технологической компании с акцентом на инновации
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/img/d57a7af1-1649-4e50-9f98-d79c33b3d798.jpg" 
                  alt="Дизайн упаковки" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">Упаковка</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Упаковка продукта
                </CardTitle>
                <CardDescription>
                  Яркий дизайн упаковки для товаров повседневного спроса
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/img/828d4e1c-fa7e-43c0-9f2d-ef94e76efe30.jpg" 
                  alt="Фирменный стиль" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">Брендинг</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Фирменный стиль
                </CardTitle>
                <CardDescription>
                  Комплексная система визуальной идентификации для бизнеса
                </CardDescription>
              </CardHeader>
            </Card>

            {[4, 5, 6].map((item) => (
              <Card key={item} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-coral/20 via-turquoise/20 to-blue/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">Проект</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Проект #{item}
                  </CardTitle>
                  <CardDescription>
                    Современное дизайнерское решение для развития бренда
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Блог о дизайне</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Делюсь опытом и трендами в мире дизайна
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Тренды в дизайне логотипов 2024",
                excerpt: "Разбираем основные направления и подходы к созданию логотипов в новом году",
                date: "15 августа 2024",
                readTime: "5 мин"
              },
              {
                title: "Психология цвета в брендинге",
                excerpt: "Как цветовые решения влияют на восприятие бренда и поведение потребителей",
                date: "8 августа 2024",
                readTime: "7 мин"
              },
              {
                title: "Упаковка как инструмент маркетинга",
                excerpt: "Роль дизайна упаковки в продвижении продукта и увеличении продаж",
                date: "1 августа 2024",
                readTime: "6 мин"
              }
            ].map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="aspect-[16/9] bg-gradient-to-br from-yellow/20 via-mint/20 to-purple/20" />
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
                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр дизайнерских услуг для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Zap",
                title: "Разработка логотипа",
                description: "Уникальный логотип, отражающий суть вашего бренда",
                price: "от 15 000 ₽"
              },
              {
                icon: "Palette",
                title: "Фирменный стиль",
                description: "Комплексная система визуальной идентификации",
                price: "от 45 000 ₽"
              },
              {
                icon: "Package",
                title: "Дизайн упаковки",
                description: "Привлекательная упаковка, выделяющая продукт",
                price: "от 25 000 ₽"
              },
              {
                icon: "Smartphone",
                title: "Дизайн продукта",
                description: "UX/UI дизайн цифровых продуктов и интерфейсов",
                price: "от 35 000 ₽"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-coral to-turquoise flex items-center justify-center">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-primary mb-4">
                    {service.price}
                  </div>
                  <Link to={`/services/${service.icon === 'Zap' ? 'logo-design' : service.icon === 'Palette' ? 'brand-identity' : service.icon === 'Package' ? 'packaging-design' : 'ui-ux-design'}`}>
                    <Button className="w-full bg-gradient-to-r from-coral to-primary text-white group-hover:shadow-lg">
                      Заказать
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать проект?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Расскажите о своих задачах, и я предложу лучшее решение
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-coral to-primary text-white px-8 py-6 text-lg">
              <Icon name="MessageCircle" className="mr-2" />
              Написать в Telegram
            </Button>
            <Button size="lg" variant="outline" className="border-2 px-8 py-6 text-lg">
              <Icon name="Mail" className="mr-2" />
              Отправить email
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Icon name="MapPin" size={20} />
              Москва, Россия
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Icon name="Clock" size={20} />
              Пн-Пт 10:00-19:00
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-coral to-turquoise bg-clip-text text-transparent mb-4">
                Анна Дизайн
              </div>
              <p className="text-gray-300">
                Создаю дизайн, который работает и приносит результат вашему бизнесу
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-coral transition-colors">Логотипы</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Фирменный стиль</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Упаковка</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">UX/UI дизайн</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Блог</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-coral transition-colors">Тренды 2024</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Психология цвета</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Упаковка</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={18} />
                  <span>@annadesign</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>hello@annadesign.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (999) 123-45-67</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Анна Дизайн. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}