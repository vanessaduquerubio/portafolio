import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeLink = 'inicio';
  scrolled = false;

  onUpdateActiveLink(value: string) {
    this.activeLink = value;
  }

}
