import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'fernando';
  nombreUpper: string = 'FERNANDO';
  nombreCompleto: string = 'feRnaNDo hErreRA';

  fecha: Date = new Date();  // dia actual
  
  constructor() { }

  ngOnInit(): void {
  }

}
