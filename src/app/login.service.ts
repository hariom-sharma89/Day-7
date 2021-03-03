import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private upersons: User[] = [
    {
      id: 1,
      FlightNo: 'Air India',
      DepartureDate: '12/08/2021',
      DepartureTime: '08:12 AM',
      ArivalDate: '18/08/2021',
      ArivalTime: '05:59 PM',
      from:"Delhi",
      to:"Goa"
    },
    {
      id: 2,
      FlightNo: 'British Airways',
      DepartureDate: '18/07/2021',
      DepartureTime: '07:12 AM',
      ArivalDate: '08/09/2021',
      ArivalTime: '12:59 PM',
      from:"Mumbai",
      to:"Noida"
    },
    {
      id: 2,
      FlightNo: 'IndoGo',
      DepartureDate: '12/08/2021',
      DepartureTime: '11:35 AM',
      ArivalDate: '18/08/2021',
      ArivalTime: '05:59 PM',
      from:"Simla",
      to:"Goa"
    },
  ];


  private upersons2: User[] = [
    {
      id: 1,
      FlightNo: 'Air India',
      DepartureDate: '12/08/2021',
      DepartureTime: '08:12 AM',
      ArivalDate: '18/08/2021',
      ArivalTime: '05:59 PM',
      from:"Delhi",
      to:"Goa"
    },
    {
      id: 1,
      FlightNo: 'Jet Airways',
      DepartureDate: '15/08/2021',
      DepartureTime: '11:12 AM',
      ArivalDate: '17/08/2021',
      ArivalTime: '07:59 PM',
      from:"Delhi",
      to:"Goa"
    },

    {
      id: 1,
      FlightNo: 'Indigo',
      DepartureDate: '19/08/2021',
      DepartureTime: '08:12 AM',
      ArivalDate: '21/08/2021',
      ArivalTime: '08:59 PM',
      from:"Delhi",
      to:"Goa"
    },
  ];


  constructor() { }

  getFlightFromData(): User[] {
    return this.upersons;
  }

  search(): User[] {
    return this.upersons2;
  }
}
