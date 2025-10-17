import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ourProducts from "@/assets/our-products.png";

const ProductSection = () => {
  const productTypes = [
    {
      title: "เสื้อยืด",
      description: "T-Shirt",
      features: ["Cotton 100%", "ระบายอากาศดี", "สกรีนได้ทุกเทคนิค"],
    },
    {
      title: "เสื้อโปโล",
      description: "Polo Shirt",
      features: ["Pique Cotton", "ปกเรียบร้อย", "เหมาะธุรกิจและสปอร์ต"],
    },
    {
      title: "เสื้อฮู้ด",
      description: "Hoodie",
      features: ["French Terry", "อุ่นสบาย", "มีหมวกฮู้ด"],
    },
    {
      title: "เสื้อแจ็คเก็ต",
      description: "Jacket",
      features: ["Windbreaker", "กันลม", "ซิปคุณภาพสูง"],
    },
  ];

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">OUR PRODUCT</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            บริษัท อะบาคัสการ์เม้นท์ (2000) จำกัด สามารถ ผลิตสินค้าให้สากหลายประเภท 
            อาทิเช่น เสื้อโปโล เสื้อคอกลม เสื้อฮู้ดดี้ หน้ากาเกาบาปี้
          </p>
        </div>

        {/* Product Hero Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16">
          <img 
            src={ourProducts} 
            alt="Abacus Garment Products Collection" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
            <div className="p-8">
              <Badge className="mb-2 bg-primary text-primary-foreground">ผลิตภัณฑ์คุณภาพ</Badge>
              <h3 className="text-3xl font-bold text-white mb-2">
                เสื้อผ้าหลากหลายประเภท
              </h3>
              <p className="text-white/90">
                ออกแบบและผลิตตามความต้องการของลูกค้า
              </p>
            </div>
          </div>
        </div>

        {/* Product Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productTypes.map((product, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-all hover:-translate-y-2 bg-gradient-to-br from-card to-muted/20"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{product.title}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="p-8 bg-primary/5 border-primary/20 inline-block">
            <h4 className="text-xl font-bold mb-2">รองรับการสั่งผลิต</h4>
            <p className="text-muted-foreground">
              MOQ: 300 ตัว/รุ่น | Lead Time: 30-45 วัน | รองรับการปัก-สกรีนทุกเทคนิค
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
