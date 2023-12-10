

type MyCrushType = {
    name: string;
    age?: number;
}

const cursh1: MyCrushType = {
    name: 'arzena',
    
    
}

const func =(num1:number, num2:number, parFunc:(x:number,y:number)=>number) => {
    return parFunc(num1,num2)
}
func(2, 3, (x, y) => x + y)

type OperationType = (x:number,y:number) => number
const culculation = (num1:number,num2:number, operation:OperationType )=> {
    return operation (num1,num2)
}

culculation(23, 43, (x, y) => x + y)


// union intercept

enum Level1  {
    'senior','junior', 
    
}

type NobDeveloperType = {
    name: string;
};

type JuniorDeveloperType = NobDeveloperType & {
    
    position: string;
    experience: number;
    level : Level1
};

const newDev:  JuniorDeveloperType = {
 
    name: 'arzena',
    position: 'fronend',
    experience: 1,
    level : Level1.junior



}