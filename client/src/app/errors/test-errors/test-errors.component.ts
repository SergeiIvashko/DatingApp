import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  baserUrl = 'https://localhost:5001/api/';
  validationErrors: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get404Eror() {
    this.http.get(this.baserUrl + 'buggy/not-found').subscribe(responce => {
      console.log(responce);
    }, error => {
      console.log(error);
    })
  }

  get400Eror() {
    this.http.get(this.baserUrl + 'buggy/bad-request').subscribe(responce => {
      console.log(responce);
    }, error => {
      console.log(error);
    })
  }

  get500Eror() {
    this.http.get(this.baserUrl + 'buggy/server-error').subscribe(responce => {
      console.log(responce);
    }, error => {
      console.log(error);
    })
  }

  get401Eror() {
    this.http.get(this.baserUrl + 'buggy/auth').subscribe(responce => {
      console.log(responce);
    }, error => {
      console.log(error);
    })
  }

  get400ValidationEror() {
    this.http.post(this.baserUrl + 'account/register', {}).subscribe(responce => {
      console.log(responce);
    }, error => {
      console.log(error);
      this.validationErrors = error;
    })
  }
}
