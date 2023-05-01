import { item } from "./item"
import { itemList } from "./itemList"


export const inventory: item[] = []

export function addItem(id: number): void {
    const itemToAdd: item | undefined = itemList[id];


    console.log(itemToAdd);
    
    if (itemToAdd) {
        inventory.push(itemToAdd);
        

    } 
}
