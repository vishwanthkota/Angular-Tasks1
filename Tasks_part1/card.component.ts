import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public products: ProductModel1[] = [];
  public products1 :any = [];
  a: number = 0.75666;
  start: number = 0;
  end: number = 4;
  constructor() { }

  ngOnInit(): void {



    this.products1.push({
      pname: "Printer",
      grade: "Outstanding"
    },
      {
        pname: "Printer",
        grade: "Excellent"
      },
      {
        pname: "Monitor",
        grade: "Good"
      },
      {
        pname: "CPU",
        grade: "Average"
      },
      {
        pname: "Ram",
        grade: "Average"
      },
      {
        pname: "SSD",
        grade: "Excellent"
      },);


    this.products.push({
      pname: "Abdul_Kalam",
      desc: "A._P._J._Abdul_Kala was an Indian aerospace scientist who served as the 11th president of India from 2002 to 2007.",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/A._P._J._Abdul_Kalam.jpg"
    }, {
      pname: "Ambedkar",
      desc: " Dr. Babasaheb Ambedkar, chief architect of Indian constitution and founding father of the modern India.",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Dr._Bhimrao_Ambedkar.jpg"
    }, {
      pname: "Vallabhbhai Patel",
      desc: "He was an Indian barrister and a senior leader of the Indian National Congress leader of the Indian National Congress",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Sardar_patel_%28cropped%29.jpg"
    }, {
      pname: "Indira_Gandhi",
      desc: "Indian Prime Minister Indira Gandhi (1917-1984) at the National Press Club, Washington, D.C. 1n 1966",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Indira_Gandhi_1966.jpg"
    },
      {
        pname: "Emma",
        desc: "Indian Prime Minister Indira Gandhi (1917-1984) at the National Press Club, Washington, D.C. 1n 1966",
        image: "https://reqres.in/img/faces/9-image.jpg"
      },
      {
        pname: "Charles",
        desc: "Indian Prime Minister Indira Gandhi (1917-1984) at the National Press Club, Washington, D.C. 1n 1966",
        image: "https://reqres.in/img/faces/3-image.jpg"
      },
      {
        pname: "Tracey",
        desc: "Indian Prime Minister Indira Gandhi (1917-1984) at the National Press Club, Washington, D.C. 1n 1966",
        image: "https://reqres.in/img/faces/6-image.jpg"
      },
      {
        pname: "George",
        desc: "Indian Prime Minister Indira Gandhi (1917-1984) at the National Press Club, Washington, D.C. 1n 1966",
        image: "https://reqres.in/img/faces/10-image.jpg"
      },
      {
        pname: "Janet",
        desc: "Indian Prime Minister Indira Gandhi (1917-1984) at the National Press Club, Washington, D.C. 1n 1966",
        image: "https://reqres.in/img/faces/11-image.jpg"
      },
      {
        pname: "Eve",
        desc: "Indian Prime Minister Indira Gandhi (1917-1984) at the National Press Club, Washington, D.C. 1n 1966",
        image: "https://reqres.in/img/faces/4-image.jpg"
      },
      {
        pname: "Emma",
        desc: "Indian Prime Minister Indira Gandhi (1917-1984) at the National Press Club, Washington, D.C. 1n 1966",
        image: "https://reqres.in/img/faces/1-image.jpg"
      }
    );
  }


  loadMoreData() {

    this.end += 4;
  }

}


export class ProductModel1 {
  "pname": string;
  "desc": string
  "image": string
}