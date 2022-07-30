//const createPerson = (name, age) => {
   // const person = Object.create({});
   // person.name  = name;
   //son.age  = age;
  //  return person;   
//}

//const user1 = createperson('Edgar', 28)
//const user2 = createperson('Arturo', 24)

// console.log(user1, user2)

//user1.weight = '55kg';
//user1.height = '175cm';
//user1.hender = 'male';

// console.log(user1);

//for (const key in user1){  
 // if (key === 'weight') {
 //       user1.weight = Number(user1.weight.replace('kg', ''))
//    }
 //       if (key === 'weight') {
//            user1.height = Number(user1.height.replace('cm', ''))
 //   }
//}

// console.log(user1);
//Object.keys(user1).forEach(key => {
 //   if (key === 'weight') {
 //       user1.height = user1.height /100

//}
//})

//object.values(user1)

// user1.name = ''

//Object.values(user1).forEach(value => {
  //  if (value === '')
  //  {
       // console.log('alerta, hay informacion vacia')
   // };
//});

//const setID = (obj, str) => {
 //   obj[str] = math.random();
//}

//setID(user1.height, 'id');

//console.log(user1)

//user1.favoritefoood = ['tacos', 'pizza', 'hamburguesa'];
//user1.pets = {
//    name: 'Godddard',
 //   age: 2
//}

//const {favoritefood, pets: {name, color = 'red'}} = user1;

//console.log (favoritefoods, color)

//Object.freeze(user1);

//console.log(user1)

//user1.name = 'juan'

//user1.favoritedrink = 'Water'

//user1.pets, name = 'jimmy'

//delete user1.gender;

//console.log(user1)

//console.log(user1)

//object.seal(user1)

//console.log(user1)

//user.name = 'Rodrigo'
//delete user1.name
//user1.addrees = 'world'
//user1.pets.name = 'neutron'

//console.log(user1);

class car{
constructor(doors){  
    this.doors = doors
}

get turnOn() {
return ' te car ' +  this.model + ' is turned on '
}
}
 
class mazda extends car {
    constructor(doors, model){
        super(doors);
        this.model = model;
    }
    openWindows(windows, height){
        this.windows = windows;
        this.price = height;
        console.log(this.turnOn)     
    console.log('tha card ' + this.model + ' has ' + windows + ' opened at ' + height + ' % ')

    }

    set configprice(price) {
      this.price = price
    }

    set changemodel(newname){
        this.model = newName
    }
}

const car = new car(4);
const mazda3 = new mazda(car.doors, 'mazda3')

console.log(mazda3.turnOn)

console.log(car)
console.log(mazda3)

mazda3.configprice = 500
mazda3.changemodel = 'mazda2'

console.log(car)
console.log(mazda3)

mazda3.openwindows(2, 75)

console.log(mazda3)