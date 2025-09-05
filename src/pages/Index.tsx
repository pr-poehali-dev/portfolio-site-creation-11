import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Стратегическое консультирование",
      description: "Разработка долгосрочной стратегии развития бизнеса и повышение конкурентоспособности",
      icon: "Target"
    },
    {
      title: "Оптимизация процессов",
      description: "Анализ и совершенствование бизнес-процессов для увеличения эффективности",
      icon: "TrendingUp"
    },
    {
      title: "Управленческий консалтинг",
      description: "Построение эффективных систем управления и развитие команд",
      icon: "Users"
    },
    {
      title: "Финансовое планирование",
      description: "Разработка бюджетной политики и контроль финансовых показателей",
      icon: "Calculator"
    }
  ];

  const expertise = [
    "Стратегическое планирование",
    "Организационный дизайн", 
    "Управление изменениями",
    "Финансовый анализ",
    "Управление проектами",
    "Развитие персонала"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-900">
              Портфолио
            </div>
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors">Главная</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">Обо мне</a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Услуги</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="/img/23bc34f7-532b-4c27-b224-9ade9169022a.jpg" 
                  alt="Бизнес-консультант" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Бизнес-консультант
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Помогаю компаниям оптимизировать процессы, разрабатывать стратегии роста 
              и внедрять эффективные системы управления
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button size="lg" className="px-8">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Обсудить проект
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать резюме
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Обо мне</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Более 10 лет опыта в управленческом консультировании и развитии бизнеса
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Профессиональный опыт</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Специализируюсь на комплексном развитии бизнеса: от стратегического планирования 
                  до внедрения операционных улучшений. Работал с компаниями различных отраслей, 
                  от стартапов до крупных корпораций.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ключевые достижения</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Повышение эффективности процессов на 40% в среднем</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Сокращение операционных расходов на 25-30%</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Успешное внедрение изменений в 95% проектов</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Экспертиза</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {expertise.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="justify-center py-2 px-3 text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Icon name="GraduationCap" size={20} className="text-gray-600 mr-3" />
                      <span className="text-gray-600">MBA, Финансовый университет</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Award" size={20} className="text-gray-600 mr-3" />
                      <span className="text-gray-600">Сертификат PMP</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Languages" size={20} className="text-gray-600 mr-3" />
                      <span className="text-gray-600">Русский, Английский (fluent)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Услуги</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Комплексные решения для развития и оптимизации вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary/90 transition-colors">
                        <Icon name={service.icon} size={24} className="text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Готов обсудить ваши бизнес-задачи и предложить эффективные решения
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Icon name="Mail" size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">consultant@example.com</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Icon name="Phone" size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (999) 123-45-67</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Icon name="MapPin" size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Офис</h3>
              <p className="text-gray-600">Москва, Россия</p>
            </div>
          </div>
          
          <Button size="lg" className="px-12">
            <Icon name="Calendar" size={20} className="mr-2" />
            Записаться на консультацию
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2024 Бизнес-консультант. Все права защищены.
            </p>
            <div className="flex items-center justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;