
//Prototipo Cursos
export class Courses{
    constructor({
        name,
        classes = [],
        teacher,
        isFree = false,
        Lang = "spanish",

    })
    {
        this._name = name;
        this._classes = classes;
        this.teacher = teacher
        this.isFree = isFree,
        this.Lang = Lang
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








