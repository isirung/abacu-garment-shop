import { Card } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";
import aboutHero from "@/assets/about-hero.png";
import factoryBuilding from "@/assets/factory-building.png";
import visionMission from "@/assets/vision-mission.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">เกี่ยวกับเรา</h2>
          <p className="text-lg text-muted-foreground">About Us</p>
        </div>

        {/* Company History */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">
              บริษัท อะบาคัสการ์เม้นท์ (2000) จำกัด
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                ก่อตั้งขึ้นในปี 2000 โดยมีวิสัยทัศน์ที่มั่นในการผลิตและจำหน้ายเสื้อผ้าที่มีคุณภาพสูง 
                สำหรับตลาดทั้งในประเทศและต่างประเทศ
              </p>
              <p>
                เรามีประสบการณ์มากกว่า 20 ปี ในอุตสาหกรรมการผลิตเสื้อผ้า 
                และเรามุ่งมั่น การผลิตที่ทันสมัยและมีความหลากหลายเพื่อตอบสนองความต้องการของลูกค้าในทุกอุตสาหกรรม
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={factoryBuilding} 
              alt="Abacus Garment Factory Building" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              เรามุ่งหวังที่จะเป็นผู้นำในการผลิตเสื้อผ้าที่มีคุณภาพสูง และเป็นที่ยอมรับ 
              โดยเราจะพัฒนาผลิตภัณฑ์อย่างต่อเนื่อง พร้อมทั้งสร้างความสัมพันธ์ที่ดีกับลูกค้า
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              เรามุ่งมั่นที่จะผลิตเสื้อผ้าที่มีคุณภาพสูง เพื่อตอบโจทย์ความต้องการของลูกค้าใน ทุกกลุ่ม 
              ทั้งในด้านการออกแบบ การผลิตเต็ม
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
