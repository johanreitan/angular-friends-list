import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string | null = null;
  favorites: string[] = [];

  friends: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.friends.push(this.newFriend);
    this.newFriend = null;
  }


  addToFavs(friend: string): void {
    console.log(friend);
    if (this.favorites.indexOf(friend) === -1) {
      this.favorites.push(friend);
    }
  }

  deleteFromFavs(friend: string): void {
    this.favorites = this.favorites.filter((f) => f !== friend);
  }





  addFav(friend: string): void {
    console.log(friend);
    if (this.favorite === null) {
      this.favorite = friend;
    }
    console.log('favorite: ', this.favorite);
  }

  deleteFav(friend: string): void {
    console.log(friend);
    this.favorite = null;
    console.log('favorite: ', this.favorite);
  }

  isInFavs(friend: string) {
    if (this.favorites.indexOf(friend) === -1) {
      return false;
    }
    return true;
  }
}
