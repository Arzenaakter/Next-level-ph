class Info {
 
    constructor(public name: string, public age: number, public status: boolean) { }
    public makeSound() {
        console.log(`my name is ${this.name} my age ${this.age} & isMarried: ${this.status}`)
    }
}

const arzena = new Info('arzena', 24, false)
arzena.makeSound()