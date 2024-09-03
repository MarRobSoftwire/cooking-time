import { Connection, createConnection } from "mysql";

export const connection: Connection = createConnection({
  user     : 'root',
  password : 'pswd',
  database : 'mysql'
});
