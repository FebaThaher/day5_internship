import { Component } from '@angular/core';
import { CorouselComponent } from "../../unit/corousel/corousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CorouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
