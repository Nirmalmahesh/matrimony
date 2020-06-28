import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {


  dataSet = {
    mainData : [
      {
        mid:'G.24.16.001',
        name:'V Karthik',
        dob: '10-Jan-1989',
        fathersOccupation: 'Private Sector (Late)',
        mothersOccupation: 'Home maker',
        education: 'B.Ed',
        occupation:'IT',
        company:'TCS',
        class: 'Middle class',
        salary: '50000 (Take home)',
        veedu : 16,
        siblings : '2 Elder sister(Got married)',
        native: '2 Elder sister(Got married)',
        livingLocation: 'Chennai'
      },
      {
        mid:'G.24.16.001',
        name:'Ram',
        dob: '10-Jan-1989',
        fathersOccupation: 'Private Sector (Late)',
        mothersOccupation: 'Home maker',
        education: 'B.Ed',
        occupation:'IT',
        company:'TCS',
        class: 'Middle class',
        salary: '50000 (Take home)',
        veedu : 16,
        siblings : '2 Elder sister(Got married)',
        native: '2 Elder sister(Got married)',
        livingLocation: 'Chennai'
      },
      {
        mid:'G.24.16.001',
        name:'Raghu',
        dob: '10-Jan-1989',
        fathersOccupation: 'Private Sector (Late)',
        mothersOccupation: 'Home maker',
        education: 'B.Ed',
        occupation:'IT',
        company:'TCS',
        class: 'Middle class',
        salary: '50000 (Take home)',
        veedu : 16,
        siblings : '2 Elder sister(Got married)',
        native: '2 Elder sister(Got married)',
        livingLocation: 'Chennai'
      },
      {
        mid:'G.24.16.001',
        name:'Kishore',
        dob: '10-Jan-1989',
        fathersOccupation: 'Private Sector (Late)',
        mothersOccupation: 'Home maker',
        education: 'B.Ed',
        occupation:'IT',
        company:'TCS',
        class: 'Middle class',
        salary: '50000 (Take home)',
        veedu : 16,
        siblings : '2 Elder sister(Got married)',
        native: '2 Elder sister(Got married)',
        livingLocation: 'Chennai'
      },
      {
        mid:'G.24.16.001',
        name:'Ram',
        dob: '10-Jan-1989',
        fathersOccupation: 'Private Sector (Late)',
        mothersOccupation: 'Home maker',
        education: 'B.Ed',
        occupation:'IT',
        company:'TCS',
        class: 'Middle class',
        salary: '50000 (Take home)',
        veedu : 16,
        siblings : '2 Elder sister(Got married)',
        native: '2 Elder sister(Got married)',
        livingLocation: 'Chennai'
      },
      {
        mid:'G.24.16.001',
        name:'Raghu',
        dob: '10-Jan-1989',
        fathersOccupation: 'Private Sector (Late)',
        mothersOccupation: 'Home maker',
        education: 'B.Ed',
        occupation:'IT',
        company:'TCS',
        class: 'Middle class',
        salary: '50000 (Take home)',
        veedu : 16,
        siblings : '2 Elder sister(Got married)',
        native: '2 Elder sister(Got married)',
        livingLocation: 'Chennai'
      },
      {
        mid:'G.24.16.001',
        name:'Kishore',
        dob: '10-Jan-1989',
        fathersOccupation: 'Private Sector (Late)',
        mothersOccupation: 'Home maker',
        education: 'B.Ed',
        occupation:'IT',
        company:'TCS',
        class: 'Middle class',
        salary: '50000 (Take home)',
        veedu : 16,
        siblings : '2 Elder sister(Got married)',
        native: '2 Elder sister(Got married)',
        livingLocation: 'Chennai'
      },{
        mid:'G.24.16.001',
        name:'Ram',
        dob: '10-Jan-1989',
        fathersOccupation: 'Private Sector (Late)',
        mothersOccupation: 'Home maker',
        education: 'B.Ed',
        occupation:'IT',
        company:'TCS',
        class: 'Middle class',
        salary: '50000 (Take home)',
        veedu : 16,
        siblings : '2 Elder sister(Got married)',
        native: '2 Elder sister(Got married)',
        livingLocation: 'Chennai'
      },
      {
        mid:'G.24.16.001',
        name:'Raghu',
        dob: '10-Jan-1989',
        fathersOccupation: 'Private Sector (Late)',
        mothersOccupation: 'Home maker',
        education: 'B.Ed',
        occupation:'IT',
        company:'TCS',
        class: 'Middle class',
        salary: '50000 (Take home)',
        veedu : 16,
        siblings : '2 Elder sister(Got married)',
        native: '2 Elder sister(Got married)',
        livingLocation: 'Chennai'
      },
      {
        mid:'G.24.16.001',
        name:'Kishore',
        dob: '10-Jan-1989',
        fathersOccupation: 'Private Sector (Late)',
        mothersOccupation: 'Home maker',
        education: 'B.Ed',
        occupation:'IT',
        company:'TCS',
        class: 'Middle class',
        salary: '50000 (Take home)',
        veedu : 16,
        siblings : '2 Elder sister(Got married)',
        native: '2 Elder sister(Got married)',
        livingLocation: 'Chennai'
      }
    ],
    apple : [
      {
        mid:'G.24.16.001',
        name:'V Karthik',
        dob: '10-Jan-1989',
        fathersOccupation: 'Private Sector (Late)',
        mothersOccupation: 'Home maker',
        education: 'B.Ed',
        occupation:'IT',
        company:'TCS',
        class: 'Middle class',
        salary: '50000 (Take home)',
        veedu : 16,
        siblings : '2 Elder sister(Got married)',
        native: '2 Elder sister(Got married)',
        livingLocation: 'Chennai'
      },
      {
        mid:'G.24.16.001',
        name:'Ram',
        dob: '10-Jan-1989',
        fathersOccupation: 'Private Sector (Late)',
        mothersOccupation: 'Home maker',
        education: 'B.Ed',
        occupation:'IT',
        company:'TCS',
        class: 'Middle class',
        salary: '50000 (Take home)',
        veedu : 16,
        siblings : '2 Elder sister(Got married)',
        native: '2 Elder sister(Got married)',
        livingLocation: 'Chennai'
      }
    ]
  }

  data = this.dataSet.mainData;

  constructor() { }

  ngOnInit(): void {
  }

  optionChange(event) {
    this.data = this.dataSet[event.target.value];
  }

}
