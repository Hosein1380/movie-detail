import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/services/http-service/moveis.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  year!: number;
  title!:string;
  imdbid!: string;
  constructor(
    private moviesService:MoviesService,
  ) { }

  ngOnInit(): void {
    this.AllMovies();
  }
  AllMovies(){
    this.moviesService.getAllMovies().subscribe(res=>{
      console.log(`res:`, res);
      res.year = this.year;
      res.title = this.title;
      res.imdbID = this.imdbid;
    })
    console.log(this.year);
    console.log(this.title);
  }

}
