console.log('Hello, world!');
let age: number = 20;
let level;
let a: number[] = [1, 2, 3];
let b: Array<number> = [1, 2, 3];
let c = [1, 'a', true];
let d: [number, string, boolean] = [1, 'a', true];  // tuple
// tuples are useful as pairs.
let e = [1, 2, 3];
let user: [number, string] = [1, 'a'];
// user.push(1);  // not caught by TypeScript
let f: [number, string][] = [[1, 'a'], [2, 'b']];
const enum Size { Small, Medium, Large };
let size: Size = Size.Small;
if (age < 50) {
    console.log('You are young!');
}
let t: number | string = 5;
t = 'a';
type Employee = {
    id: number,
    name: string,
    retire: (date: Date, n: number) => void
};
let employee: Employee
 = {
    id: 1,
    name: 'John',
    retire: (date: Date, n: number): void => {
        console.log(date);
        console.log(n);
    }
};
employee.name = 'John';
function ff(x: any) {

}
function calculateTax(amount: number = 5): number {
    return amount * 1.2;
}
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type DraggableResizable = Draggable & Resizable;
let draggableResizable: DraggableResizable = {
    drag: () => {
        console.log('dragging');
    }
    ,
    resize: () => {
        console.log('resizing');
    }
};
draggableResizable.drag();
type Quantity = 50 | 100;
let quantity: Quantity = 50;
let quantity2: Quantity = 100;
