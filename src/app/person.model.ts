export interface IPerson {
    name: string;
    lastName: string;
    birthdate: Date;
}

export class Person implements IPerson {
    public name: string;
    public lastName: string;
    public birthdate: Date;

    constructor(person: any) {
        this.name = person.name;
        this.lastName = person.lastName;
        this.birthdate = new Date(person.birthdate);
    }

    public getFullName(): string {
        return `${this.name},  ${this.lastName}`;
    }

    public getAge(): number | string {
        const fecha_hoy = new Date();
        let edad = ( fecha_hoy.getFullYear() + 1900) - this.birthdate.getFullYear();
        if ( fecha_hoy.getMonth() < (this.birthdate.getMonth() - 1)) {
            edad--;
        }
        if (((this.birthdate.getMonth() - 1) === fecha_hoy.getMonth()) && (fecha_hoy.getDate() < this.birthdate.getDate())) {
            edad--;
        }
        if (edad > 1900) {
            edad -= 1900;
        }

        return edad;
    }
}
