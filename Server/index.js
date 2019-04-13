const express = require("express");
const app = express();
const PORT = 3100;//require("./config");

require("../routes/views")(app);
require("../routes/api")(app);

function init(){
    console.log("Iniciando instancia de Express...");
    app.listen(PORT, () =>{
        console.log("El servidor Express esta activo.");
    })
}



// app.listen(PORT, function () {
// console.log(`Server running at port ${PORT}`);
// });
init();