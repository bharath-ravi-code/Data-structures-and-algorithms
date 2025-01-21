class DynamicArray {
    constructor() {
        this.array = [];
        this.size = 0;
    }

    //Add an element to the end of the array

    add(element) {
        this.array[this.size] = element;
        this.size++;
    }

    //Get an element at specific index

    get(index) {
        if(index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }
        return this.array[index]
    }

    //Remove an element at a specific index

    remove(index) {
        if(index < 0 || index >= this.size) {
            throw new Error('Index out of bounds')
        }
        for(let i = index; i < this.size - 1; i++) {
            this.array[i] = this.array[i + 1];
        }
        this.size--;
        this.array.length = this.size
    }

    getSize() {
        return this.size;
    }

    print() {
        console.log(this.array)
    }
}


const dynamicArray = new DynamicArray();

dynamicArray.add(10);
dynamicArray.add(20);
dynamicArray.add(30);
// dynamicArray.print();

// console.log(dynamicArray.get(0));

dynamicArray.remove(0);
dynamicArray.print();

