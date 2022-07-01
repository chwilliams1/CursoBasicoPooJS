/*
class natalia{
    constructor(){

    }

}
*/
/*
//CREANDO UN OBJETO LITERAL DE UN ESTUDIANTE
const natalia ={
    //Creando Atributos
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS"
    ],
    //Creando Metodos
    aprobarCurso(nuevoCursito){
    //Hacer que natalia(this) aprueba otro curso, entrando al atributo
        this.cursosAprobados.push(nuevoCursito);
    }
};

*/


//Creando un PROTOTIPO DE ESTUDIANTES
/*
function Students(name,age,cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
};
Students.prototype.aprobarCurso = function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
};
*/


//Prototipos  con la sintaxis de clases
/*
class Students{
    constructor({
        name,
        age,
        cursosAprobados = [],
        email,
    }){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email;
        }
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
        console.log(this.cursosAprobados);
    };
}
const juanita = new Students({
    name : "Juanita",
    email : "juanita@platzi.com",
    age : 20,
    
});

const rodrigo = new Students({name :"Rodrigo" , email : "rodgrigo@gmail.com" , age : 20});

*/