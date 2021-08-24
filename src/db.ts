import "reflect-metadata";
import {createConnection} from "typeorm";
// import { Tedis } from "tedis";
import logger from '../src/shared/Logger';
export async function intializeDB(): Promise<void> {
  await createConnection();
  logger.info('Database successfully initialized');
}