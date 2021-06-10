class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: TypeScript version is ${this.version}`
    }
}

// readonly - говорит что значение не будет перезаписываться, НО можно перезаписать только внутри конструктора

// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4
//
//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }

class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}