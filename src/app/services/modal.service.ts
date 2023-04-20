import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalNewPost: boolean = false;
  
  constructor() { }

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
