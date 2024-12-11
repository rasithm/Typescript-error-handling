function user(user) {
    return "hello ".concat(user.firstName, " ").concat(user.lastName, " age ").concat(user.age);
}
function interface(user) {
    return "hello ".concat(user.firstName, " ").concat(user.lastName, " ").concat(user.age);
}
var user1 = { firstName: 'rasith', lastName: 'm', age: 19 };
interface(user1);
user(user1);
