var isNumber = function(a) {
    if(typeof a === 'number' && !isNaN(a) && a !== Infinity) {
        return true;
    } else {
        return false
    }
}

for (var i = 0; i < 11; i++) {
    var x = 0;
}

// var i = 1
// i = i + 1

// i = i + 1

// i = i + 1

// ++i
// --i
// i++
// i--

for (var i = 0; i < 11; i++) {
    console.log(i)
}

var arr = ['az', 'ti', 'toi', 'tq', 'to', 'nie', 'vie', 'te']
    console.log(arr.length)


console.log('------------------------')
for (var i = 0; i < arr.length; i++) {
    console.log(i)
}

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.log('------------------------')

var arrObject = [
    {
        name: 'John',
        lastName: 'Doe',
        getName: function () {
            return `My name is ${this.name} ${this.lastName}`
        }
    },
    {
        name: 'Simeon',
        lastName: 'Nikolov',
        getName: function () {
            return `My name is ${this.name} ${this.lastName}`
        }
    },
    {
        name: 'Valeriya',
        lastName: 'Nikolova',
        getName: function () {
            return `My name is ${this.name} ${this.lastName}`
        }
    },
]

for (var i = 0; i < arrObject.length; i++) {
    console.log(arrObject[i])
}

for (var i = 0; i < arrObject.length; i++) {
console.log(arrObject[i].name + ' ' + arrObject[i].lastName)
}

for (var i = 0; i < arrObject.length; i++) {
    console.log(arrObject[i].getName())
    }

var Valeriya = {
        name: 'Valeriya',
        lastName: 'Nikolova',
        age: 14,
        getName: function () {
            return `My name is ${this.name} ${this.lastName}`
        },
        canDrink: function() {
            return this.age >= 18;
        },
        hasBirthday: function() {
            ++this.age
        }
    }

