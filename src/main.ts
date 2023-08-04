// class Coder {
//   name: string;
//   music: string;
//   age: number;
//   lang: string;

//   constructor(name: string, music: string, age: number, lang: string) {
//     this.name = name;
//     this.music = music;
//     (this.age = age), (this.lang = lang);
//   }
// }

// less code
class Coder {
  // secondLang!: string >> could be used (not for beginners)

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    (this.age = age), (this.lang = lang);
  }
  public getAge() {
    return `Hello , I am ${this.age} years old.`;
  }
}

const Dave = new Coder("Dave", "Rock", 42);

console.log(Dave);
// console.log(Dave.age); > // we can't se because it was private: "private age: number,"
console.log(Dave.name); // Dave
// console.log(Dave.lang);// / we can't se because it was protected: " protected lang: string = 'Typescript' "
// by changing > //  "noEmitOnError": true,     to not commented it will log
// console.log(Dave.age)// 42
// console.log(Dave.lang);// Typescript

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang}.`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang()); // I write Typescript.

/********************************/

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));

//////////////////////////////

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }
  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count; // when the first one is created it will be 1 (this will be zero Peeps.count++)
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
console.log(Peeps.count); // 2 ( above 2 Peeps weere created)
const Amy = new Peeps("Amy");
console.log(Peeps.count); // 3 ( above 3 Peeps weere created)

console.log(John.id); // 1
console.log(Steve.id); // 2
console.log(Amy.id); // 3

/////////////////////////////////