import { Package } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Package className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold">Abacus Garment</h3>
                <p className="text-xs text-muted-foreground">OEM / ODM • Thailand</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              ผู้ผลิตเสื้อผ้า OEM/ODM มืออาชีพ
              <br />
              ด้วยประสบการณ์กว่า 20 ปี
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">บริการ</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">สร้างแพทเทิร์น</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">ตัดเย็บคุณภาพ</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">ปัก & สกรีน</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">แพ็คกิ้ง & จัดส่ง</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">ผลิตภัณฑ์</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>เสื้อโปโล</li>
              <li>เสื้อยืด</li>
              <li>เสื้อยูนิฟอร์ม</li>
              <li>เสื้อกีฬา</li>
              <li>แจ็กเก็ต</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">ติดต่อเรา</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>02-123-4567</li>
              <li>sales@abacusgarment.com</li>
              <li>888/99 ถ.พระราม 2<br />กรุงเทพฯ 10150</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Abacus Garment (2000) Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
