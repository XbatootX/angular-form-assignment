import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { matchpassword } from './matchpassword.validator';


@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent implements OnInit{
  form = new FormGroup({
    
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    Password: new FormControl('',[
      Validators.required, 
      Validators.minLength(8),
      Validators.maxLength(15)
    ]),
    conPassword: new FormControl(null),
    phone: new FormControl('',),
    filter: new FormControl(''),
    subFilter: new FormControl(''),
    status: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
    }, {
      validators:matchpassword
    });
    ngOnInit() {
      const savedFormData = localStorage.getItem('form_data');
      if (savedFormData) {
        this.form.setValue(JSON.parse(savedFormData));
      }
    }

    onSubmit() {
      if (this.form.valid) {
        const formData = this.form.value;
        console.log(formData);
        localStorage.setItem('form_data', JSON.stringify(formData));
      }
    }

   country: string[]=['England', 'Egypt', 'USA', 'India']
   city: string[]=[]
   engcity: string[]=['London', 'Liverpool', 'Bristol']
   egycity: string[]=['Cairo', 'Giza', 'Alex']
   usacity: string[]=['Newyork', 'DC', 'Texas']
   indcity: string[]=['Mumbai', 'Delhi', 'Jaipur']
  log(radio: any){
    console.log(radio);
  }
  get radio(){
    return this.form.get('radio');
  }

  get firstName(){
    return this.form.get('firstName');
  }
  get email(){
    return this.form.get('email');
  }
  get Password(){
    return this.form.get('Password');
  }
  get conPassword(){
    return this.form.get('conPassword');
  }
  get status(){
    return this.form.get('status');
  }
  get filter(){
    return this.form.get('filter');
  }

  updateCity(countryName: any){
    switch (countryName){
      case 'England': 
        this.city = this.engcity;
        break;

      case 'Egypt': 
        this.city = this.egycity;
        break;
      case 'USA': 
        this.city = this.usacity;
        break;
      case 'India': 
        this.city = this.indcity;
        break;
      default:
        this.city=[];
        break;
    }

  }
 
}
