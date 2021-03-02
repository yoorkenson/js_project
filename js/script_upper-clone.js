// поверхностное копирование
// 1 создать функцию
function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
/*  поверхностная копия
    c: все равно передается по ссылке и если ее менять в newNumbers,
    то меняется и в numbers 
*/
newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add));
// 2 assign с пустым объектом
const clone = Object.assign({}, add); //клонируем, в пустой добавляем старый, так и копируем

clone.d = 20;
// console.log(add);
// console.log(clone);

// 3 slise
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'sdfasf';
console.log(newArray);
console.log(oldArray);


// 4 spread - оператор
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', ' livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];

const array = ["a", "b"];
const newAray = [...array];

const q = {
    one: 1,
    two: 2
};
const newObg = {...q};
