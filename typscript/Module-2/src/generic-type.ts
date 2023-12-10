const arrString: Array<string> = ['hola', 'kola']
const numberArr: Array<number> = [12, 34, 56]
const booleanArr: Array<boolean> = [true, false]

const arrOfObject: Array<{name:string, roll:number}> = [
    {
        name: 'hola',
        roll : 12
    },
    {
        name: 'kola',
        roll : 13
    }
]

type NameRollType = {
    name: string;
    roll: number;
     
 }
const arrOfObject1: Array<NameRollType> = [
    {
        name: 'hola',
        roll : 12
    },
    {
        name: 'kola',
        roll : 13
    }
]


// like passing arguments, reuse when we need
type GenericType<T> = Array<T>


const arrString1: GenericType<string> = ['hola', 'kola']
const numberArr1: GenericType<number> = [12, 34, 56]
const booleanArr1: GenericType<boolean> = [true, false]

const arrOfObject2: GenericType<NameRollType> = [
    {
        name: 'hola',
        roll : 12
    },
    {
        name: 'kola',
        roll : 13
    }
]


// generic tuple 
type GenericTuple<x, y> = [x, y]

const relation:GenericTuple <string,string> = ['hola','kola']


const relationWithObjectString: GenericTuple<{name:string,age:number},string> = [
    { name: 'hola', age: 20 },
    'kola',
   

    // this is not good practice because the object take any properties
]
const relationWithObjectString1: GenericTuple<object,string> = [
    { name: 'hola', age: 20 },
    'kola',
   
]


// when you don't know about the type of any property
type GenericAnyType<T>= {
    
    name: string,
    husband: T,
    age?: number
}

const relationAnyType: GenericAnyType<number> = {
    name : 'hola',
    husband : 12,
    
    
}