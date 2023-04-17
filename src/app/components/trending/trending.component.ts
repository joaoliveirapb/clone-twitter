import { Component, OnInit } from '@angular/core';

type Trending = {
  typeOfTrending: string;
  subject: string;
  amountOfTweets: string;
}

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  trendings: Trending[] = [
    { typeOfTrending: 'eSports • Trending', subject: 'paiN Gaming', amountOfTweets: '121K' },
    { typeOfTrending: 'Sports • Trending', subject: 'O Real Madrid', amountOfTweets: '431K' },
    { typeOfTrending: 'Trending in Brazil', subject: 'Game of Thrones', amountOfTweets: '21.6K' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
