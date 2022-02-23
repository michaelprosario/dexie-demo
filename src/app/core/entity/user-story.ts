import { IUserStory } from "src/app/data/db";
export class UserStory implements IUserStory
{
    id: string = '';
    name: string  = '';
    doneConditions: string = '';
    priority: number = 1;
    complexity: number = 1;
}