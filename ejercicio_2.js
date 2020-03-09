let cadena = "hola, que buena ola Laomir";
let indices = [];

for(let i = 0; i < cadena.length; i++) {
	if (cadena[i].toLowerCase() == "a") indices.push(i);
}

console.log(indices.length);