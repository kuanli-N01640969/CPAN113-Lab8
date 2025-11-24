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
//---Score Array---
let score = [85, 92, 78, 90];
let [first,second] = score;
console.log(first);
console.log(second);
//---Part4:Spread Operator---
let copiedStudent = {...student, graduationyear:2027};
console.log(copiedStudent);
//---Merge Array---
let newCourses = ["CPAN112","CPAN121"];
let allCourses = [...student.courses, ...newCourses];
console.log(allCourses);
