//const items = ['item1', 'item2'];
module.exports.items = ['item1', 'item2'];//since module.exports is an object, we can set this array as a property of the object
const person = {
    name: 'bob'
}

module.exports.singlePerson = person;