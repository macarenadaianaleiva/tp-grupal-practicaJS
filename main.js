// 1. Calcular el área de un rectángulo
function calcularAreaRectangulo(ancho, alto) {
  return ancho * alto;
}

console.log("////////// Solución 1 //////////");
console.log(calcularAreaRectangulo(5, 3)); // 15
console.log(calcularAreaRectangulo(7, 2)); // 14
console.log(calcularAreaRectangulo(10, 10)); // 100

/*
Pensamos esta función como una fórmula matemática simple: área = ancho * alto.
Solo necesitábamos retornar ese valor y probar con 3 ejemplos distintos.
*/

// 2. Contar palabras en una cadena
function contarPalabras(cadena) {
  return cadena.trim().split(/\s+/).length;
}

console.log("\n////////// Solución 2 //////////");
console.log(contarPalabras("Humahuaca es un lugar copado")); // 5
console.log(contarPalabras("Hola mundo")); // 2
console.log(contarPalabras("   Espacios    extra   ")); // 2

/*
Usamos `split()` con una expresión regular que separa por espacios múltiples
y `trim()` para eliminar espacios al inicio y fin. Así nos aseguramos contar solo palabras.
*/

// 3. Contar vocales en una cadena
function contarVocales(texto) {
  const coincidencias = texto.match(/[aeiouáéíóú]/gi);
  return coincidencias ? coincidencias.length : 0;
}

console.log("\n////////// Solución 3 //////////");
console.log(contarVocales("JavaScript")); // 3
console.log(contarVocales("Hola Mundo")); // 4
console.log(contarVocales("CSS")); // 0

/*
Usamos una expresión regular que busca todas las vocales, incluyendo acentos,
sin importar mayúsculas. match() nos devuelve un array de coincidencias.
*/

// 4. Encontrar el palíndromo
function esPalindromo(palabra) {
  const normalizado = palabra.toLowerCase();
  const invertido = normalizado.split("").reverse().join("");
  return normalizado === invertido;
}

console.log("\n////////// Solución 4 //////////");
console.log(esPalindromo("neuquen")); // true
console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("hola")); // false

/*
Comparamos la palabra original con su versión invertida.
Si son iguales (ignorando mayúsculas), es un palíndromo.
*/

// 5. Edad de perro en años humanos
function edadCanina() {
  const edad = prompt("¿Cuántos años tiene tu perro?");
  const edadHumana = parseInt(edad) * 7;
  console.log(`Tu perro tiene ${edadHumana} años humanos`);
}

console.log("\n////////// Solución 5 //////////");
// Ejecutar la función manualmente para probarla
// edadCanina();

/*
Usamos `prompt` para capturar la entrada del usuario y multiplicamos por 7.
No se retorna nada, solo se imprime el resultado.
*/

// 6. Capitalizar palabras
function capitalizarPalabras(frase) {
  return frase
    .split(" ")
    .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(" ");
}

console.log("\n////////// Solución 6 //////////");
console.log(capitalizarPalabras("hola mundo desde javascript"));
console.log(capitalizarPalabras("esto es una prueba"));
console.log(capitalizarPalabras("otro ejemplo más"));

/*
Separamos por espacios, capitalizamos cada palabra y unimos de nuevo.
Usamos `map()` para transformar cada palabra individualmente.
*/

// 7. Fibonacci
function fibonacci(n) {
  const serie = [0, 1];
  for (let i = 2; i < n; i++) {
    serie.push(serie[i - 1] + serie[i - 2]);
  }
  return serie.slice(0, n);
}

console.log("\n////////// Solución 7 //////////");
console.log(fibonacci(5)); // [0,1,1,2,3]
console.log(fibonacci(8)); // [0,1,1,2,3,5,8,13]
console.log(fibonacci(1)); // [0]

/*
Creamos un array base con 0 y 1, y lo completamos hasta llegar a n elementos,
usando el patrón de suma de los dos anteriores.
*/

// 8. Lista de Productos
const productos = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 1200,
    stock: 15,
    categoria: "electrónica",
  },
  { id: 2, nombre: "Mouse", precio: 25, stock: 50, categoria: "electrónica" },
  { id: 3, nombre: "Teclado", precio: 45, stock: 30, categoria: "electrónica" },
  {
    id: 4,
    nombre: "Monitor",
    precio: 300,
    stock: 20,
    categoria: "electrónica",
  },
  { id: 5, nombre: "Libro", precio: 15, stock: 100, categoria: "libros" },
];

console.log("\n////////// Solución 8 //////////");
// 1. forEach
productos.forEach((p) => console.log(`${p.nombre}: $${p.precio}`));

// 2. map
const nombresProductos = productos.map((p) => p.nombre);
console.log("Nombres:", nombresProductos);

// 3. filter
const stockMayor20 = productos.filter(
  (p) => p.categoria === "electrónica" && p.stock > 20
);
console.log("Electrónicos con stock > 20:", stockMayor20);

// 4. find
const productoID3 = productos.find((p) => p.id === 3);
console.log("Producto con ID 3:", productoID3);

// 5. reduce
const valorInventario = productos.reduce(
  (acc, p) => acc + p.precio * p.stock,
  0
);
console.log("Valor total inventario:", valorInventario);

/*
Usamos métodos de alto orden como forEach, map, filter, find y reduce para analizar la lista.
Es una excelente práctica para trabajar con arrays de objetos.
*/

// 9. Estudiantes y Calificaciones
const estudiantes = [
  { id: 1, nombre: "Ana", edad: 20, calificaciones: [8, 9, 7, 8] },
  { id: 2, nombre: "Carlos", edad: 22, calificaciones: [6, 7, 8, 7] },
  { id: 3, nombre: "María", edad: 21, calificaciones: [9, 9, 8, 10] },
  { id: 4, nombre: "Juan", edad: 19, calificaciones: [7, 6, 5, 8] },
];

console.log("\n////////// Solución 9 //////////");
// 1. forEach
estudiantes.forEach((e) => console.log(`${e.nombre} tiene ${e.edad} años`));

// 2. map
const promedios = estudiantes.map((e) => ({
  nombre: e.nombre,
  promedio:
    e.calificaciones.reduce((a, b) => a + b, 0) / e.calificaciones.length,
}));
console.log("Promedios:", promedios);

// 3. filter
const mejores = promedios.filter((e) => e.promedio > 7.5);
console.log("Promedio > 7.5:", mejores);

// 4. find
const maria = estudiantes.find((e) => e.nombre === "María");
console.log("María:", maria);

// 5. reduce
const edadPromedio =
  estudiantes.reduce((acc, e) => acc + e.edad, 0) / estudiantes.length;
console.log("Edad promedio:", edadPromedio);

/*
Reutilizamos lógica de promedios en map y filter.
Con reduce obtenemos la media de edad y usamos find para buscar un nombre puntual.
*/

// 10. Películas
const peliculas = [
  {
    id: 1,
    titulo: "El Padrino",
    año: 1972,
    duracion: 175,
    genero: "drama",
    rating: 9.2,
  },
  {
    id: 2,
    titulo: "Pulp Fiction",
    año: 1994,
    duracion: 154,
    genero: "crimen",
    rating: 8.9,
  },
  {
    id: 3,
    titulo: "El Señor de los Anillos",
    año: 2001,
    duracion: 178,
    genero: "fantasía",
    rating: 8.8,
  },
  {
    id: 4,
    titulo: "Interestelar",
    año: 2014,
    duracion: 169,
    genero: "ciencia ficción",
    rating: 8.6,
  },
  {
    id: 5,
    titulo: "Parásitos",
    año: 2019,
    duracion: 132,
    genero: "drama",
    rating: 8.6,
  },
];

console.log("\n////////// Solución 10 //////////");
// 1. forEach
peliculas.forEach((p) => console.log(`${p.titulo} - ${p.año}`));

// 2. map
const titulosMayus = peliculas.map((p) => p.titulo.toUpperCase());
console.log("Títulos en mayúsculas:", titulosMayus);

// 3. filter
const dramas = peliculas.filter((p) => p.genero === "drama" && p.rating > 8.5);
console.log("Dramas con buen rating:", dramas);

// 4. find
const peli2014 = peliculas.find((p) => p.año === 2014);
console.log("Película del 2014:", peli2014);

// 5. reduce
const duracionTotal = peliculas.reduce((acc, p) => acc + p.duracion, 0);
console.log("Duración total:", duracionTotal);

/*
Ejercitamos todos los métodos de arrays con ejemplos reales como películas.
Ideal para reforzar el manejo de arrays complejos.
*/
