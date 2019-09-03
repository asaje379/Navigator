import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  cus_src: string = '';
  url: string = '';
  safeUrl: SafeResourceUrl;

  constructor(
    public sanitizer: DomSanitizer,
    public router: Router
  ) { }

  ngOnInit() {
  }

  load() {
    if (this.url.indexOf('http') == -1) {
      this.url = 'http://'+this.url;
    } 
    this.cus_src = this.url;
  }

  logout() {
    this.router.navigate(['/']);
  }

}
