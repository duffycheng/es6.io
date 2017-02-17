
const age = 100;
const people = ['Jane', 'John'];

const fullName = people.map(name=>`${name} Doe`);

for(const person of people){
  console.log(person);
}

let {x,y,...z} = {x:1,y:2,a:3,b:4};

console.log(x,y,z);