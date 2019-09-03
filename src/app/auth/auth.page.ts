import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  initForm() {
    this.form = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.minLength(4)]],
        password: ['', [Validators.required, Validators.minLength(4)]]
      }
    );
  }

  ngOnInit() {
    if (localStorage.length === 0) {
      alert('Ceci est votre première utilisation. Les identifiants que vous allez renseigner seront utilisés pour vous identifier les prochaines fois.');
    }
    this.initForm();
  }

  login() {
    const data = this.form.value;
    if (localStorage.length === 0) {
      localStorage.setItem('username', data.username);
      localStorage.setItem('password', data.password);
      this.initForm();
      this.router.navigate(['/home']);
    } else {
      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');
      if (data.username == username && password == data.password) {
        this.initForm();
        this.router.navigate(['/home']);
      } else {
        this.initForm();
        alert('Identifiants incorrects.');
      }
    }
  }

}
