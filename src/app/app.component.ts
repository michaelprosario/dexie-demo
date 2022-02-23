import { Component } from '@angular/core';
import { UserStory } from './core/entity/user-story';
import { UserStoriesService } from './core/services/user-stories-service';
import { IUserStory } from './data/db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dexie-demo';

  constructor(private userStoriesService: UserStoriesService){
    
  }

  async onAdd() {
    var aRecord = new UserStory();
    aRecord.complexity = 3;
    aRecord.doneConditions = "done conditions";
    aRecord.name = "foo";
    aRecord.priority = 1;

    var response = await this.userStoriesService.add(aRecord);
    console.log(response);
  }

  async onGet() {
    let aRecord = new UserStory();
    aRecord.complexity = 3;
    aRecord.doneConditions = "done conditions";
    aRecord.name = "testing 123";
    aRecord.priority = 1;

    let response = await this.userStoriesService.add(aRecord);
    console.log(response);
    let id: string = response.id;

    let aRecord2: UserStory = await this.userStoriesService.get(response.id)
    console.log(aRecord2);
  }

  async getRecordsByName(){
    const name = "foo";
    let recordSet: Array<IUserStory> = await this.userStoriesService.getRecordsByName(name); 
    console.log(recordSet);   
  }

  async getAll(){
    let recordSet: Array<IUserStory> = await this.userStoriesService.getAll(); 
    console.log(recordSet);   
  }

}
