const server = Bun.serve({
  prot: 3000,
  fetch(request) {
    const message =
      'Welcome to Bun! \n' +
      'This message writed by sky\n' +
      new Date().toString();
    return new Response(message);
  },
});

console.log(`Listening on localhost:${server.port}`);
