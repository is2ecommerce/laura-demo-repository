# E-Commerce Cart Demo

Demo de carrito de compras para una aplicación de e-commerce desarrollado con **Angular** y **TypeScript**.

## 🛒 Características del Carrito

### Funcionalidades Implementadas

✅ **Vista clara de productos**: Cada producto muestra nombre, imagen, precio unitario, cantidad y subtotal  
✅ **Total general**: Cálculo automático del total del carrito  
✅ **Descuentos de productos**: Visualización de precios originales y descuentos aplicados  
✅ **Controles de cantidad**: Botones para aumentar, reducir y eliminar productos  
✅ **Códigos promocionales**: Input para aplicar códigos de descuento con validación  
✅ **Botón de pago**: Acción para continuar con el proceso de pago  
✅ **Diseño responsivo**: Adaptación perfecta a móvil y escritorio  
✅ **Carrito vacío**: Mensaje motivacional con enlace al catálogo  

### Códigos Promocionales Incluidos

- `DESCUENTO10`: 10% de descuento (mínimo €50)
- `WELCOME20`: 20% de descuento (mínimo €100)  
- `VERANO15`: 15% de descuento (sin mínimo)

## 🚀 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── shopping-cart/          # Componente principal del carrito
│   │   └── product-demo/           # Componente de demostración de productos
│   ├── services/
│   │   └── cart.service.ts         # Servicio de gestión del carrito
│   ├── models/
│   │   └── product.interface.ts    # Interfaces y tipos TypeScript
│   ├── data/
│   │   └── mock-products.ts        # Datos de ejemplo
│   └── app.module.ts              # Módulo principal de la aplicación
├── styles/                        # Submódulo de estilos (repositorio externo)
└── main.scss                      # Archivo principal de estilos
```

## 🛠️ Tecnologías Utilizadas

- **Angular 17**: Framework principal
- **TypeScript**: Lenguaje de programación
- **SCSS**: Preprocesador de CSS
- **RxJS**: Programación reactiva
- **Git Submodules**: Gestión de estilos externos

## 📱 Características Técnicas

### Gestión de Estado
- Servicio centralizado con observables (RxJS)
- Persistencia en localStorage
- Actualizaciones reactivas en tiempo real

### Diseño Responsivo
- Mobile-first approach
- Breakpoints optimizados para tablet y móvil
- Grid layout adaptativos

### Optimizaciones
- TrackBy functions para mejor performance
- Lazy loading de imágenes
- Cálculos eficientes de totales y descuentos

## 🎨 Estilos

Los estilos están organizados usando un submódulo de Git que contiene:
- Variables de diseño (colores, tipografías, espaciado)
- Componentes reutilizables
- Mixins de SCSS

## 💻 Instalación y Uso

1. **Clonar el repositorio con submódulos**:
   ```bash
   git clone --recursive https://github.com/tu-usuario/laura-demo-repository.git
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**:
   ```bash
   npm start
   ```

4. **Construir para producción**:
   ```bash
   npm run build
   ```

## 🧪 Funcionalidades de Prueba

La aplicación incluye productos de muestra para probar todas las funcionalidades:
- Productos con y sin descuento
- Diferentes categorías
- Precios variados para probar códigos promocionales

## 📋 Criterios de Aceptación Cumplidos

✅ Muestra información completa por producto  
✅ Visualiza total general del carrito  
✅ Muestra descuentos en precios cuando aplican  
✅ Incluye controles completos de cantidad  
✅ Implementa sistema de códigos promocionales  
✅ Botón funcional para continuar al pago  
✅ Diseño completamente responsivo  
✅ Manejo de estado de carrito vacío  

## 🔧 Personalización

Para personalizar los estilos, modifica las variables en el submódulo `src/styles/` o actualiza el archivo `main.scss` con tus propios estilos.

## 📄 Licencia

MIT License - Proyecto de demostración para fines educativos.
