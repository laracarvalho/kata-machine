import SinglyLinkedList from "@code/SinglyLinkedList";

test("linked-list", function () {
    const list = new SinglyLinkedList<number>();
    
    list.append(5);
    debugger;
    list.append(7);
    debugger;
    list.append(9);
    debugger;

    expect(list.get(2)).toEqual(9);
    console.log(list);
    expect(list.removeAt(1)).toEqual(7);
    console.log(list);    
    expect(list.length).toEqual(2);

    list.append(11);
    console.log(list)
    expect(list.removeAt(1)).toEqual(9);
    debugger;
    expect(list.remove(9)).toEqual(undefined);
    expect(list.removeAt(0)).toEqual(5);
    expect(list.removeAt(0)).toEqual(11);
    expect(list.length).toEqual(0);

    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    expect(list.get(2)).toEqual(5);
    expect(list.get(0)).toEqual(9);
    expect(list.remove(9)).toEqual(9);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(7);
});
