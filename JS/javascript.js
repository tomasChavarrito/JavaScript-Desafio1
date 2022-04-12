let entrada = prompt("Hola internuta ¿queres probar mi código? Responde si o no")
if (entrada.toLowerCase() == "si") {
    let questions = parseInt(prompt("GOOOD, ¿que queres probar primero?\n" + "1: Encuesta\n" + "2. Ciclo\n" + "3. Bucle"));
if (questions == 1) {
    //ENCUESTA
    alert("Elegiste: Encuesta\n" + "Acá te van unas preguntas."); 
    let name = prompt("¿Cómo es tu nombre?");
    let lastname = prompt("¿Apellido?");
    alert("Que nombre aburrido");
    alert("Naa, ta fachero");
    let years = parseInt(prompt("¿Cuántos años tenes?"));
    let age = parseInt(years);
    let year = 2022;
    let birth = year - (age);
    //Código para intentar sacar la fecha de nacimiento de una persona (No funciona perfectamente)
    let exit = prompt("Hola " + name + " " + lastname + ", " + "al parecer naciste en "+ birth + ". ¿Verdad?"); 
    if (exit.toLowerCase() == "si") {
        alert("El humano que me programo es un capo");
    } else {
        alert("Uh, el humano que me programo no sabe de programación, no " + name + "?");
    }
} else if (questions == 2) {
    //CICLO
    alert("Elegiste: Ciclo\n" + "Seguí las instrucciones."); 
    let texto = prompt("Escribí un texto.");
    let repeticiones = parseInt(prompt("Ingrese la cantidad de veces que quiera que se repita el texto."));
    for (let i = 1; i <= repeticiones; i ++ ){
        document.write(i + "- " + texto + "</br>");
    }
} else if (questions == 3) {
    //BUCLE
    alert("Elegiste: Bucle\n" + "Seguí las instrucciones");
    let numero = 0;
    let bucle = parseInt(prompt("¿Hasta qué número queres que cuente?"));
    while (numero < bucle) {
        numero++;
        document.write(numero + "<br>");
        if (numero == bucle) {
            break;
        }
    }
}
}
else {
    alert("Excelenten't");
}