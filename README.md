# Pioneer Center - Landing Page

Landing page profesional para Pioneer Center, tienda de venta y reparación de celulares en Saltos del Guairá, Paraguay.
git@github.com:Bernardo-Roman/Pionner-Center.git

## 🚀 Características Implementadas

- ✅ **Diseño Responsive** - Adaptable a móvil, tablet y desktop
- ✅ **Carrusel de Galería** - Auto-rotación cada 4 segundos con controles manuales
- ✅ **Formulario de Contacto** - Validación de email y notificaciones
- ✅ **Botón WhatsApp Flotante** - Con tracking de analytics
- ✅ **Botón Subir al Inicio** - Aparece al hacer scroll
- ✅ **SEO Optimizado** - Meta tags, Open Graph, keywords
- ✅ **PWA Ready** - Service Worker y manifest.json
- ✅ **Google Analytics** - Tracking de conversiones listo
- ✅ **Efectos Hover** - Tarjetas e imágenes interactivas

## ⚠️ PROBLEMA CRÍTICO: Optimización de Imágenes

Las imágenes SVG del carrusel son **demasiado grandes** (10-30 MB cada una).

**Acción requerida:**
1. Reemplazar `foto1.svg`, `foto2.svg`, `foto3.svg`, `foto4.svg`, `hero-phone.svg`
2. Usar formato **WebP** o **JPEG** con compresión
3. Tamaño objetivo: 100-300 KB por imagen
4. Dimensiones: 800x500px para carrusel, 400x300px para hero

## 🔧 Configuración Post-Despliegue

### 1. Google Analytics
Reemplazar `GA_MEASUREMENT_ID` en `index.html` con tu ID de Google Analytics:
```javascript
gtag('config', 'G-XXXXXXXXXX');
```

### 2. WhatsApp Business
Verificar que el número en el botón sea correcto:
```html
<a href="https://wa.me/595985939952" ...>
```

### 3. Optimizar Imágenes
Usar herramientas como:
- [TinyPNG](https://tinypng.com/) para JPEG/PNG
- [Squoosh](https://squoosh.app/) para WebP
- [ImageOptim](https://imageoptim.com/) para Mac

## 📁 Estructura del Proyecto

```
PioneerCenter/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   └── script.js       # JavaScript
├── img/                # Imágenes (⚠️ necesita optimización)
├── sw.js               # Service Worker
├── manifest.json       # PWA manifest
└── README.md           # Este archivo
```

## 🎨 Paleta de Colores

- **Naranja:** `#FF8C00` - Color principal
- **Negro:** `#000000` - Textos
- **Blanco:** `#FFFFFF` - Fondos
- **Gris Claro:** `#F5F5F5` - Secciones alternas

## 📱 Funcionalidades JavaScript

- Menú móvil hamburguesa
- Scroll suave entre secciones
- Carrusel auto/manual
- Validación de formulario
- Notificaciones toast
- Tracking de analytics

## 📞 Contacto

Pioneer Center  
Saltos del Guairá - Paraguay  
Tel: +595 985 939 952  
Email: info@pionnercenter.com

---

© 2026 Pioneer Center - Todos los derechos reservados
