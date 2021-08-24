import { DatabaseService } from "./db.service";

export class PostService {

  constructor(private dbService: DatabaseService) { }

  // async createPost(title: any, text: any) {

  //   const result = await this.dbService.query('INSERT INTO quote(quote, author) VALUES ($1, $2) RETURNING *', [text.quote, text.author]);
  //   return null;
  // }
}