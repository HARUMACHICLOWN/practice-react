import React from 'react'
import Header from './Header'

function Home() {

  const prodList = [
    {name:"Продукт1",desc:"Description1",price:2000},
    {name:"Продукт2",desc:"Description2",price:2000},
    {name:"Продукт3",desc:"Description3",price:2000},
    {name:"Продукт4",desc:"Description4",price:2000},
  ]

  const [ prods, setProds ] = React.useState(prodList)
  const [ auth, setAuth ] = React.useState(false)
  
  return (
    <div>
      <Header/>
      <h1>Продукты</h1>
        {
          prods.map((item,index) => (
            <div className = "product">
              <p>Имя:{item.name}</p>
              {auth &&
               <div key = {index}>
                <p>Описание:{item.desc}</p>
                <p>Цена:{item.price}</p>
                <button>Добавить в корзину</button>
              </div>  
          }
            </div>
          ))
        }
      <button onClick = {() => setAuth(!auth)}>АВТОРИЗОВАТЬСЯ</button>
    </div>
  )
}

export default Home