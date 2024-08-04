import { Component } from '@angular/core';
import { CardComponent } from '../../unit/card/card.component';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink,CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private api:ApiService){}
  products:any=""
  ngOnInit()
  {
    this.api.getProducts().subscribe((data:any)=>{this.products=data})
  }
}
