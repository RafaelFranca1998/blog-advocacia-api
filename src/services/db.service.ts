import Pool from 'pg';

export class DatabaseService {
  /**
   * Query the database using the pool
   * @param {*} sql
   * @param {*} params
   *
   * @see https://node-postgres.com/features/pooling#single-query
   */
  async query(sql: any, params: any) {

    const pool = new Pool.Client(process.env.db);

    const { rows, fields } = await pool.query(sql, params);

    return rows;
  }

}