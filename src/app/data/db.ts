import Dexie, { Table } from 'dexie';

export interface IUserStory {
  id: string;
  name: string;
}

export class AppDB extends Dexie {
  userStories!: Table<IUserStory, string>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(3).stores({
      userStories: 'id, name'
    });
  }
}

export const db = new AppDB();
