import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./unit/navbar/navbar.component";
import { CorouselComponent } from "./unit/corousel/corousel.component";
import { CardComponent } from './unit/card/card.component';
import { ProductsComponent } from "./pages/products/products.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CorouselComponent, CardComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ec';
}
