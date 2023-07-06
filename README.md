
# GamingStore 🎮🕹 React.js
Ecommerce Desarrollado para el curso de **REACT** de *CoderHouse*.
![image](https://user-images.githubusercontent.com/80891761/215929054-58480886-d926-431f-bca4-aa697299bd43.png)

@GamingStore es un ecommerce que cumple con los estandares actuales de desarrollo web con React.

**Esta compuesto por 3 secciones ( Home , Category , Cart ).**

**# Home** : 

* **Una barra de busqueda**, en esta barra es posible buscar por palabra el producto, es decir al ingresar una palabra te devolvera el o los productos que tengan coincidencia con tu busqueda. Para realizarla utilice la extension de **#ALGOLIA**.

* **Un Slide de productos**, que desarrolle utilizando **#SLICK**, donde cada producto se muestra como una imagen clickeable que te llevara a una seccion con un detalle del producto, donde podras seleccionar la cantidad deseada del producto a comprar.

* **Una vista de todos los productos** obtenidos de nuestra base de datos **NoSLQ** creada en **#FIREBASE**, cada vez que el usuario ingresa a la web, se realiza una consulta a la base de datos, que nos devuelve los productos de esta misma.

* **Productos**, cada producto ( Item ), contiene una imagen (portada), titulo, categoria, precio ,consola a la que pertenece, descuento ( si lo tuviera ), y 2 botones de accion , el boton **ADD TO CART** , nos envia la informacion del producto clickeado al carrito , verificando previamente si este estaba agregado y en caso de estarlo sumarle 1 a su cantidad. Por otro lado tenemos al boton **VIEW MORE** , este boton te llevara a una seccion con un detalle del producto, donde podras seleccionar la cantidad deseada del producto a comprar. En caso de añadir el prodcuto desde la seccion detalle , ocurre lo mismo que si lo agregamos desde el home.

![image](https://user-images.githubusercontent.com/80891761/215929225-d2169fb6-cbe3-46d1-a345-7134b65ee2fc.png)


 **# Category** :
* Este **Boton ubicado en el Navbar** del proyecto nos muestra un desplegable que nos permite filtrar la busqueda de productos por consola, permitiendo visualizar unicamente los productos para la consola que se deseara. AL clickear la consola elegida, se hara una consulta en la base de datos mostrando solamente el o los productos que tengan coincidencia con el filtro. 

**# Cart** :
* La seccion del **carrito renderiza 2 mensajes distintos** al usuario , dependiendo si tiene productos seleccionados o no. En caso de no tener productos nos mustra un mensaje que nos invita a redirigirnos al home mediante el evento click en un boton. Si el usuario ya añadio productos entonces nos muestra los items seleccionados y nos permite agregar mas o reducir la cantidad selecta. 

* en la parte inferior de la pantalla nos muestra el Precio final a pagar por nuestro pedido , y nos renderiza 2 botones , **REMOVE ALL** , que nos elimina todos los items que tengamos añadidos y **CHECKOUT** , que nos muestra un modal con un formulario proponiendonos dejar nuestros datos personales para poder realizar la orden de compra. Si los datos estan completos entonces nos permitira enviar estos datos a nuestra base de datos donde de manera automatica se creara una nueva Coleccion en **#FIREBASE** ,la coleccion Orders ,donde sera creado el primer documento ,Cada documento ( cada orden efectuada ) tendra su propio ID unico. este id unico e irrepetible le sera devuelto al usuario al finalizar su pedido, a modo de poder realizar el seguimiento de su orden de compra.

![image](https://user-images.githubusercontent.com/80891761/215929416-b272ced3-b91e-4e42-ad09-f73be88967a6.png)

![image](https://user-images.githubusercontent.com/80891761/215929487-42492d3c-a241-4e81-8977-ad6ec31e3413.png)

![image](https://user-images.githubusercontent.com/80891761/215929559-2c0601d6-136e-415e-be9e-5743aba07908.png)


### # Tecnologias & Dependencias

![React](https://img.shields.io/badge/REACT.JS-V18.2.0-blue)

![Firebase](https://img.shields.io/badge/FIREBASE-V9.16.0-gold)

![Algolia](https://img.shields.io/badge/ALGOLIA-V4.14.3-darkblue)

![Bootstrap](https://img.shields.io/badge/BOOTSTRAP-V5.2.3-violet)

![Sweetalert2](https://img.shields.io/badge/SWEETALERT2-V11.7.1-red)

![Toastify](https://img.shields.io/badge/TOASTIFY-V9.1.1-brown)

![Slick](https://img.shields.io/badge/SLICK-V1.8.1-cyan)

![uiball](https://img.shields.io/badge/UIBALL-V1.2.6-green)




## Correrlo de forma local 

Clone the project

```bash
  git clone https://github.com/GermanPagano/React-Coderhouse-Ecommerce
```

Go to the project directory

```bash
  cd React-Coderhouse-Ecommerce
```

Install dependencies

```bash
  npm install
  npm install react-spinners
  npm install react-toastify
```

Start the server

```bash
  npm run start
```

