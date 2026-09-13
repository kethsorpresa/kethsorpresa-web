# 🎁 Entrega — Web KethSorpresa

**Fecha:** 06/09/2026
**Para:** Kender
**Web (tienda):** https://kethsorpresa.github.io/kethsorpresa-web/
**Admin (panel para manejar la tienda):** https://kethsorpresa.github.io/kethsorpresa-web/admin.html

---

## 1) Tus cuentas (son tuyas, a tu nombre)

| Servicio | Usuario | Para qué |
|---|---|---|
| Gmail | `kethsorpresa.ok@gmail.com` | Recuperar tus cuentas, verificar GitHub |
| GitHub | `kethsorpresa` | Es donde vive la web y el panel admin |
| Instagram | `@kethsorpresa` | Marketing (ya existía) |

> 🔑 **Contraseñas:** las tuyas se entregan por separado (no van en este documento). Si no las tenés o querés cambiarlas:
> - Gmail: entrá a https://accounts.google.com → "¿Olvidaste tu contraseña?" → te llega un código al celular cargado como recuperación.
> - GitHub: entrá a https://github.com/login → "Forgot password?" → te llega el código al Gmail de arriba.
>
> **Recomendación:** apenas recibas todo, cambialas por unas tuyas. Quedan a tu nombre y solo vos las manejás.

---

## 2) La clave para entrar al admin (importante, se hace 1 sola vez)

El panel admin **no usa contraseña**: pide una "clave de acceso" que es un **token de GitHub** (una contraseña especial que permite a la web guardar los cambios). Se crea así:

1. Entrá a https://github.com/login y entrá con tu usuario `kethsorpresa`.
2. Arriba a la derecha: tu foto → **Settings**.
3. Bajá hasta el final de la barra izquierda → **Developer settings**.
4. **Personal access tokens** → **Tokens (classic)** → **Generate new token (classic)**.
5. En **Note** poné: `admin web keth` (o lo que quieras).
6. En **Expiration** elegí, por ejemplo, `No expiration` (para no tener que repetirlo).
7. Tildá el permiso **`repo`** (se tildan solas todas las opciones de repo).
8. Tocá **Generate token** → te muestra una clave larga tipo `ghp_xxxxxxxxxxxx`.
9. **Copiala YA** (solo se muestra una vez). Guardala en un lugar seguro (ej. un block de notas).
10. Abrí el admin: https://kethsorpresa.github.io/kethsorpresa-web/admin.html
11. Pegá esa clave en "Clave de acceso" → **Entrar**. Queda guardada en ese navegador; la próxima entrás directo.

> ⚠️ Si algún día dice "Clave incorrecta o vencida", generá un token nuevo con los mismos pasos y pegálo de nuevo.

---

## 3) Cómo usar el admin (lo del día a día)

### Agregar o editar un producto
1. Entrá al admin (paso 2).
2. **+ Nuevo producto** (o tocá un producto existente para editarlo).
3. Completá: **nombre**, **categoría**, **precio**, **descripción** y **foto** (tocás el cuadro y elegís el archivo; se achica sola).
4. **Variantes**: si un producto viene en varios colores/modelos (ej. el vaso glitter en rosa, violeta, negro…) agregás un grupo y sus opciones. Cada opción puede tener su color y su propia foto.
5. **Personalización**: tildá la casilla si el cliente puede escribir texto (nombre, frase) y poné el límite de caracteres.
6. **Stock**: si ponés una cantidad, la web no deja pedir más; al llegar a 0 muestra "Agotado". Vacío = sin control.
7. **Destacado** ⭐ lo muestra arriba de todo. **Agotado** lo deja visible pero sin poder pedirse.
8. Tocá **Guardar producto**.

### Cupones de descuento (promos: día del padre, bienvenida, etc.)
1. En el admin: **⚙ Ajustes de la tienda**.
2. Sección **Cupones de descuento** → **+ Agregar cupón**.
3. Código (ej. `PADRE10`), tipo (**% porcentaje** o **$ monto fijo**) y valor (10 = 10% o $10).
4. Dejá **Activo** tildado. Quitáselo cuando no quieras que se use más.
5. El cliente escribe el código en el carrito y el descuento se aplica solo.

### Textos, WhatsApp e Instagram
1. **⚙ Ajustes de la tienda**.
2. Ahí editás el aviso de arriba (promos), los textos de portada, el **número de WhatsApp** (el que recibe los pedidos) e Instagram.

### Publicar los cambios (clave del sistema)
Después de tocar lo que sea, **siempre** tocá el botón verde **"💾 Guardar y publicar"** (abajo).
La web tarda **1 o 2 minutos** en actualizarse.

> 💡 Arriba del todo te dice "⚠️ Hay cambios sin publicar" hasta que guardes. Si tocás "Descartar" se pierde todo lo que no publicaste.

---

## 4) Cómo llegan los pedidos

- El cliente arma el carrito, pone **dirección de envío** (calle, código postal, ciudad, provincia) y toca **"Enviar pedido por WhatsApp"**.
- Le abre WhatsApp con el pedido armado (productos + dirección + cupón si usó uno).
- Ese mensaje te llega a **TU número de WhatsApp** (el que está cargado en Ajustes de la tienda).
- Ahí coordinás con el cliente: **costo del envío**, confirmación y pago (transferencia).

---

## 5) Consultas / soporte

Si algo no funciona o querés un cambio más grande (dominio propio tipo `kethsorpresa.com.ar`, fotos nuevas, secciones), escribile a **Nicolás**, que es quien te construyó la web.

---

*Documento de entrega — guardalo en tu computadora junto con tus contraseñas.*
