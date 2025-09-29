import { Product } from '../models/product.interface';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Camiseta Premium',
    description: 'Camiseta de algodón 100% orgánico, corte moderno y colores vibrantes.',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://via.placeholder.com/300x300/007bff/ffffff?text=Camiseta',
    category: 'Ropa',
    inStock: true
  },
  {
    id: '2',
    name: 'Auriculares Bluetooth',
    description: 'Auriculares inalámbricos con cancelación de ruido y 24h de batería.',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://via.placeholder.com/300x300/28a745/ffffff?text=Auriculares',
    category: 'Electrónicos',
    inStock: true
  },
  {
    id: '3',
    name: 'Mochila Deportiva',
    description: 'Mochila resistente al agua con múltiples compartimentos.',
    price: 45.50,
    image: 'https://via.placeholder.com/300x300/dc3545/ffffff?text=Mochila',
    category: 'Deportes',
    inStock: true
  },
  {
    id: '4',
    name: 'Libro de Cocina',
    description: 'Recetas mediterráneas para principiantes y expertos.',
    price: 24.99,
    originalPrice: 29.99,
    image: 'https://via.placeholder.com/300x300/ffc107/000000?text=Libro',
    category: 'Libros',
    inStock: true
  },
  {
    id: '5',
    name: 'Taza de Cerámica',
    description: 'Taza artesanal de cerámica, perfecta para café o té.',
    price: 12.99,
    image: 'https://via.placeholder.com/300x300/6f42c1/ffffff?text=Taza',
    category: 'Hogar',
    inStock: true
  }
];