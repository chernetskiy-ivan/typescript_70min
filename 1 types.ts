const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'hello TypeScript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['hello', 'typescript']

//Tuple
const contact: [string, number] = ['Ivan', 1234567]

// Any
let variable: any = 42
variable = 'New string'
variable = []

// ====
function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Хайзенберг')