import { item } from "./item"
import { itemList } from "./itemList"


export const inventory: item[] = []

export function addItem(id: number): void {
    const itemToAdd: item | undefined = itemList[id];

    if (itemToAdd) {
        inventory.push(itemToAdd);
        console.log('item adicionado ao inventário')
        
    } 
}
