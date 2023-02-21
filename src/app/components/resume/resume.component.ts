import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit{
  resume: any;
  activeResume: boolean = false;
  constructor(private router: ActivatedRoute){
  }

  ngOnInit(){
    this.router.queryParams.subscribe(params => {
      this.resume = params['/resume']
      this.activeResume = true;
    })
  }


}
