import express from "express"; // Importa el framework Express para crear el servidor
import cors from "cors"; // Importa el módulo CORS para permitir peticiones entre dominios
import router from "./src/router.js"; // Importa el archivo de enrutamiento para manejar las rutas

const app = express(); // Crea una instancia de la aplicación Express

// Middleware
app.use(cors()); // Habilita el uso de CORS para permitir solicitudes desde diferentes orígenes
app.use(express.json()); // Permite que el servidor reciba datos en formato JSON en las solicitudes
app.use(express.urlencoded({ extended: true })); // Permite recibir datos codificados desde formularios HTML
app.use("/public", express.static("public")); // Sirve archivos estáticos (CSS, imágenes, JS) desde la carpeta "public"

// Configuración del motor de plantillas
app.set("view engine", "ejs"); // Establece EJS como motor de plantillas para renderizar vistas dinámicas
app.set("views", "./views"); // Define el directorio donde se almacenan las vistas (archivos .ejs)

// Ruta para cargar la página de inicio
app.get("/", (req, res) => {
    res.render("home", {}); // Renderiza la vista "home.ejs" y le pasa un objeto vacío como datos
});

// Usa el enrutador externo para manejar las rutas relacionadas con estudiantes
app.use("/", router); // Todas las rutas definidas en "router.js" serán accesibles desde la raíz del sitio

// Inicia el servidor en el puerto especificado
const PORT = process.env.PORT || 3000; // Usa el puerto definido en las variables de entorno o el puerto 3600 por defecto
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://127.0.0.1:${PORT}`); // Muestra en la consola el puerto en el que el servidor está corriendo
});
