"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core'); // We will need dependancy injection, so we will import Injectable from angular core.
var http_1 = require('@angular/http'); // Http Module as well... importing.
require('rxjs/add/operator/map'); // Also require observable, so we will import these functions as well.
var SpotifyService = (function () {
    function SpotifyService(_http) {
        this._http = _http;
    }
    SpotifyService.prototype.searchMusic = function (str, type) {
        if (type === void 0) { type = 'artist'; }
        this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US'; //Following the url structure as listed in spotify's api docs.
        return this._http.get(this.searchUrl) //_http.get() will fetch our data with the searchUrl we've created.
            .map(function (res) { return res.json(); }); // Then map our results into an array.
    };
    SpotifyService.prototype.getArtist = function (id) {
        this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
        return this._http.get(this.artistUrl) //fetch our data with the artistUrl we've created.
            .map(function (res) { return res.json(); }); // Again, maps results into an array.
    };
    SpotifyService.prototype.getAlbums = function (artistId) {
        this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + "/albums";
        return this._http.get(this.albumsUrl) //fetch album data with albumUrl we've created.
            .map(function (res) { return res.json(); }); // More Array mappin'.
    };
    SpotifyService.prototype.getAlbum = function (id) {
        this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;
        return this._http.get(this.albumUrl) //fetch single album data with albumUrl we've created.
            .map(function (res) { return res.json(); }); // More Array mappin'.
    };
    SpotifyService = __decorate([
        // Also require observable, so we will import these functions as well.
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SpotifyService);
    return SpotifyService;
}());
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=spotify.service.js.map