import {inject} from "aurelia-framework";
import {MovieData} from "./movieData";

@inject(MovieData)
export class All {
	
	constructor(movieData){
		this.movieData = movieData;
	}

	/*
	static inject(){
		return [HttpClient];
	}
	*/

	activate(){
		return this.movieData
			.getAll()
			.then(movies => this.movies = movies);
	}
}