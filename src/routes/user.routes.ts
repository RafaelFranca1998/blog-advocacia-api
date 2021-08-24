import { RouteConfig } from "../common/route.config"
import express, { Application, Request, Response } from "express"
import UserController from "../controller/user.controller"
export class UserRoutes extends RouteConfig {
  constructor(app: Application) {
    super(app, "UserRoutes")
  }
  configureRoutes() {
    this.app.route(`/users`).get([UserController.getUsers]);

    this.app.route(`/users`).post([UserController.save]);

    this.app.route('/all').get([UserController.getAll]);

    return this.app
  }
}