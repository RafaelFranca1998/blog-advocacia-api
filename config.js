const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'chunee.db.elephantsql.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'reybrenb',
    password: env.DB_PASSWORD || 'vpw1DLO20gv2JDhWHvZsiZfANUjSbmDS',
    database: env.DB_NAME || 'reybrenb',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;