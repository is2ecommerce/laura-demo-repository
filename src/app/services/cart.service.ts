import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product, CartItem, PromoCode, CartSummary } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  private appliedPromoCode: PromoCode | null = null;

  // Códigos promocionales disponibles (en una app real vendría del backend)
  private availablePromoCodes: PromoCode[] = [
    { code: 'DESCUENTO10', discount: 10, isValid: true, minAmount: 50 },
    { code: 'WELCOME20', discount: 20, isValid: true, minAmount: 100 },
    { code: 'VERANO15', discount: 15, isValid: true }
  ];

  constructor() {
    // Cargar carrito del localStorage si existe
    this.loadCartFromStorage();
  }

  // Observable para que los componentes se suscriban a los cambios del carrito
  getCartItems(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  // Agregar producto al carrito
  addToCart(product: Product, quantity: number = 1): void {
    const existingItemIndex = this.cartItems.findIndex(item => item.product.id === product.id);
    
    if (existingItemIndex > -1) {
      this.cartItems[existingItemIndex].quantity += quantity;
      this.cartItems[existingItemIndex].subtotal = 
        this.cartItems[existingItemIndex].quantity * product.price;
    } else {
      const newItem: CartItem = {
        product,
        quantity,
        subtotal: quantity * product.price
      };
      this.cartItems.push(newItem);
    }
    
    this.updateCart();
  }

  // Actualizar cantidad de un producto
  updateQuantity(productId: string, quantity: number): void {
    const itemIndex = this.cartItems.findIndex(item => item.product.id === productId);
    
    if (itemIndex > -1) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        this.cartItems[itemIndex].quantity = quantity;
        this.cartItems[itemIndex].subtotal = quantity * this.cartItems[itemIndex].product.price;
        this.updateCart();
      }
    }
  }

  // Incrementar cantidad
  increaseQuantity(productId: string): void {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item) {
      this.updateQuantity(productId, item.quantity + 1);
    }
  }

  // Decrementar cantidad
  decreaseQuantity(productId: string): void {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item && item.quantity > 1) {
      this.updateQuantity(productId, item.quantity - 1);
    }
  }

  // Eliminar producto del carrito
  removeFromCart(productId: string): void {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
    this.updateCart();
  }

  // Limpiar carrito
  clearCart(): void {
    this.cartItems = [];
    this.appliedPromoCode = null;
    this.updateCart();
  }

  // Aplicar código promocional
  applyPromoCode(code: string): { success: boolean; message: string } {
    const promoCode = this.availablePromoCodes.find(promo => 
      promo.code.toLowerCase() === code.toLowerCase() && promo.isValid
    );

    if (!promoCode) {
      return { success: false, message: 'Código promocional no válido' };
    }

    const subtotal = this.getCartSubtotal();
    if (promoCode.minAmount && subtotal < promoCode.minAmount) {
      return { 
        success: false, 
        message: `Monto mínimo requerido: $${promoCode.minAmount}` 
      };
    }

    this.appliedPromoCode = promoCode;
    this.updateCart();
    return { 
      success: true, 
      message: `¡Código aplicado! Descuento del ${promoCode.discount}%` 
    };
  }

  // Remover código promocional
  removePromoCode(): void {
    this.appliedPromoCode = null;
    this.updateCart();
  }

  // Obtener resumen del carrito
  getCartSummary(): CartSummary {
    const subtotal = this.getCartSubtotal();
    const discount = this.getItemsDiscount();
    const promoDiscount = this.getPromoDiscount();
    const total = subtotal - discount - promoDiscount;
    const itemCount = this.cartItems.reduce((count, item) => count + item.quantity, 0);

    return {
      items: this.cartItems,
      subtotal,
      discount,
      promoDiscount,
      total: Math.max(0, total),
      itemCount
    };
  }

  // Obtener código promocional aplicado
  getAppliedPromoCode(): PromoCode | null {
    return this.appliedPromoCode;
  }

  // Métodos privados
  private updateCart(): void {
    this.saveCartToStorage();
    this.cartSubject.next([...this.cartItems]);
  }

  private getCartSubtotal(): number {
    return this.cartItems.reduce((total, item) => total + item.subtotal, 0);
  }

  private getItemsDiscount(): number {
    return this.cartItems.reduce((totalDiscount, item) => {
      if (item.product.originalPrice && item.product.originalPrice > item.product.price) {
        const itemDiscount = (item.product.originalPrice - item.product.price) * item.quantity;
        return totalDiscount + itemDiscount;
      }
      return totalDiscount;
    }, 0);
  }

  private getPromoDiscount(): number {
    if (!this.appliedPromoCode) return 0;
    const subtotal = this.getCartSubtotal();
    return (subtotal * this.appliedPromoCode.discount) / 100;
  }

  private saveCartToStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    if (this.appliedPromoCode) {
      localStorage.setItem('appliedPromoCode', JSON.stringify(this.appliedPromoCode));
    } else {
      localStorage.removeItem('appliedPromoCode');
    }
  }

  private loadCartFromStorage(): void {
    const savedCart = localStorage.getItem('cart');
    const savedPromoCode = localStorage.getItem('appliedPromoCode');
    
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
      this.cartSubject.next([...this.cartItems]);
    }
    
    if (savedPromoCode) {
      this.appliedPromoCode = JSON.parse(savedPromoCode);
    }
  }
}