//---Part1:Creating Object---
let student = {
    name: "Kuan",
    age: 30,
    enrolled: true,
    courses: ["CPAN111","CPAN113","CPAN116","CPAN133","CPAN134"],
    info(){
        console.log("Hello my name is "+this.name,"and my age is "+this.age);
    }
};
console.log(student.info());
//---Part2:JOSN---
let studentJSON = JSON.stringify(student);
console.log(studentJSON);
//convert back to object
let parseStudent = JSON.parse(studentJSON);
console.log(parseStudent);
//---Part3:Destructuring---
let {name,courses} = student;
console.log(name);
console.log(courses);

