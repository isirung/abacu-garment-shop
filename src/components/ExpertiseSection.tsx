import { Card } from "@/components/ui/card";
import { Ruler, Scissors, Shirt, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import clothingRack from "@/assets/clothing-rack.jpg";

const ExpertiseSection = () => {
  const services = [
    {
      icon: <Ruler className="h-10 w-10" />,
      title: "สร้างแพทเทิร์น & ชิ้นตัวอย่าง",
      description: "ทีมแพทเทิร์นมืออาชีพ พร้อมชิ้นตัวอย่างรวดเร็ว",
    },
    {
      icon: <Scissors className="h-10 w-10" />,
      title: "ตัดเย็บคุณวุฒิ",
      description: "ใจเนื้อผลิตมาตรฐาน พร้อม QC ทุกจุด",
    },
    {
      icon: <Shirt className="h-10 w-10" />,
      title: "ปัก & สกรีน",
      description: "DTF/Silkscreen/Embroidery รองรับหลายเทคนิค",
    },
    {
      icon: <Package className="h-10 w-10" />,
      title: "แพ็คกิ้ง & จัดส่ง",
      description: "บรรจุภัณฑ์พร้อมขาย และจัดส่งทั่วประเทศ/ต่างประเทศ",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">ความเชี่ยวชาญของเรา</h2>
          </div>
          <Badge variant="outline" className="text-sm">
            มาตรฐานและความน่าเชื่อถือ
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-primary">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-lg mt-1">
                <Badge className="bg-primary text-primary-foreground">✓</Badge>
              </div>
              <div>
                <h3 className="font-bold mb-1">มาตรฐานและความน่าเชื่อถือ</h3>
                <p className="text-sm text-muted-foreground">
                  โรงงานรองรับการประเมินมาตรฐาน (เช่น ISO 9001, BSCI, WRAP) 
                  และทดสอบคุณภาพผ้า/สิตามขอกำหนดของลูกค้า
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-lg mt-1">
                <Badge className="bg-primary text-primary-foreground">✓</Badge>
              </div>
              <div>
                <h3 className="font-bold mb-1">สัญญาความลับ (NDA)</h3>
                <p className="text-sm text-muted-foreground">
                  สำหรับแบบและแพทเทิร์น
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-lg mt-1">
                <Badge className="bg-primary text-primary-foreground">✓</Badge>
              </div>
              <div>
                <h3 className="font-bold mb-1">ใบรับรองผ้า Oeko-Tex®</h3>
                <p className="text-sm text-muted-foreground">
                  (ตามรุ่นที่เลือก)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-lg mt-1">
                <Badge className="bg-primary text-primary-foreground">✓</Badge>
              </div>
              <div>
                <h3 className="font-bold mb-1">ติดตามสถานะงาน</h3>
                <p className="text-sm text-muted-foreground">
                  แบบไม่โปร่งใส
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={clothingRack} 
              alt="Clothing Samples" 
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
