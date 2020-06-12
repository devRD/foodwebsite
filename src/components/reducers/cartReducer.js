import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {
            id:1,
            title:'Burger',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price:10,
            img: "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            id:2,
            title:'Pizza',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price:80,
            img: "https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            id:3,
            title:'Ice-Cream',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price:20,
            img: "https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            id:4,
            title:'Cake', 
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", 
            price:120,
            img: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            id:5,
            title:'Noodles', 
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", 
            price:160,
            img: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            id:6,
            title:'Tacos', 
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price:90,
            img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
