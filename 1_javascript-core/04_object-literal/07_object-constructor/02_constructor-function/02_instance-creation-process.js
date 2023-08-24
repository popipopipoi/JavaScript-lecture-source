// 인스턴스 생성 과정
function Student(name, age) {
    // 1. 암묵적으로 인스턴스가 생성 되고 this에 바인딩 되는 과정이 런타임 이전에 실행 된다.
    console.log(this);
    // 2. this에 바인딩 되어 있는 인스턴스를 초기화 한다.
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
    // 3. 완성 된 인스턴스가 바인딩 된 this가 암묵적으로 반환된다.
    //return {};    // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
    //return 1;     // 명시적으로 원시값을 반환하면 무시되고 this가 반환된다.
    // 생성자 함수 내부에서 return은 생략하는 것이 기본이다.
}

const student = new Student('홍길동', 20);
console.log(student);