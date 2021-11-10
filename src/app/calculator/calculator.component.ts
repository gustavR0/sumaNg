import { Component, OnInit } from '@angular/core';
import {ApirestService} from '../services/apirest.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  numero1 = 0;
  numero2 = 0;
  resultado = 0;
  constructor(private api: ApirestService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  sumar(){
    this.api.sumar(this.numero1, this.numero2).subscribe(
      (resp: any) => {
          this.resultado = resp.resultado;
      }
    );
  }
}
