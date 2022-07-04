

//Prototipo estudiantes
export class Student{
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



export class FreeStudent extends Student{
    constructor(props){
        super(props)
    }
    approvedCourses(newCourse) {
        if (newCourse.isfree){
            this.approvedCourses.push(newCourse);
        }
        else{
            console.warn("Lo sentimos "+this.name+", solo puedes tomar cursos abiertos")
        }
    };
};

export class BasicStudent extends Student{
    constructor(props){
        super(props)
    }
    approvedCourses(newCourse) {
        if (newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        }
        else{
            console.warn("Lo sentimos "+this.name+", no puedes tomar cursos en ingles")
        }
    };
};

export class ExpertStudent extends Student{
    constructor(props){
        super(props)
    }
    approvedCourses(newCourse) {
        this.approvedCourses.push(newCourse);
    };
};




