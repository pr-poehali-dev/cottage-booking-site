import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const cottages = [
    {
      id: 1,
      name: "Лесной оазис",
      description: "Роскошный коттедж в сосновом бору с панорамными окнами",
      price: "45 000",
      guests: 8,
      bedrooms: 4,
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80"
    },
    {
      id: 2,
      name: "Озерная резиденция",
      description: "Элегантный дом на берегу озера с частным пляжем",
      price: "65 000",
      guests: 10,
      bedrooms: 5,
      image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=800&q=80"
    },
    {
      id: 3,
      name: "Горный шале",
      description: "Премиальное шале с видом на горы и спа-зоной",
      price: "55 000",
      guests: 6,
      bedrooms: 3,
      image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&q=80"
    }
  ];

  const features = [
    {
      icon: "Sparkles",
      title: "Премиальный сервис",
      description: "Индивидуальный подход к каждому гостю"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Охраняемая территория 24/7"
    },
    {
      icon: "Wifi",
      title: "Современные удобства",
      description: "Высокоскоростной интернет и smart-технологии"
    },
    {
      icon: "Trees",
      title: "Единение с природой",
      description: "Живописные локации вдали от города"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-primary" style={{ fontFamily: 'Cormorant, serif' }}>
              LuxeCottages
            </a>
            <div className="flex gap-8 items-center">
              <a href="/" className="text-accent font-medium">Главная</a>
              <a href="/contacts" className="text-foreground hover:text-accent transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-secondary via-background to-muted overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1600&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 animate-fade-in" variant="outline">
              Премиальная аренда
            </Badge>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary animate-fade-in" style={{ fontFamily: 'Cormorant, serif', animationDelay: '0.1s' }}>
              Роскошный отдых в коттеджах
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Эксклюзивные коттеджи в живописных локациях для незабываемого отдыха с семьей и друзьями
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
                Выбрать коттедж
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/5">
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl hover:bg-card transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon as any} className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20" variant="outline">
              Наши коттеджи
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Эксклюзивная коллекция
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Тщательно отобранные объекты премиум-класса для вашего идеального отдыха
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cottages.map((cottage, index) => (
              <Card 
                key={cottage.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border group animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={cottage.image} 
                    alt={cottage.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground">Premium</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl" style={{ fontFamily: 'Cormorant, serif' }}>
                    {cottage.name}
                  </CardTitle>
                  <CardDescription className="text-base">{cottage.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Users" size={16} />
                      <span>{cottage.guests} гостей</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="BedDouble" size={16} />
                      <span>{cottage.bedrooms} спален</span>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary" style={{ fontFamily: 'Cormorant, serif' }}>
                      {cottage.price} ₽
                    </span>
                    <span className="text-muted-foreground">/ сутки</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Забронировать
                    <Icon name="Calendar" className="ml-2" size={18} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
              Готовы к незабываемому отдыху?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Свяжитесь с нами сегодня и забронируйте коттедж вашей мечты
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>LuxeCottages</h3>
              <p className="text-muted-foreground">Премиальная аренда коттеджей для незабываемого отдыха</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/" className="hover:text-accent transition-colors">Главная</a></li>
                <li><a href="/contacts" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@luxecottages.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 LuxeCottages. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
