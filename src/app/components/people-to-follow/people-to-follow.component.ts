import { Component, OnInit } from '@angular/core';

type Profile = {
  perfilsName: string;
  username: string;
  firstLetterOfTheName: string;
}

@Component({
  selector: 'app-people-to-follow',
  templateUrl: './people-to-follow.component.html',
  styleUrls: ['./people-to-follow.component.css']
})
export class PeopleToFollowComponent implements OnInit {
  perfils: Profile[] = [
    { perfilsName: 'Angular', username: '@angular', firstLetterOfTheName: '' },
    { perfilsName: 'GitHub', username: '@github', firstLetterOfTheName: '' },
    { perfilsName: 'Diego Fernandes', username: '@dieegosf', firstLetterOfTheName: '' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.firstLetter();
  }

  firstLetter() {
    this.perfils.forEach(item => item.firstLetterOfTheName = item.perfilsName.charAt(0))
  }

}
