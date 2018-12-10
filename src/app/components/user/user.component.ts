import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private displayNameString: string;
  private ageInt: number;
  private emailString: string;

  // Dictionary
  private address: {
    street: string,
    city: string,
    province: string,
    postcode: string
  }

  // Array
  private skills: string[];

  constructor() { }

  ngOnInit() {

    this.displayNameString = "MasterUNG EWTC";
    this.ageInt = 50;
    this.emailString = "master@abc.com";

    // Initial Dictionary
    this.address = {
      street: "53 Tavonivat1",
      city: "Bangkok",
      province: "BKK",
      postcode: "10260"
    }

    //Array
    this.skills = ["Codding", "Funning", "Sleeping", "Driving"]

  } // ngOnInit

  addSkill(skill: string){
    this.skills.unshift(skill);
    return false;
  }

  removeSkill(skill: string) {
    this.skills.forEach((element, index) => {
      if (element == skill) {
        this.skills.splice(index, 1);
      }
    });
  }

} // UserComponent Class
