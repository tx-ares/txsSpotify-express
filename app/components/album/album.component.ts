import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../../Artist';
import {Album} from '../../../Album';
import {ActivatedRoute} from '@angular/router'

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AlbumComponent { 
	id: string;
	album: Album[];

	constructor(
		private _spotifyService:SpotifyService,
		private _route:ActivatedRoute){

	}

	msConverter(duration : number) { // Needed to convert time from ms to MM:SS format.
  		var minutes = Math.floor(duration / 60000);
  		var seconds = ((duration % 60000) / 1000).toFixed(0);

  		return minutes + ":" + (parseInt(seconds) < 10 ? '0' : '') + seconds;
	}

	ngOnInit(){
		this._route.params
			.map(params => params['id'])
			.subscribe((id) => {
				this._spotifyService.getAlbum(id) // Calls for our Artist by id after the string has been built .
					.subscribe(album => {
						this.album = album;
						console.log(this.album);
					})

			})
	}
}
