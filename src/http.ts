import express, { request } from "express";
import {createServer} from "http";
import {Server, Socket} from "socket.io"
import "./DataBase";
import {routes} from "./routes";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "..","public")));
app.set("views",path.join(__dirname, "..","public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/client", (request, response)=> {
    return response.render("html/client.html")
});
app.get("/admin", (request, response)=> {
    return response.render("html/admin.html")
});


const http = createServer(app); // Criando protocolo http
const io = new Server(http); // Criando protocolo ws

io.on(("connection"), (socket: Socket)=>{ 
    console.log("se Conectou", socket.id)
});

app.use(express.json());
app.use(routes);

export {http, io};