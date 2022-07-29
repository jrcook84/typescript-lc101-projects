import { Cargo} from './Cargo';
import { Astronaut } from './Astronaut';
import { Payload } from './Payload';

export class Rocket {

name: string;
totalCapacityKg: number;
cargoItems: Cargo[] =[];
astronauts: Astronaut[] = []

constructor(name: string, totalCapacityKg: number){
this.name = name;
this.totalCapacityKg = totalCapacityKg;
};

sumMass(items: Payload[]): number{

    let totalMass = 0;
    for (let i: number = 0; i < items.length; i++ ){
        totalMass += items[i].massKg
    }
    return totalMass
}




