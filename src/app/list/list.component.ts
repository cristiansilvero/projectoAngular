import { Component, OnInit } from '@angular/core';
import {Item} from '../../_modelo/Item';
import {MockItemsService} from '../_service/mock-items.service';
import {Observable} from 'rxjs/internal/Observable';
import {AbstractItemsService} from '../_service/abstract-items.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	items:Item[];
	//service: MockItemsService;

  constructor(private service:MockItemsService) {
  		//this.items=[
  		//new Item('Comprar Carne'),
  		//new Item('Comprar Carbon'),
  		//new Item('Comprar Chori'),
  		//new Item('Listo el Asado'),

 
  		//]
  	//	this.service = new MockItemsService();

  		this.service.getItems().subscribe(serviceItems => this.items = serviceItems);
   }

  ngOnInit() {
  }

  onRemove(item: Item){
  	this.service.remove(item).subscribe(serviceItems => {
  		this.items = serviceItems;
  	})
  }

 

}
