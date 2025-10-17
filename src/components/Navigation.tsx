import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Package } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "เกี่ยวกับเรา", href: "#about" },
    { label: "บริการ", href: "#services" },
    { label: "กระบวนการ", href: "#process" },
    { label: "ผลงาน", href: "#portfolio" },
    { label: "ติดต่อเรา", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg">
              <Package className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Abacus Garment</h1>
              <p className="text-xs text-muted-foreground">OEM / ODM • Thailand</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">EN</Button>
            <Button size="sm">ขอใบเสนอราคา</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <Button variant="ghost" size="sm">EN</Button>
              <Button size="sm" className="flex-1">ขอใบเสนอราคา</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
