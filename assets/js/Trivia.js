const contenedor = document.getElementById("trivia");
const botonrespuesta = document.getElementById("button");
const resultadotrivia = document.getElementById("resultado");

const preguntas = [
    {
      pregunta: "1. 'No es tan difícil hacer dinero cuando es solo hacer dinero lo que se pretende'. ¿A qué película corresponde esta frase?",
      respuestas: {
        a: "El lobo de Wall Street",
        b: "Ciudadano Kane",
        c: "El color del dinero"
      },
      respuestacorrecta: "b"
    },
    {
      pregunta: "2. Los dinosaurios se pusieron de moda gracias a esta película",
      respuestas: {
        a: "Godzilla",
        b: "King Kong",
        c: "Jurassic Park"
      },
      respuestacorrecta: "c"
    },
    {
      pregunta: "3. El modelo T-800 conforma uno de los robots más famosos de la historia de la ciencia ficción. Aparece en...",
      respuestas: {
        a: "Yo, Robot",
        b: "Robocop",
        c: "Terminator"
      },
      respuestacorrecta: "c"
    },
    {
      pregunta: "4. Nunca un animal tuvo tanto protagonismo. Se estrenó en 1975 y la banda sonora de John Williams le valió incluso un Óscar",
      respuestas: {
        a: "Tiburón",
        b: "Anaconda",
        c: "Piraña"
      },
      respuestacorrecta: "a"
    },
    {
        pregunta: "5. 'Un anillo para gobernarlos a todos. Un anillo para encontrarlos, para atraerlos a todos y atarlos en las tinieblas'. ¿A qué famosa película pertenece esta frase?",
        respuestas: {
            a: "La Torre Oscura",
            b: "El laberinto del Fauno",
            c: "El Señor de los Anillos"
      },
      respuestacorrecta: "c"
    },
    {
      pregunta: "6. ¿Quién fue el primer actor en interpretar al Guasón, del universo de DC Comics?",
      respuestas: {
        a: "Jack Nicholson",
        b: "Heath Ledger",
        c: "Cesar Romero"
      },
      respuestacorrecta: "c"
    },
    {
      pregunta: "7. ¿Cuántas peliculas tiene la saga de Actividad Paranormal hasta la fecha?",
      respuestas: {
        a: "8",
        b: "6",
        c: "4"
      },
      respuestacorrecta: "b"
    },
    {
      pregunta: "8. ¿Cuál de estas películas de Marvel se estrenó primero?",
      respuestas: {
        a: "Iron man",
        b: "Spiderman 3",
        c: "Capitán América: El rimer vengador"
      },
      respuestacorrecta: "b"
    },
    {
      pregunta: "9. ¿Cuál fue la única película a color dirigida por Charlie Chaplin?",
      respuestas: {
        a: "La condesa de Hong Kong",
        b: "Un rey en Nueva York",
        c: "Candilejas"
      },
      respuestacorrecta: "a"
    },
    {
      pregunta: "10. Will Smith protagoniza muchas películas. ¿Cuál de las siguientes se estrenó primero?",
      respuestas: {
        a: "Soy leyenda",
        b: "Hombres de Negro",
        c: "En busca de la felicidad"
      },
      respuestacorrecta: "b"
    }
];

function mostrarTrivia(){
    const preguntasyrespuestas = [];

    preguntas.forEach((preguntaactual, numerodepregunta) => {
        const respuestas = [];
        for(letraderespuesta in preguntaactual.respuestas){
            respuestas.push(
                `
                    <br><label>
                        <input type="radio" name="${numerodepregunta}" value="${letraderespuesta}">
                        ${letraderespuesta} : ${preguntaactual.respuestas[letraderespuesta]}
                    </label><br>
                `
            );
        }
        preguntasyrespuestas.push(
            `
                <br><br><br>
                <div class="cuestion"> ${preguntaactual.pregunta}</div>
                <div class="respuestas"> ${respuestas.join('')}</div>
            `
        )
    })

    contenedor.innerHTML = preguntasyrespuestas.join('');
}

mostrarTrivia();

function mostrarresultado() {
    const respuestas = contenedor.querySelectorAll(".respuestas");
    let respuestascorrectas = 0;

    preguntas.forEach((preguntaactual, numerodepregunta) => {
        const todaslasrespuestas = respuestas[numerodepregunta];
        const checkboxrespuestas = `input[name='${numerodepregunta}']:checked`;
        const respuestaelegida = (todaslasrespuestas.querySelector(checkboxrespuestas) || {}).value;

        if (respuestaelegida == preguntaactual.respuestacorrecta) {
            respuestascorrectas++;
        }
    });

    resultadotrivia.innerHTML = '<br><h1>Respondiste correctamente ' + respuestascorrectas + ' de ' + preguntas.length + ' preguntas</h1>';
}


botonrespuesta.addEventListener('click', mostrarresultado); 
