export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  originalPrice?: number; // Para mostrar descuentos
  image: string;
  category?: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  subtotal: number;
}

export interface PromoCode {
  code: string;
  discount: number; // Porcentaje de descuento
  isValid: boolean;
  minAmount?: number; // Monto mínimo para aplicar el descuento
}

export interface CartSummary {
  items: CartItem[];
  subtotal: number;
  discount: number;
  promoDiscount: number;
  total: number;
  itemCount: number;
}