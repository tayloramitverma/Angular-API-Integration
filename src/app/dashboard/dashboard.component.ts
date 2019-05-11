import { Component, OnInit } from '@angular/core';

import { MydataserviceService } from '../mydataservice.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MydataserviceService]
})

export class DashboardComponent implements OnInit {

	blogs: any = [];
  	page: number = 1;
  	tBlogs: number = 9;
	constructor(private service: MydataserviceService) { }

	ngOnInit() {
    	this.getBlogs();
	}

	onSuccess(res) {
    //console.log(res);
	    if (res != undefined) {
	      this.blogs = this.blogs.concat(res);
	    }
	}

	onScroll()
	{
	    //console.log("Scrolled");
	    this.page = this.page + 1;
	    if(this.page <= this.tBlogs){
	    	this.getBlogs();
	    }else{
	    	console.log("finished");
	    	return false;
	    }
	    
	}

	getBlogs() {
    	
    	this.service.getMyBlogs(this.page).subscribe((res) => {
    		this.onSuccess(res)
    	});
	}

}



