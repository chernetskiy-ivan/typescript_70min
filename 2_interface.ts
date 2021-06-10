interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {width: 12, height: 30},
    color: '#ccc'
}

const rect2:  Rect = {
    id: '12345',
    size: {width: 22, height: 33}
}

rect2.color = 'black'

//указываю к какому типу будет относиться объект
const rect3 = {} as Rect
const rect4 = <Rect>{}
