const express = require ("express");
const path =require("path");
const hbs = require("hbs");
const PORT = process.env.PORT || 3000;
const app = express();
//----------------------------------------------------------
const routeIndex = require ("./routes/index");
const routeHome = require ("./routes/home");
const routeNosotros= require ("./routes/nosotros.js");
const routeMountain = require ("./routes/mountain");
const routeAc = require ("./routes/ac");
const routeClientes =require ("./routes/clientes");
const routeContacto = require ("./routes/contacto");
const routeTaller =require ("./routes/taller");
const routeLogin =require("./routes/login");
const routeUrbana =require("./routes/urbana");
//----------------------------------------------------------
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}));
//----------------------------------------------------------
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "./views/partials"));
//----------------------------------------------------------
app.use("/", routeIndex);
app.use("/home", routeHome);
app.use("/nosotros", routeNosotros);
app.use("/mountain", routeMountain);
app.use("/ac", routeAc);
app.use("/clientes", routeClientes);
app.use("/contacto", routeContacto);
app.use("/taller", routeTaller);
app.use("/login", routeLogin);
app.use("/urbana", routeUrbana);
//-----------------------------------------------------------



app.listen(process.env.PORT,(err)=>{
    err
    ?console.log("servidor no funciona")
    : console.log(`]Servidor corriendo en http://localhost:${PORT}/`);
});
