import { Component, OnInit } from '@angular/core';
import { IMovieModel } from '../../services/movies';
import { MoviesService } from '../../services/movies.service';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { MovieCardComponent } from '../movie-card/movie-card.component';


@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatListModule, MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  dataSource: IMovieModel[] = [];

  constructor(private moviesService: MoviesService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    // get data from the server
    this.moviesService.getAll().subscribe(res => this.dataSource = res.results);
  }

  // deleteHandler(id: number): void {
  //   this.openDeleteDialog().afterClosed().subscribe(res => {
  //     if (res === true) this.productsService.delete(id);
  //   });
  // }

  // editHandler(id: number): void {
  //   this.router.navigate(['/edit-product', id]);
  // }

  // openDeleteDialog() {
  //   return this.dialog.open(RemoveProductDialogComponent)
  // }
}
