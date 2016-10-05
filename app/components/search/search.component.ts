import {Component} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../../Artist'
import {ROUTER_DIRECTIVES} from '@angular/router'

@Component({
	moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    providers: [SpotifyService],
    directives: [ROUTER_DIRECTIVES]
})

export class SearchComponent {
	searchStr: string; //Accesses our input's value.
	searchRes: Artist[];


	constructor(private _spotifyService:SpotifyService){ // Here we inject our SpotifyService.

	}

	searchMusic(){
		// console.log(this.searchStr)
		// console.log("Test!")
		this._spotifyService.searchMusic(this.searchStr)//This is when our call is made and sorted once our full url string has been built.
			.subscribe(res => {
				this.searchRes = res.artists.items
				// console.log(this.searchRes)
			})
	}
 }