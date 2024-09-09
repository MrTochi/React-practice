

export default function Fruit({fruit,price,emoji,soldOut}){
if(!soldOut)
return(
  <li>{price} {emoji}  </li>
)
   
}