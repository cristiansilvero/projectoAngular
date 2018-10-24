import { Injectable } from '@angular/core';
import { AbstractItemsService } from './abstract-items.service';
import { Observable } from 'rxjs/internal/Observable';
import {Item} from '../../_modelo/item';

@Injectable({
  providedIn: 'root'
})
export class MockItemsService extends AbstractItemsService {
  items : Item[];
  constructor() {
  		super();
    	this.items=[
  		new Item('Comprar Carne'),
  		new Item('Comprar Carbon'),
  		new Item('Comprar Chori'),
  		new Item('Listo el Asado'),

 
  		] 
  	}

  	getItems(): Observable<Item[]>{
  		return new Observable((observable)=>{
  			observable.next(this.items)
  			observable.complete();
  		})

  	}
  	remove(item:Item):Observable<Item[]>{
  		return new Observable((observable)=>{
  		console.log("Borrar servicio");
  		this.items = this.items.filter(it => it !== item);
  		observable.next(this.items);
  		observable.complete();
  	})
  	}
  	additem(item: Item):Observable<Item[]>{
  		return new Observable((observable)=>{
 
  		this.items.push(item);
 		observable.next(this.items);
  		observable.complete();
  	})
 

  	}
}
