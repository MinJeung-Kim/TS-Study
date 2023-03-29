// 1. 사용방법
let variable: string = 'kim';
variable = '123';

// Union type
let variable2: string | number = 'kim';
variable2 = 123;

// 2. 타입 종류
// string, number, boolean, null, undefined, bigint, [](array), {}(object)

// array
let array: string[] = ['kim', 'park'];

// object
let object: { name: string } = { name: 'kim' };
let object2: { name?: string } = { name: 'kim' }; // 속성의 유무가 불확실할 때
let object3: { name: string } = { name: 'kim' };

// 3. Type Alias
// 타입의 첫 글자는 대문자로 한다.
type TypeAlias = string | number;
let typeEx: TypeAlias = 123;

// 4. Function Type Alias
function fn(x: number) {
  return x * 2;
}

// return type
function fn2(x: number): number {
  return x * 2;
}

// Tuple type
type Member = [number, boolean];
let john: Member = [123, true];

type Member2 = { name: string };
let john2: Member2 = { name: 'kim' };

// object에 타입 지정을 해야할 속성이 많을 경우
type Member3 = { [key: string]: string };
let john3: Member3 = { name: 'kim', age: '123' };

// Class 문법
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
