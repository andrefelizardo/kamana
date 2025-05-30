import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import * as path from 'path';
import { config } from 'dotenv';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
config(); // Load environment variables from .env file

const MikroOrmConfig = {
  autoLoadEntities: true,
  entities: ['./dist/**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],
  dbName: process.env.DB_NAME || 'my_database',
  driver: PostgreSqlDriver,
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  migrations: {
    path: path.resolve(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
};

export default MikroOrmConfig;
