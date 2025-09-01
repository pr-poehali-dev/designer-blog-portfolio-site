import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function LogoTrends2024() {
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

      <article className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Главная</Link></li>
              <li><Icon name="ChevronRight" size={16} /></li>
              <li><Link to="/blog" className="hover:text-primary">Блог</Link></li>
              <li><Icon name="ChevronRight" size={16} /></li>
              <li>Тренды в дизайне логотипов 2024</li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-primary">Логотипы</Badge>
              <span className="text-muted-foreground">15 августа 2024</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">5 мин чтения</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Тренды в дизайне{' '}
              <span className="bg-gradient-to-r from-coral to-turquoise bg-clip-text text-transparent">
                логотипов 2024
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Разбираем основные направления и подходы к созданию логотипов в новом году. 
              Минимализм, градиенты и анимация — что действительно работает в современном дизайне.
            </p>
          </header>

          {/* Featured Image */}
          <div className="aspect-[16/9] relative overflow-hidden rounded-lg mb-12">
            <img 
              src="/img/286fb8e2-f3c6-4fda-a398-aef172451d77.jpg" 
              alt="Примеры современных логотипов" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Основные тренды 2024 года</h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Дизайн логотипов в 2024 году продолжает эволюционировать, отражая изменения в технологиях, 
              культуре и потребительских предпочтениях. Рассмотрим ключевые тенденции, которые определяют 
              современный подход к созданию фирменных знаков.
            </p>

            <h3 className="text-2xl font-semibold mb-4">1. Гиперминимализм</h3>
            <p className="text-muted-foreground mb-6">
              Тренд на упрощение достиг новых высот. Логотипы становятся еще более лаконичными, 
              убираются даже незначительные детали. Основа — чистые геометрические формы и 
              максимально простые решения.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3">💡 Совет дизайнера</h4>
              <p className="text-sm text-muted-foreground">
                При работе с минимализмом важно помнить: каждый элемент должен нести смысловую нагрузку. 
                Убирайте все лишнее, но сохраняйте узнаваемость и уникальность бренда.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mb-4">2. Динамичные градиенты</h3>
            <p className="text-muted-foreground mb-6">
              Градиенты возвращаются, но в новом качестве. Современные градиентные логотипы используют 
              более сложные цветовые переходы, часто с неожиданными сочетаниями оттенков.
            </p>

            <h3 className="text-2xl font-semibold mb-4">3. Адаптивная типографика</h3>
            <p className="text-muted-foreground mb-6">
              Шрифтовые логотипы адаптируются под различные контексты использования. Один и тот же 
              логотип может выглядеть по-разному на разных носителях, сохраняя при этом узнаваемость.
            </p>

            <h3 className="text-2xl font-semibold mb-4">4. Анимация как часть айдентики</h3>
            <p className="text-muted-foreground mb-8">
              Анимированные логотипы перестали быть экзотикой. Компании все чаще создают движущиеся 
              версии своих знаков для использования в digital-среде.
            </p>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Lightbulb" className="text-yellow-500" />
                  Ключевые принципы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={16} className="text-green-500 mt-1" />
                    <span><strong>Универсальность:</strong> логотип должен работать во всех форматах</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={16} className="text-green-500 mt-1" />
                    <span><strong>Запоминаемость:</strong> простота не означает банальность</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={16} className="text-green-500 mt-1" />
                    <span><strong>Масштабируемость:</strong> от фавикона до билборда</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={16} className="text-green-500 mt-1" />
                    <span><strong>Уникальность:</strong> выделение среди конкурентов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mb-6">Практические рекомендации</h2>
            
            <p className="text-muted-foreground mb-6">
              При разработке логотипа в 2024 году стоит учитывать не только визуальные тренды, 
              но и технические ограничения различных платформ, а также психологическое воздействие 
              цвета и формы на целевую аудиторию.
            </p>

            <div className="bg-gradient-to-r from-coral/10 to-turquoise/10 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Хотите создать современный логотип?</h3>
              <p className="text-muted-foreground mb-4">
                Я помогу вам создать логотип, который будет актуален не только сегодня, 
                но и через несколько лет. Учитываю все современные тренды и особенности вашего бизнеса.
              </p>
              <Link to="/services/logo-design">
                <Button className="bg-gradient-to-r from-coral to-primary text-white">
                  Заказать логотип
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </Link>
            </div>

            <h2 className="text-3xl font-bold mb-6">Заключение</h2>
            
            <p className="text-muted-foreground mb-6">
              Тренды в дизайне логотипов 2024 года показывают стремление к балансу между 
              простотой и выразительностью. Важно не слепо следовать модным течениям, 
              а адаптировать их под конкретные задачи бренда.
            </p>

            <p className="text-muted-foreground">
              Помните: хороший логотип — это не просто следование трендам, а решение, 
              которое работает на долгосрочные цели компании.
            </p>
          </div>

          {/* Author */}
          <div className="border-t pt-8 mt-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-coral to-turquoise rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">А</span>
              </div>
              <div>
                <h3 className="font-semibold">Анна</h3>
                <p className="text-muted-foreground">Графический дизайнер</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Более 5 лет создаю логотипы и фирменные стили для компаний различных сфер. 
              Специализируюсь на минималистичном дизайне и современных трендах.
            </p>
          </div>

          {/* Related Articles */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Читайте также</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Badge className="w-fit mb-2">Брендинг</Badge>
                  <CardTitle className="hover:text-primary transition-colors">
                    Психология цвета в брендинге
                  </CardTitle>
                  <CardDescription>
                    Как цветовые решения влияют на восприятие бренда
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/blog/color-psychology" className="text-primary font-medium">
                    Читать статью →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Badge className="w-fit mb-2">UI/UX</Badge>
                  <CardTitle className="hover:text-primary transition-colors">
                    Тенденции UI/UX дизайна в 2024
                  </CardTitle>
                  <CardDescription>
                    Что актуально в пользовательских интерфейсах
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/blog/ui-ux-trends" className="text-primary font-medium">
                    Читать статью →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}