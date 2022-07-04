import { Courses } from "./cursos.mjs";
import { LearningPaths } from "./escuelas.mjs";
import { FreeStudent } from "./students.mjs";
import { BasicStudent } from "./students.mjs";
import { Teacher } from "./teachers.mjs";




//Creando Teachers
const freddyVega = new Teacher({
    name : "Freddy Vega",
    speciality : "CEO"
});

const juanCastro = new Teacher ({
    name : "Juan Castro Gallego",
    speciality : "Computer Science"
});

 //Creando cursos
 const cursoProgBásica = new Courses({
  
    name : "Curso de programación Básica",
    classes : [],
    teacher : freddyVega,
    isFree : true,
    Lang : "spanish"
});


const cursoDefinitivoHTML = new Courses({
  
    name : "Curso Definitivo HTML",
    classes : [],
    teacher : juanCastro,
    Lang : "english"
});

const cursoPrácticoHTML = new Courses({
  
    name : "Curso Práctico HTML",
    classes : [],
});
const cursoBásicoPython = new Courses({
  
    name : "Curso Básico Python",
    classes : [],
});
const cursoPrácticoPython = new Courses({
  
    name : "Curso Práctico Python",
    classes : [],
});
const cursoStartups = new Courses({
  
    name : "Curso de Startups",
    classes : [],
});


// Creando Escuelas
const desarrolloWeb = new LearningPaths({
    name :"Escuela Web",
    courses : [
        cursoDefinitivoHTML,
        cursoDefinitivoHTML,
        cursoProgBásica]
});

const dataScience = new LearningPaths({
    name :"Escuela Data",
    courses : [
        cursoBásicoPython,
        cursoPrácticoPython,
        cursoProgBásica]
});
const escuelaStartups = new LearningPaths({
    name :"Startup",
    courses : [
        cursoStartups,
        cursoProgBásica]
});

//Creando Estudiantes 
const miguelito = new FreeStudent({
    name : "Miguel",
    email : "miguelito@gmail.com",
    username : "miguelito12",
    twitter : "miguelito12",
    learningPaths :[desarrolloWeb,dataScience]
});

const juanito = new BasicStudent({
    name : "Juanito12",
    email : "juanito123@gmail.com",
    username : "juanito1212",
    twitter : "juanito1212",
});

console.log(miguelito)
console.log(juanito)