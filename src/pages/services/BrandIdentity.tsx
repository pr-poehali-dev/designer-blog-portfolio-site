import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function BrandIdentity() {
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
              <Link to="/blog" className="hover:text-primary transition-colors">Блог</Link>
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
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-coral to-turquoise flex items-center justify-center">
              <Icon name="Palette" size={40} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Разработка{' '}
              <span className="bg-gradient-to-r from-coral to-turquoise bg-clip-text text-transparent">
                фирменного стиля
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Создаю целостную систему визуальной идентификации для вашего бренда — от логотипа до фирменных носителей
            </p>
            <Button size="lg" className="bg-gradient-to-r from-coral to-primary text-white px-8 py-6 text-lg">
              <Icon name="MessageCircle" className="mr-2" />
              Заказать фирменный стиль
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Что входит в фирменный стиль</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Zap",
                title: "Логотип",
                description: "Основной знак бренда в различных вариациях"
              },
              {
                icon: "Palette",
                title: "Цветовая палитра",
                description: "Фирменные цвета с точными кодами"
              },
              {
                icon: "Type",
                title: "Типографика",
                description: "Фирменные шрифты для всех носителей"
              },
              {
                icon: "FileText",
                title: "Визитки",
                description: "Дизайн корпоративных визитных карточек"
              },
              {
                icon: "Mail",
                title: "Фирменные бланки",
                description: "Letterhead и документооборот"
              },
              {
                icon: "Award",
                title: "Брендбук",
                description: "Руководство по использованию фирстиля"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-coral to-turquoise flex items-center justify-center">
                    <Icon name={item.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Примеры работ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/img/828d4e1c-fa7e-43c0-9f2d-ef94e76efe30.jpg" 
                  alt="Фирменный стиль компании" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardHeader>
                <CardTitle>Технологическая компания</CardTitle>
                <CardDescription>Полная система визуальной идентификации для IT-бизнеса</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-mint/20 via-yellow/20 to-purple/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardHeader>
                <CardTitle>Креативное агентство</CardTitle>
                <CardDescription>Яркий и современный фирменный стиль для дизайн-студии</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Пакеты услуг</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Стандарт</CardTitle>
                <div className="text-3xl font-bold text-primary mt-4">45 000 ₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Логотип (3 варианта)",
                    "Цветовая палитра",
                    "Типографика",
                    "Визитки",
                    "Фирменные бланки",
                    "Базовый брендбук"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6">
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>

            <Card className="relative ring-2 ring-primary">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                Рекомендуем
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Премиум</CardTitle>
                <div className="text-3xl font-bold text-primary mt-4">75 000 ₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Логотип (5 вариантов)",
                    "Расширенная палитра",
                    "Типографика",
                    "Полный комплект носителей",
                    "Презентация",
                    "Детальный брендбук",
                    "Поддержка 6 месяцев"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-coral to-primary text-white">
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Создадим фирменный стиль вместе?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Расскажите о своем бренде, и я создам целостную систему, которая будет работать на ваш бизнес
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-coral to-primary text-white px-8 py-6 text-lg">
              <Icon name="MessageCircle" className="mr-2" />
              Обсудить проект
            </Button>
            <Button size="lg" variant="outline" className="border-2 px-8 py-6 text-lg">
              <Icon name="Eye" className="mr-2" />
              Посмотреть портфолио
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}