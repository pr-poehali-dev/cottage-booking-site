import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-primary" style={{ fontFamily: 'Cormorant, serif' }}>
              LuxeCottages
            </a>
            <div className="flex gap-8 items-center">
              <a href="/" className="text-foreground hover:text-accent transition-colors">Главная</a>
              <a href="/contacts" className="text-accent font-medium">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 animate-fade-in" style={{ fontFamily: 'Cormorant, serif' }}>
              Свяжитесь с нами
            </h1>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Мы всегда рады ответить на ваши вопросы о бронировании коттеджей
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8 animate-fade-in">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Адрес офиса</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Лесная, д. 15</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">info@luxecottages.ru</p>
                    <p className="text-muted-foreground">booking@luxecottages.ru</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 21:00</p>
                    <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border animate-scale-in">
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
                  Отправить сообщение
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Расскажите о ваших пожеланиях..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>LuxeCottages</h3>
            <p className="text-primary-foreground/80 mb-6">Премиальная аренда коттеджей для незабываемого отдыха</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contacts;
