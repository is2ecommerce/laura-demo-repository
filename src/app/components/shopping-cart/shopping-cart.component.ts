import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { CartItem, CartSummary, PromoCode } from '../../models/product.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  cartSummary: CartSummary = {
    items: [],
    subtotal: 0,
    discount: 0,
    promoDiscount: 0,
    total: 0,
    itemCount: 0
  };
  
  appliedPromoCode: PromoCode | null = null;
  promoCodeInput: string = '';
  promoMessage: string = '';
  promoMessageType: 'success' | 'error' = 'success';
  
  private cartSubscription?: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Suscribirse a los cambios del carrito
    this.cartSubscription = this.cartService.getCartItems().subscribe(() => {
      this.updateCartSummary();
    });
    
    // Cargar estado inicial
    this.updateCartSummary();
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  // Incrementar cantidad de un producto
  increaseQuantity(productId: string): void {
    this.cartService.increaseQuantity(productId);
  }

  // Decrementar cantidad de un producto
  decreaseQuantity(productId: string): void {
    this.cartService.decreaseQuantity(productId);
  }

  // Eliminar producto del carrito
  removeItem(productId: string): void {
    this.cartService.removeFromCart(productId);
  }

  // Aplicar código promocional
  applyPromoCode(): void {
    if (!this.promoCodeInput.trim()) {
      this.showPromoMessage('Por favor ingresa un código promocional', 'error');
      return;
    }

    const result = this.cartService.applyPromoCode(this.promoCodeInput.trim());
    this.showPromoMessage(result.message, result.success ? 'success' : 'error');
    
    if (result.success) {
      this.promoCodeInput = '';
      this.updateCartSummary();
    }
  }

  // Remover código promocional
  removePromoCode(): void {
    this.cartService.removePromoCode();
    this.appliedPromoCode = null;
    this.promoMessage = '';
  }

  // Proceder al pago
  proceedToCheckout(): void {
    if (this.cartSummary.items.length === 0) {
      return;
    }
    
    // Aquí implementarías la lógica para ir al checkout
    console.log('Procediendo al pago...', this.cartSummary);
    // Ejemplo: this.router.navigate(['/checkout']);
  }

  // Ir al catálogo
  goToCatalog(): void {
    // Aquí implementarías la navegación al catálogo
    console.log('Navegando al catálogo...');
    // Ejemplo: this.router.navigate(['/catalog']);
  }

  // Formatear precio
  formatPrice(price: number): string {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  }

  // Verificar si hay descuento en un producto
  hasDiscount(item: CartItem): boolean {
    return !!(item.product.originalPrice && item.product.originalPrice > item.product.price);
  }

  // Obtener porcentaje de descuento
  getDiscountPercentage(item: CartItem): number {
    if (!this.hasDiscount(item)) return 0;
    
    const discount = ((item.product.originalPrice! - item.product.price) / item.product.originalPrice!) * 100;
    return Math.round(discount);
  }

  // Métodos privados
  private updateCartSummary(): void {
    this.cartSummary = this.cartService.getCartSummary();
    this.appliedPromoCode = this.cartService.getAppliedPromoCode();
  }

  private showPromoMessage(message: string, type: 'success' | 'error'): void {
    this.promoMessage = message;
    this.promoMessageType = type;
    
    // Limpiar mensaje después de 5 segundos
    setTimeout(() => {
      this.promoMessage = '';
    }, 5000);
  }

  // TrackBy function para optimizar el rendimiento del ngFor
  trackByProductId(index: number, item: CartItem): string {
    return item.product.id;
  }
}