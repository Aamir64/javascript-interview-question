//objects in javascript

const user = {
    name: "Aamir khan",
    age: 19
};
console.log(user.name);

delete user.age;

console.log(user);

//objects in javascript

const funk = (function(a) {
    delete a;
    return a;
})(18);

console.log(funk);

//currying

function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(sum(2)(3)(3));

//Evaluation of operators

function evaluate(operation) {
    return function(a) {
        return function(b) {
            if (operation === "sum") return a + b;
            else if (operation === "subtract") return a - b;
            else if (operation === "divide") return a / b;
            else if (operation === "multiply") return a * b;
            else return ("invalid operation");


        }
    }
}

const mul = evaluate("multiply");
console.log(mul(2)(5));
console.log(evaluate("subtract")(267)(56));


//Infinite Currying
function add(a) {
    return function(b) {
        if (b) return add(a + b);
        else return a;
    };
}
console.log(add(4)(5)(67)()); //76

//Currying vs Partial Application
//Partial Application
function sum(a) {
    return function(b, c) {
        return a + b + c;
    };
}
const x = sum(10);
console.log(x(56, 98));

console.log(sum(18)(2, 65));


//vs


function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    };
}

console.log(sum(5)(7)(6));

//Manipulation DOM

function updateElementText(id) {
    return function(content) {
        document.querySelector('#' + id).textContent = content;
    };
}

const updateHeader = updateElementText('heading');
const update = document.getElementById("btn");
update.addEventListener("click", (e) => {
    updateHeader("WHAT ARE YOU DOING AAMIR?");
});


//Convert f(a,b,c) into f(a)(b)(c)


function curry(func) {
    return function curriedFunc(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function(...next) {
                return curriedFunc(...args, ...next);

            };
        }
    };
}
const sum = (a, b, c) => a + b + c;

const totalSum = curry(sum);

console.log(totalSum(2)(5)(76));