const spin = function(count) {
  const spinValues = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
  for(let i = 0; i < spinValues.length; i++) {
    let waitTime = (200 * (i + 1)) * (count + 1);
    setTimeout(() => {
      process.stdout.write(spinValues[i]);
    }, waitTime);
  }
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
