//Prototipo Teacher
class Teacher{
    constructor({
        name,
        speciality,
    })
    {
    this.name = name;
    this.speciality = speciality;
}};


//Creando Teachers
const freddyVega = new Teacher({
    name : "Freddy Vega",
    speciality : "CEO"
});

const juanCastro = new Teacher ({
    name : "Juan Castro Gallego",
    speciality : "Computer Science"
});



//Prototipo Cursos
class Courses{
    constructor({
        name,
        classes = [],
        teacher,
    })
    {
        this._name = name;
        this.classes = classes;
        this.teacher = teacher
}
    get name(){
        return this._name;
    }

    set name(nuevoNombrecito){
        if (nuevoNombrecito === "Curso Malito de Programación Básica"){
            console.error("NO LO HAGAS ")
        }
        else {
        this._name = nuevoNombrecito;
        }
    }
};



 //Creando cursos
 const cursoProgBásica = new Courses({
  
    name : "Curso de programación Básica",
    classes : [],
    teacher : freddyVega,
});


const cursoDefinitivoHTML = new Courses({
  
    name : "Curso Definitivo HTML",
    classes : [],
    teacher : juanCastro,
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


//Prototipo Rutas de aprendizaje
class LearningPaths{
    constructor({
        name,
        courses = [],
    })
    {
        this.name = name;
        this.courses = courses;
    };
};


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




//Prototipo estudiantes
class Student{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],

    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
        };
};  


//Creando Estudiantes 
const miguelito = new Student({
    name : "Miguel",
    email : "miguelito@gmail.com",
    username : "miguelito12",
    twitter : "miguelito12",
    learningPaths :[desarrolloWeb,dataScience]
});

const miguelito2 = new Student({
    name : "Miguel2",
    email : "miguelito2@gmail.com",
    username : "miguelito122",
    twitter : "miguelito122",
});










