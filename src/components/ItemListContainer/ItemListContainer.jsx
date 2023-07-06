import { useEffect, useState } from "react";
import "./ItemlistStyles.css";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { getProductByCategory } from "../../services/firebase";
import { CatchProducts } from "../../services/firebase";

import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Spiner from "../Spiner/Spiner";

const ItemListContainer = () => {

  // estado para guardar los productos
  const [products, setProduct] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  // utilizo el useParams para poder tomar el valor de la url que necesito filtrar como categoria
  let ItemCategory = useParams().ItemCategory;
  // useEffect para ejecutar la funcion que ira a buscar los productos al mockService
  useEffect(() => {
    ItemCategory
      ? //llamo a a funcion
      getProductByCategory(ItemCategory)
          // de ser exitosa la devolucion guardo lo recibido en el useState
          .then((response) => setProduct(response))
          // de ser erronea la respuesta mostrar el error por consola
          .catch((e) => console.log(e))
          .finally(
            ()=>setisLoading(false)
          )
      : //llamo a a funcion
      CatchProducts()
          // de ser exitosa la devolucion guardo lo recibido en el useState
          .then((response) => setProduct(response))
          // de ser erronea la respuesta mostrar el error por consola
          .catch((e) => console.log(e))
          .finally(
            ()=>setisLoading(false)
          )
  }, [ItemCategory]);

  return (
    <MDBContainer fluid className=" container my-5 text-center ">
    <MDBRow>
    { isLoading ? ( <div className="container col-12 mt-5 d-flex  " style={{minHeight:'30vh' ,alignItems:'center' ,justifyContent:'center',textAlign:'center'}}><Spiner></Spiner></div>):(<ItemList products={products}/> )}

      </MDBRow>

    </MDBContainer>
  );
};
export default ItemListContainer;

