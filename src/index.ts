import express, { NextFunction, Express, Application, Request, Response } from "express"
import path from "path";
import * as http from "http"
import { RouteConfig } from "./common/route.config"
import { UserRoutes } from "./routes/user.routes"
import cors from 'cors'
import { intializeDB } from './db';
import dotenv from "dotenv";
import { Http } from '@status/codes';
import logger from './shared/Logger';
import morgan from 'morgan';


// typeorm import
import "reflect-metadata";


// initialize configuration
dotenv.config();

const app: Express = express()

const env = process.env;

const routes: RouteConfig[] = []

const PORT = env.SERVER_PORT;


app.use(morgan('dev'));
intializeDB();
app.use(express.json())
app.use(cors())
// port is now available to the Node.js runtime
// as if it were an environment variable

const router = express.Router();

if (process.env.DEBUG) {
  // process.on("unhandledRejection", function(reason) {
  //   process.exit(1)
  // })
} else {
  // tslint:disable-next-line: no-console
  console.log('debug disabled');
}
/**
 * Rotas da Aplicação
 */
routes.push(new UserRoutes(app))

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.json({ message: 'Working Hard!' });
});


// const server: http.Server = http.createServer(app)
// server.listen(PORT, () => {
//   // tslint:disable-next-line: no-console
//   console.log(`Server is running on ${PORT}`)
// });

routes.forEach((route: RouteConfig) => {
  // tslint:disable-next-line: no-console
  console.log(`Routes configured for ${route.getName()}`)
});
/// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message, err);
  return res.status(Http.BadRequest).json({
    error: err.message,
  });
});
