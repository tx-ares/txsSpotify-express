import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component/';
import {SearchComponent} from './components/search/search.component/';
import {AboutComponent} from './components/about/about.component/';
import {AlbumComponent} from './components/album/album.component'
import {ArtistComponent} from './components/artist/artist.component'
import {HTTP_PROVIDERS} from '@angular/http'
import {SpotifyService} from './services/spotify.service'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives:[ROUTER_DIRECTIVES, NavbarComponent],
    entryComponents:[SearchComponent, AboutComponent], // Syntax change from precompile to entryComponents . RC4 => RC5
    providers: [HTTP_PROVIDERS, SpotifyService] //Spotify calls will be made here so it must be added through providers.
})


export class AppComponent { }
