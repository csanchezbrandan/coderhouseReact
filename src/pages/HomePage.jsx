import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import SliderHome from '../components/Sliders/SliderHome'

function HomePage() {
  return (
    <div className='container '>
    <SliderHome />
    <div className='col mt-5 p-1 text-center' style={{color:'black', textDecoration:'none'}}>
    <h4>Ser una empresa lider en el sector de indumentaria y productos outdoor requiere pasión y comprender a las personas apasionadas por el outdoor tanto como nosotros</h4>
    </div>
    <ItemListContainer></ItemListContainer>
    </div>
  )
}

export default HomePage
