const arrOfNumbers: Array<number> = [1,1,2,3,5]
const arrOfStrings: Array<string> = ['Hello', 'Ivan']

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrOfNumbers)
reverse(arrOfStrings)