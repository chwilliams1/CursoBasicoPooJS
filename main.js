class Comment{
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    })
    {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.like = 0;
    }
    publicar(){
        console.log(this.studentName + " (" + this.studentRole + ") ");
        console.log(this.like+" likes")
        console.log(this.content)
        //Miguelito (Estudiante)
        // 0 likes
        //comentaario
    }
}

function videoPlay(id){
    const urlSecreta = "https://platziultrasecreto.com/"+ id;
    console.log("Se está reproduciendo desde la url: "+ urlSecreta);
}

function videoStop(id){
    const urlSecreta = "https://platziultrasecreto.com/"+ id;
    console.log("Pausamos la url: "+ urlSecreta);
};

class PlatziClass{
    constructor({
        name,
        videoID,

    })
    {
        this.name = name;
        this.videoID = videoID;
    }
    reproducir(){
        videoPlay(this.videoID);

    }
    pausar(){
        videoStop(this.videoID);
    }
}





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
        isFree = false,
        lang = "spanish"
    })
    {
        this._name = name;
        this._classes = classes;
        this.teacher = teacher;
        this.isFree = isFree;
        this.lang = lang;

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
    get classes(){
        return this._classess;
    }
    set classes(nuevaClase){
        if (nuevaClase === ""){
            console.log("Introduzca un nombre para la nueva clase");
        
        }else{
            this._classes.push(nuevaClase);
        }
    }
};




 //Creando cursos
 const cursoProgBásica = new Courses({
  
    name : "Curso de programación Básica",
    classes : [],
    teacher : freddyVega,
    isFree : true,
});


const cursoDefinitivoHTML = new Courses({
  
    name : "Curso Definitivo HTML",
    classes : [],
    teacher : juanCastro,
    lang : "english"
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
        publicarComentario(commentContent){
            const comment = new Comment({
                content : commentContent,
                studentName : this.name,
            });
        comment.publicar();
        }
};  

class FreeStudent extends Student{
    constructor(props){
        super(props);
    }
       approveCourse(newCourse){
        if (newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }
        else{
            console.warn("Lo siento "+ this.name +", solo puedes tomar cursos abiertos")
        }
       };
}
class BasicStudent extends Student{
    constructor(props){
        super(props);
    }
       approveCourse(newCourse){
        if (newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        }
        else{
            console.warn("Lo siento "+ this.name +", solo puedes tomar cursos en español")
        }
       }
}
class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }
       approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
       }
};

class TeacherStudent extends Student{
    constructor(props){
        super(props);
    }
       approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
       }
       publicarComentario(commentContent){
        const comment = new Comment({
            content : commentContent,
            studentName : this.name,
            studentRole :"profesor",
        });
    comment.publicar();
    }   

};



//Creando Estudiantes 
const miguelito = new BasicStudent({
    name : "Miguel",
    email : "miguelito@gmail.com",
    username : "miguelito12",
    twitter : "miguelito12",
    learningPaths :[desarrolloWeb,dataScience]
});

const juanito = new FreeStudent({
    name : "Juan",
    email : "juanito2@gmail.com",
    username : "juanito122",
    twitter : "juanitolito122",
});

const Freddy = new TeacherStudent({
    name : "Freddy Vega",
    email : "Freddyplatzi@gmail.com",
    username : "fredier",
    twitter : "fredier",
});






