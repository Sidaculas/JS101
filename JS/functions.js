function grettings(name) {
    console.log("Hello " + name);

    message = `Hello ${name}`;
    console.log(message);
}



setTimeout(grettings, 3000, "Shafaat"); // setTimeout(function, time, arg) calling a function within a function.

setTimeout(() => {
    console.log("Hello Shafaat");       // annonymous function using =>, best for one time use.
}, 3000);