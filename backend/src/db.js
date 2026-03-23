import pg from 'pg'
import { db } from "./config.js";

export const pool = new pg.Pool({
  user: db.user,
  password: db.password,
  host: db.host,
  port: db.port,
  database: db.database,
  ssl: process.env.DB_SSL === "false" ? false : { rejectUnauthorized: false },
});

