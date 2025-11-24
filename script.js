let student = {
    name: "Kuan",
    age: 30,
    enrolled: true,
    courses: ["CPAN111","CPAN113","CPAN116","CPAN133","CPAN134"],
    info(){
        console.log("Hello my name is "+this.name,", and my age is",+this.age);
    }
};
console.log(student.info());

