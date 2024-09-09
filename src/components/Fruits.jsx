import Fruit from "./Fruit"

export default function Fruits(){

    let fruits=[
        {fruit:`mango`,price:50, emoji:`🥭`,soldOut:true},
        { fruit:`pawpaw`,price:100, emoji:`🍆`,soldOut:true},
        { fruit:`bananna`,price:500,emoji:`🍌`,soldOut:true},
        { fruit:`orange`, price:30,emoji:`🍊`,soldOut:false}
    ]
   
   
    return(
        <div>
            {fruits.map(function(items){
                
              return  <Fruit  
             fruit={items.fruit}
             price={items.price}
             emoji={items.emoji}
             soldOut={items.soldOut}
             />
            })}
           
            
        </div>
    )
}