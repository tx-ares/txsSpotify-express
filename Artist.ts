import {Album} from './Album';// Importing a Album model for the key albums in Artist.

export class Artist { // This will be our model for each Artist index.
	id: number;
	name: String;
	genres: any;
	albums: Album[];
}