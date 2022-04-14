import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute} from '@angular/router';
import { UserService } from '../users.service';




@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers:[UserService]
})
export class LogInComponent implements OnInit {
  users:{email:string, password:any}[]=[];
  constructor(private router: Router, private userservice:UserService,
    private route: ActivatedRoute){ }

  ngOnInit(): void {
   this.users=this.userservice.users;
  }


  OnSubmit(form:NgForm){
  if(form.value.email == this.users[0].email && form.value.password == this.users[0].password ){
    this.userservice.login(); 
    ///console.log('kiko');
    this.router.navigate(["/catalog"], {relativeTo: this.route});
     //console.log('ssss');
    
   }

  }

}
