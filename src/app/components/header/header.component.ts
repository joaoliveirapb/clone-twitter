import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  modalNewPost: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openModalNewPost() {
    this.modalNewPost = true;
  }

  closeModalNewPost() {
    this.modalNewPost = false;
  }

  closeModalWhenClickOut(e: MouseEvent) {
    const theTarget = e.target as HTMLElement;
    if(theTarget.id === 'modal') this.closeModalNewPost()
  }

}
