const spin = function(count) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100 * (count + 1));

  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300 * (count + 1));

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500 * (count + 1));

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, 700 *(count + 1));
}
const spinner = function() {
  for(let i = 0; i < 2; i++) {
    spin(i);
  }
  setTimeout(() => {
    console.log("\n")
  }, 1600 * 2);
}
spinner();
