const student = [
    {name : "omar sunny", id: 25},
    {name : "moiyurii", id: 30},
    {name : "maaanaaa", id:45},
    {name : "deepjol", id: 51},

]

const names = student.map(s => s.name)
const bigger = student.filter(s => s.id > 40);
console.log(names);
console.log(bigger);