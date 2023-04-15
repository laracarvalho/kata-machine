type Node<T> = {
    value: T,
    next?: Node<T>,
}


// A Queue is First In, First Out

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined
        this.length = 0
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>
        this.length++

        if (!this.tail) {
            this.tail = this.head = node
            return;
        }

        this.tail.next = node
        this.tail = node 
    }
    
    deque(): T | undefined {
        if (!this.head) {
            return undefined
        }

        this.length--
        const head = this.head
        // Pass the updated head to the next one, having one or not
        this.head = this.head.next
        head.next = undefined

        if (this.length === 0) {
            this.tail = undefined
        }

        return head.value
    }
    
    peek(): T | undefined {
        return this.head?.value
    }
    
}