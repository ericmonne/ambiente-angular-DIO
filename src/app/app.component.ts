import { PeopleService } from './shared/services/people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  count = 0;
  nome = "Xavier Hernandez i Creus";
  text = "";

  pessoas = [{
    nome: 'Luke',
    sobrenome: 'Cage'
  },
  {
    nome: 'Ororo',
    sobrenome: 'Munroe'
  },
  {
    nome: 'Jessica',
    sobrenome: 'Jones'
  },
  {
    nome: 'Eric',
    sobrenome: 'Brooks'
  }];


  constructor(){

  }
  ngOnInit(): void {
      let interval = setInterval(() =>{
        this.count++;
        if(this.count === 10){
          clearInterval(interval);
        }
      }, 1000)
  }

  clicar(nome:string): void{
    console.log(nome, ' clicou');
  }
}
