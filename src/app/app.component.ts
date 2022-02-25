import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  deportes: string[] = ["Fútbol", "Baloncesto", "Tenis"];

  agregar(nombreDeporte: string){
    this.deportes.push(nombreDeporte);
  }

}
