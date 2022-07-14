import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = process.env.PORT;

//unused variable
const x = 10;
var x,
    x = 10;

function doSomething() {
    var foo = 2;
}

const object2 = {
    prope: 12,
};
console.log(object2);

const foo = () => {
    console.log("Function Running");
};
foo();

var foo = {
    bar: "This is a bar.",
    baz: { qux: "This is a qux" },
    difficult: "to read",
};

function bar() {
    // ...
}
bar();

const string = "Hiiiii";

const string2 = '"Hiii" How are you?';
console.log(string);

function* generator() {}

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});
