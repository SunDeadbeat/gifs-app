import { Component } from '@angular/core';
import { GifList } from "../../components/gif-list/git-list";

@Component({
  selector: 'app-trending-page',
  imports: [GifList],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.css',
})
export default class TrendingPage {

}
