import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Building2, MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">ติดต่อเรา</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">ที่ตั้งโรงงาน</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">
                    888/99 ถ.พระราม 2 แขวงบางมด เขตจอมทอง กรุงเทพฯ 10150
                    <br />
                    (ตัวอย่าง)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-sm">02-123-4567</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-sm">sales@abacusgarment.com</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-6 bg-muted rounded-lg h-64 flex items-center justify-center">
              <p className="text-muted-foreground text-sm">แผนที่ Google Maps</p>
            </div>
          </Card>

          {/* Quote Request Form */}
          <Card className="p-8">
            <h3 className="text-xl font-bold mb-6">ขอใบเสนอราคา/สอบถามงาน</h3>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">ชื่อบริษัท/ชื่อผู้ติดต่อ</Label>
                  <Input id="name" placeholder="" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">อีเมล</Label>
                  <Input id="email" type="email" placeholder="" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">โทรศัพท์</Label>
                <Input id="phone" placeholder="ประเทศสัมคา (เช่น เสื้อโปโล, ยูนิฟอร์ม)" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quantity">จำนวนโดยประมาณ</Label>
                  <Input id="quantity" placeholder="กำหนดส่ง" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="delivery">กำหนดส่ง</Label>
                  <Input id="delivery" placeholder="เช่น 45 วัน" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">รายละเอียดเพิ่มเติม (สเปค, ผ้า, การปัก/สกรีน)</Label>
                <Textarea 
                  id="details" 
                  rows={4}
                  placeholder=""
                />
              </div>

              <p className="text-xs text-muted-foreground">
                เราจะติดต่อกลับภายใน 1-2 วันทำการ
              </p>

              <Button type="submit" className="w-full" size="lg">
                ส่งคำขอ
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
