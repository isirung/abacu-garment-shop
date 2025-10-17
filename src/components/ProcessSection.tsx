import { Card } from "@/components/ui/card";
import { Users, Scissors, Search, Truck, Palette, ShoppingBag, Shirt, Package } from "lucide-react";

const ProcessSection = () => {
  const processes = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "แผนกพนักงาน",
      subtitle: "และขั้นตอนต่างๆ",
      step: 1,
    },
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "แผนตัด",
      subtitle: "",
      step: 2,
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "แผนควบคุณภาพ",
      subtitle: "",
      step: 3,
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "แผนกจัดส่ง",
      subtitle: "",
      step: 4,
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "แผนงออกแบบ",
      subtitle: "",
      step: 5,
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "แผนกสติ๊กเกอร์ผ้า",
      subtitle: "และวัตถุดิบ",
      step: 6,
    },
    {
      icon: <Shirt className="h-8 w-8" />,
      title: "แผนกเย็บ",
      subtitle: "",
      step: 7,
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "แผนกรีด และ แพ็คกิ้ง",
      subtitle: "",
      step: 8,
    },
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full mb-6">
            <h2 className="text-3xl font-bold">ขั้นตอนการผลิต</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            บริษัท อะบาคัสการ์เม้นท์ (2000) จำกัด จะมีแผนก หรือขั้นตอนต่างๆ ที่ทำงานร่วมกัน 
            เพื่อให้กระบวนการผลิตเสื้อผ้าเป็นไปอย่างมีประสิทธิภาพ และตรงตามความต้องการของลูกค้า 
            แผนกหลักๆมีดังนี้
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {processes.map((process, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-all hover:-translate-y-2 bg-card relative overflow-hidden group"
            >
              {/* Step Number Background */}
              <div className="absolute -top-4 -right-4 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                {process.step}
              </div>
              
              <div className="relative z-10">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {process.icon}
                </div>
                <h3 className="text-base font-bold mb-1">{process.title}</h3>
                {process.subtitle && (
                  <p className="text-xs text-muted-foreground">{process.subtitle}</p>
                )}
              </div>

              {/* Arrow connector for larger screens */}
              {index < processes.length - 1 && index % 4 !== 3 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                  <div className="w-6 h-0.5 bg-primary/30"></div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
