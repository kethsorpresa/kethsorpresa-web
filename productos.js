// ============================================================
// KETH SORPRESA — Catálogo de RESPALDO
// La web usa productos.json (lo edita el dueño desde admin.html).
// Este archivo solo se usa si productos.json no se puede leer
// (por ejemplo al abrir index.html directo desde la carpeta).
// Estructura de cada producto:
// {
//   id: "identificador-unico",          // sin espacios ni acentos
//   nombre: "Nombre del producto",
//   categoria: "Vasos",
//   descripcion: "Descripción corta",
//   precio: 2500,                        // pesos argentinos
//   imagen: "assets/products/foto.webp", // foto principal
//   destacado: true|false,               // aparece en "Destacados"
//   agotado: true|false,                 // no se puede agregar al pedido
//   personalizable: true|false,          // el cliente escribe un texto
//   textoEtiqueta: "Nombre o texto",     // ayuda del campo de texto
//   textoMax: 12,                        // límite de caracteres
//   precioPersonalizacion: 0,            // extra por personalizar (0 = gratis)
//   variantes: [                         // grupos de opciones (mismo precio)
//     { nombre: "Tapa",
//       opciones: [
//         { valor: "Rosa", color: "#ffb3c3", imagen: "assets/products/vaso-rosa.svg" }
//       ] }
//   ]
// }
// ============================================================
const PRODUCTOS_RESPALDO = [
  {
    "id": "vaso-sorpresa",
    "nombre": "Vaso Sorpresa con tapa",
    "categoria": "Vasos",
    "descripcion": "Vaso con tapa y sorbete. Elegí el color de la tapa y agregá el nombre o texto que quieras.",
    "precio": 2500,
    "imagen": "assets/products/vaso-rosa.svg",
    "destacado": true,
    "agotado": false,
    "personalizable": true,
    "textoEtiqueta": "Nombre o texto para el vaso",
    "textoMax": 12,
    "precioPersonalizacion": 0,
    "variantes": [
      {
        "nombre": "Tapa",
        "opciones": [
          {
            "valor": "Rosa",
            "color": "#ffb3c3",
            "imagen": "assets/products/vaso-rosa.svg"
          },
          {
            "valor": "Celeste",
            "color": "#8ecae6",
            "imagen": "assets/products/vaso-celeste.svg"
          },
          {
            "valor": "Azul",
            "color": "#5b8def",
            "imagen": "assets/products/vaso-azul.svg"
          },
          {
            "valor": "Lila",
            "color": "#c8b6ff",
            "imagen": "assets/products/vaso-lila.svg"
          }
        ]
      }
    ]
  },
  {
    "id": "taza-personalizada",
    "nombre": "Taza personalizada",
    "categoria": "Vasos",
    "descripcion": "Taza de cerámica con la frase o el nombre que elijas. Ideal para regalar.",
    "precio": 4800,
    "imagen": "assets/products/taza.svg",
    "destacado": true,
    "agotado": false,
    "personalizable": true,
    "textoEtiqueta": "Frase o nombre para la taza",
    "textoMax": 20,
    "precioPersonalizacion": 0,
    "variantes": []
  },
  {
    "id": "gorrito-cumple",
    "nombre": "Gorrito Feliz Cumpleaños",
    "categoria": "Cumpleaños",
    "descripcion": "Gorrito de fiesta con el nombre o la edad de la persona homenajeada.",
    "precio": 1500,
    "imagen": "assets/products/gorrito.svg",
    "destacado": false,
    "agotado": false,
    "personalizable": true,
    "textoEtiqueta": "Nombre o edad",
    "textoMax": 15,
    "precioPersonalizacion": 0,
    "variantes": []
  },
  {
    "id": "guirnalda-feliz",
    "nombre": "Guirnalda Feliz Cumpleaños",
    "categoria": "Decoración",
    "descripcion": "Guirnalda de banderines para decorar. Disponible en varios colores.",
    "precio": 3200,
    "imagen": "assets/products/guirnalda.svg",
    "destacado": false,
    "agotado": false,
    "personalizable": false,
    "variantes": [
      {
        "nombre": "Color",
        "opciones": [
          {
            "valor": "Rosa",
            "color": "#ffb3c3"
          },
          {
            "valor": "Lila",
            "color": "#c8b6ff"
          },
          {
            "valor": "Celeste",
            "color": "#8ecae6"
          }
        ]
      }
    ]
  },
  {
    "id": "globos-x10",
    "nombre": "Globos x10 surtidos",
    "categoria": "Globos",
    "descripcion": "Pack de 10 globos metalizados surtidos para decorar cualquier fiesta.",
    "precio": 2800,
    "imagen": "assets/products/globos.svg",
    "destacado": false,
    "agotado": false,
    "personalizable": false,
    "variantes": [
      {
        "nombre": "Color",
        "opciones": [
          {
            "valor": "Rosa",
            "color": "#ffb3c3"
          },
          {
            "valor": "Dorado",
            "color": "#f5c84b"
          },
          {
            "valor": "Plateado",
            "color": "#b8c0cc"
          }
        ]
      }
    ]
  },
  {
    "id": "caja-sorpresa",
    "nombre": "Caja Sorpresa",
    "categoria": "Regalos",
    "descripcion": "Caja regalo con cotillón variado y golosinas. ¡El regalo ideal para sorprender!",
    "precio": 9800,
    "imagen": "assets/products/caja-sorpresa.svg",
    "destacado": true,
    "agotado": false,
    "personalizable": true,
    "textoEtiqueta": "Dedicatoria (va en la tarjeta)",
    "textoMax": 30,
    "precioPersonalizacion": 0,
    "variantes": [
      {
        "nombre": "Tamaño",
        "opciones": [
          {
            "valor": "Chica"
          },
          {
            "valor": "Grande"
          }
        ]
      }
    ]
  },
  {
    "id": "kit-fiesta-20",
    "nombre": "Kit Fiesta x20 personas",
    "categoria": "Kits",
    "descripcion": "Kit completo: platos, servilletas, vasos, mantel y banderines para 20 personas.",
    "precio": 18500,
    "imagen": "assets/products/cotillon-mix.svg",
    "destacado": false,
    "agotado": false,
    "personalizable": false,
    "variantes": [
      {
        "nombre": "Temática",
        "opciones": [
          {
            "valor": "Clásica",
            "color": "#ffd166"
          },
          {
            "valor": "Princesas",
            "color": "#ffb3c3"
          },
          {
            "valor": "Fútbol",
            "color": "#5b8def"
          }
        ]
      }
    ]
  }
];
