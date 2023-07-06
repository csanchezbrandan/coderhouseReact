
# Apacheta Outdoor React.js
Ecommerce Desarrollado para el curso de **REACT** de *CoderHouse*.

**Esta compuesto por 5 secciones:
Home : muestra la totalidad de los productos disponibles, un buscador de productos, y un slider con los productos mas consutados
Hombre , Mujer : ambas secciones cuantan con su sub menu (Indumentaria, Calzado y Accesorios)
Contacto: la opcion no esta disponible (para mostrar la pagina de 404 not found)**

**# Cart** :
* La seccion del **carrito renderiza 2 mensajes distintos** al usuario , dependiendo si tiene productos seleccionados o no. En caso de no tener productos nos mustra un mensaje que nos invita a redirigirnos al home mediante el evento click en un boton. Si el usuario ya añadio productos entonces nos muestra los items seleccionados y nos permite agregar mas o reducir la cantidad selecta. 

* en la parte inferior de la pantalla nos muestra el Precio final a pagar por nuestro pedido , y nos renderiza 2 botones , **ELIMINAR TODO** , que nos elimina todos los items que tengamos añadidos y **COMPRAR** , que nos muestra un modal con un formulario proponiendonos dejar nuestros datos personales para poder realizar la orden de compra. Si los datos estan completos entonces nos permitira enviar estos datos a nuestra base de datos donde de manera automatica se creara una nueva Coleccion en **#FIREBASE** ,la coleccion Orders ,donde sera creado el primer documento ,Cada documento tendra su propio ID unico. este id unico e irrepetible le sera devuelto al usuario al finalizar su pedido, a modo de poder realizar el seguimiento de su orden de compra.


## Correrlo de forma local 

Clone the project

```bash
  git clone https://github.com/csanchezbrandan/coderhouseReact.git
```

Go to the project directory

```bash
  coderhouseReact
```

Install dependencies

```bash
  npm install
  npm install react-icons
  npm install react-router-dom
  npm install react-spinners
  npm install react-toastify
```

Start the server

```bash
  npm run start
```