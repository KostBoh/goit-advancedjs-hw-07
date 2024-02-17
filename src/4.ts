class Key{
    private signature: number;
    constructor() {
        this.signature = Math.random();
} 

    getSignature(): number {
        return this.signature;
    }

}

class Person  {
    private key: Key;
    constructor(key: Key) {
        this.key = key;
    }
    getKey(): Key{
        return this.key;
    }

}

abstract class House{
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];
    constructor(key: Key) {
        this.key = key;
    }

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log("Person added in house.");
        } else {
            console.log("The door is closed.");
            
            }
        
    }
    abstract openDoor(key: Key): void;

}

class MyHouse extends House{
    openDoor(key: Key): void {
        if (key.getSignature === this.key.getSignature) {
            this.door = true;
            console.log("The dor is opened.");                        
        } else {
            console.log("The key does not match, cannot open the door.");
            
        }
    }
}


const key = new Key();

const person = new Person(key);
const house = new MyHouse(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};