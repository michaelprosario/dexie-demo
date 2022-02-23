import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { UserStory } from '../entity/user-story';
import { db } from '../../data/db';

@Injectable({
  providedIn: 'root',
})
export class UserStoriesService
{
   async getAll() 
   {
    return await db.userStories.toArray();
  }
  async getRecordsByName(keyword: string) {
    return await db.userStories.where({ name: keyword }).toArray();
  }
  async get(recordId: string): Promise<UserStory>  
  {
    let recordSet = await db.userStories.where({ id: recordId }).toArray();
    if(recordSet && recordSet.length >= 1)
    {
        return recordSet[0] as unknown as UserStory;
    }
    else
    {
        throw new Error("error returning data for " + recordId);
    }
  }

  constructor() {

  }    

  async add(record: UserStory) 
  {
      // make sure to assign an id ...
      record.id = Guid.create().toString();

      // do validation ...

      // store it ....
      await db.userStories.add(record);

      return {
          result: 'ok', message: 'record added', id: record.id
      }
  }

}