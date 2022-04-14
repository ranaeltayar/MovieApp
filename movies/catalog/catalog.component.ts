import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from 'src/app/movies.service';
import { delay } from 'rxjs';
import { Movie } from 'src/app/movieinterface';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers:[MoviesService]
})
export class CatalogComponent implements OnInit {
  topRated: Movie[]=[];
  constructor(private http: HttpClient,private movieService: MoviesService) { }

  ngOnInit(): void {
    this.getTopRatedMovies(1);
  }

getTopRatedMovies(page: number) {
  this.movieService.getTopRatedMovies(page).pipe(delay(2000)).subscribe((res: any) => {
    this.topRated = res.results;
    console.log(res.results);
  },
  error => console.log(error));
}
}
