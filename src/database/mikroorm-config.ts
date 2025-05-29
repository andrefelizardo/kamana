import { PostgreSqlDriver } from '@mikro-orm/postgresql';

const MikroOrmConfig = {
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  dbName: process.env.DB_NAME || 'my_database',
  driver: PostgreSqlDriver,
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
};

export default MikroOrmConfig;
