import { two_crystal_balls_linear, two_crystal_balls_sqrt } from "@code/TwoCrystalBalls";

test("two crystal balls sqrt", function () {
    let idx = Math.floor(Math.random() * 10000);
    const data = new Array(10000).fill(false);

    for (let i = idx; i < 10000; ++i) {
        data[i] = true;
    }

    expect(two_crystal_balls_sqrt(data)).toEqual(idx);
    expect(two_crystal_balls_sqrt(new Array(821).fill(false))).toEqual(-1);
});

test("two crystal balls linear", function () {
    let idx = Math.floor(Math.random() * 10000);
    const data = new Array(10000).fill(false);

    for (let i = idx; i < 10000; ++i) {
        data[i] = true;
    }

    expect(two_crystal_balls_linear(data)).toEqual(idx);
    expect(two_crystal_balls_linear(new Array(821).fill(false))).toEqual(-1);
});

