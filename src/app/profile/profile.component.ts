import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profiles: any;
  repos: any;
  username:string;
  constructor(private profileService: ProfileService) {


  }
  findProfiles(username){
  	this.profileService.updateProfile(username);
  	// tslint:disable-next-line: indent
  	// tslint:disable-next-line: indent
  	this.profileService.getProfileInfo(username).subscribe(profile => {
  		console.log(profile);
  		// tslint:disable-next-line: indent
  		this.profiles = profile;
  	// tslint:disable-next-line: indent
  	});

  	this.profileService.getProfileRepos(username).subscribe(repos => {
  		console.log(repos);
  		this.repos = repos;
  	})
  }

  ngOnInit(): void {
	  this.findProfiles("Denniskipkirui")
  }

}
