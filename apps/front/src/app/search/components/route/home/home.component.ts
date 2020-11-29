import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { GifService } from '../../../service/gif.service';

@Component({
  selector: 'favorite-gif-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  giphyItems$: Observable<string[]>;
  tenorItems$: Observable<string[]>;
  mergeItems$: Observable<string[]>;

  constructor(private gifService: GifService) {}

  searchForGiphy(keyword: string) {
    this.giphyItems$ = this.gifService.searchForGiphy(keyword);
  }

  searchForTenor(keyword: string) {
    this.tenorItems$ = this.gifService.searchForTenor(keyword);
  }

  searchForMerge(keyword: string) {
    this.mergeItems$ = this.gifService.searchForMerge(keyword);
  }
}
