import { Router } from "express";
import { MessagesController } from "./Controllers/MessagesController";
import { SettingsController } from "./Controllers/SettingsController";
import { UsersController } from "./Controllers/UsersControllers";


/**
 * Tipos de parametros
 * Routes Parms => Parametros de rotas
 * http://localhost:3333/settings/1
 * Query Params => Filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * 
 * Body params => {
 * json
 * }
 * 
 */

const routes = Router();
const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser)

export { routes };