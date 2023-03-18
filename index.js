const cats = ["Milo", "Otis", "Garfield"];
 
function  destructivelyAppendCat(name)
{
    cats.push(name);
}

function  destructivelyPrependCat()
{
    cats.unshift("Bob");
}

function  destructivelyRemoveFirstCat()
{
    cats.shift();
}

function  destructivelyRemoveLastCat()
{
    cats.pop();
}

function prependCat(name) {
    const newArray = [name, ...cats];
    return newArray;
}

function appendCat(name) {
    const newArray = [...cats, "Broom"];
    return newArray;
}


function removeLastCat() {
    const newArray = cats.slice(0, -1);
    return newArray;
}

function removeFirstCat() {
    return cats.slice(1);
}

 