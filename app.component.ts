import { Component } from '@angular/core';

interface ShoppingItem {
  name: string;
  bought: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variável para armazenar o novo item que será adicionado
  newItem: string = '';
  
  // Lista de itens
  items: ShoppingItem[] = [];

  // Adiciona um novo item à lista
  addItem() {
    if (this.newItem.trim()) {
      this.items.push({ name: this.newItem, bought: false });
      this.newItem = ''; // Limpa o campo de texto após adicionar o item
    }
  }

  // Remove um item da lista
  removeItem(index: number) {
    this.items.splice(index, 1); // Remove o item pelo índice
  }

  // Edita o nome do item
  editItem(item: ShoppingItem, newName: string) {
    if (newName.trim()) {
      item.name = newName;
    }
  }

  // Marca um item como comprado ou não comprado
  toggleBought(item: ShoppingItem) {
    item.bought = !item.bought;
  }

  // Obtém os itens que ainda não foram comprados
  getUnboughtItems() {
    return this.items.filter(item => !item.bought);
  }

  // Obtém os itens que já foram comprados
  getBoughtItems() {
    return this.items.filter(item => item.bought);
  }
}



