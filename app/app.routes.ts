import { provideRouter, RouterConfig } from '@angular/router';
import { SearchComponent } from './components/search/search.component'
import { AboutComponent } from './components/about/about.component'
import { ArtistComponent } from './components/artist/artist.component'
import { AlbumComponent } from './components/album/album.component'

const routes: RouterConfig = [
	{ path:'', component:SearchComponent }, // A blank path will represent the Home page, which is our seach componnent here.
	{ path:'about', component:AboutComponent }, // The about page will be named accordingly.
	{ path:'artist/:id', component:ArtistComponent}, // Once an artist is clicked, a component will render detailed results according to its id.
	{ path:'album/:id', component:AlbumComponent} // Album details on click, a component will render detailed results according to its id.

];

export const appRouterProviders = [
	provideRouter(routes)
]; 