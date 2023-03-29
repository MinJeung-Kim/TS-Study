// 1. 사용방법
var variable = 'kim';
variable = '123';
// Union type
var variable2 = 'kim';
variable2 = 123;
// 2. 타입 종류
// string, number, boolean, null, undefined, bigint, [](array), {}(object)
// array
var array = ['kim', 'park'];
// object
var object = { name: 'kim' };
var object2 = { name: 'kim' }; // 속성의 유무가 불확실할 때
var object3 = { name: 'kim' };
var typeEx = 123;
// 4. Function Type Alias
function fn(x) {
    return x * 2;
}
// return type
function fn2(x) {
    return x * 2;
}
var john = [123, true];
var john2 = { name: 'kim' };
var john3 = { name: 'kim', age: '123' };
// Class 문법
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
