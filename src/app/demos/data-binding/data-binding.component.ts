import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})

export class DataBindingComponent {

  public contadorClique: number = 0;
  public urlImagem: string = "http://angular.io/assets/images/logos/angular/angular.svg";
  public nome: String = "";

  adicionarClique() {
    this.contadorClique++;
  }

  reiniciarClique() {
    this.contadorClique = 0;
  }

  /*keyUp(event: any) {
    this.nome = event.target.value;
  }*/
}
