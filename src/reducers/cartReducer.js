import { Data }  from "../data";

const initState = {
    items: Data,
    addedItems: [],
    total: 0
};


const cartReducer = (state = initState,action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            let addedItem = state.items.find(item => item.id === action.payload);
            let totalAddedItem = addedItem.price + state.total; 
            return { 
                ...state, 
                addedItems: [...state.addedItems, addedItem],
                total: totalAddedItem
            }
        case 'REMOVE_FROM_CART':
            const objExist = state.addedItems.find( el => el.id === action.payload);
            const index = state.addedItems.indexOf(objExist);
            if(index === 0){
                const newAddedItem = state.addedItems.slice(1,state.addedItems.length);
                return { 
                    ...state,
                    addedItems: [...newAddedItem]
                 }
            }else if(index === state.addedItems.length -1){
                const newAddedItem = state.addedItems.slice(0,state.addedItems.length - 1);
                return { 
                    ...state,
                    addedItems: [...newAddedItem]
                 }
            }else{
                const newBegin = state.addedItems.slice(0,index);
                const newEnd = state.addedItems.slice(index + 1,state.addedItems.length);
                const newAddedItem = newBegin.concat(newEnd);
                return { 
                    ...state,
                    addedItems: [...newAddedItem]
                 }
            }
        default:
            return state; 
    }
}

export default cartReducer;