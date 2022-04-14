import { TestBed , async} from "@angular/core/testing";
import { CatalogComponent } from "./catalog.component";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { MoviesService } from "src/app/movies.service";
import { LogInComponent } from "src/app/log-in/log-in.component";
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from "rxjs";
describe ('component:Catalog',()=>{
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule,RouterTestingModule ],
            declarations:[CatalogComponent]
        });
    })
    it ('given an instance',()=>{
        let fixture =TestBed.createComponent(CatalogComponent);
        let app =fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    })
   
});