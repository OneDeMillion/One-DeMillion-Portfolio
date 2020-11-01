function hello(greeting="Howdy") {
    return `${greeting}, how are you, ${this.name}?`;
}

// hello("Kim");

// console.log(hello.length)

const kim = {name: 'Kim'};
const steve = {name: 'Steve'};

console.log(hello.call(kim));


function square(x) {
    console.log( x*x);
}

square.call(null, 4);
