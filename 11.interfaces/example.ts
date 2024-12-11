function user (user1 : {firstName:string , lastName:string, age:number}){
    return `hello ${user1.firstName} ${user1.lastName} age ${user1.age}`;
}

interface User{
    firstName:string;
    lastName:string;
    age:number;
}
function interface(user:User){
    return `hello ${user.firstName} ${user.lastName} ${user.age}`
}

let user2 = {firstName : 'rasith' , lastName: 'm' , age : 19}

interface(user2)


console.log(user(user2))
