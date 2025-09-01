import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function LogoDesign() {
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
              <Icon name="Zap" size={40} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Разработка{' '}
              <span className="bg-gradient-to-r from-coral to-turquoise bg-clip-text text-transparent">
                логотипа
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Создаю уникальные логотипы, которые отражают суть вашего бренда и запоминаются клиентам навсегда
            </p>
            <Button size="lg" className="bg-gradient-to-r from-coral to-primary text-white px-8 py-6 text-lg">
              <Icon name="MessageCircle" className="mr-2" />
              Заказать логотип
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Процесс создания</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Брифинг",
                description: "Изучаю ваш бизнес, целевую аудиторию и конкурентов"
              },
              {
                step: "02", 
                title: "Концепции",
                description: "Создаю 3-5 различных концепций логотипа"
              },
              {
                step: "03",
                title: "Доработка",
                description: "Дорабатываю выбранную концепцию до идеала"
              },
              {
                step: "04",
                title: "Финализация",
                description: "Передаю все файлы и брендбук"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
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

      {/* Portfolio Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Примеры работ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="/img/286fb8e2-f3c6-4fda-a398-aef172451d77.jpg" 
                  alt="Логотип IT-стартапа" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardHeader>
                <CardTitle>IT-стартап</CardTitle>
                <CardDescription>Минималистичный логотип для технологической компании</CardDescription>
              </CardHeader>
            </Card>

            {[1, 2].map((item) => (
              <Card key={item} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-coral/20 via-turquoise/20 to-blue/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <CardTitle>Проект {item + 1}</CardTitle>
                  <CardDescription>Уникальный логотип для развивающегося бренда</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Стоимость</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Базовый",
                price: "15 000 ₽",
                features: ["3 концепции", "2 правки", "Файлы PNG, JPG", "Техподдержка 1 месяц"]
              },
              {
                name: "Стандарт",
                price: "25 000 ₽",
                features: ["5 концепций", "3 правки", "Все форматы файлов", "Цветовые варианты", "Техподдержка 3 месяца"],
                popular: true
              },
              {
                name: "Премиум",
                price: "40 000 ₽",
                features: ["8 концепций", "Без ограничений правок", "Все форматы", "Полный брендбук", "Техподдержка 6 месяцев"]
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-4">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full mt-6 ${plan.popular ? 'bg-gradient-to-r from-coral to-primary text-white' : ''}`}>
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы создать логотип?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Расскажите о своем проекте, и я создам логотип, который будет работать на ваш бизнес
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-coral to-primary text-white px-8 py-6 text-lg">
              <Icon name="MessageCircle" className="mr-2" />
              Обсудить проект
            </Button>
            <Button size="lg" variant="outline" className="border-2 px-8 py-6 text-lg">
              <Icon name="FileText" className="mr-2" />
              Скачать бриф
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}