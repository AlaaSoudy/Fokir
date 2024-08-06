const typewriter = new Typewriter('#typewriter', {
    loop: true,
    delay: 50,
});

typewriter
    .typeString('Designer')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Developer')
    .pauseFor(1000)
    .deleteAll()
    .start();

