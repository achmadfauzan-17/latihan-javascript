function setTime() {
  const header = document.getElementById("header");
  header.textContent = new Date().toString();
}
setInterval(setTime, 1000);
console.log("Program Finish");

function bagi(a, b) {
  if (arguments.length !== 2) {
    console.error("Input kudu wajib 2 angka");
    return null;
  }
  if (typeof a !== "number" || typeof b !== "number") {
    console.error("angka ya adick adick bukan hurup");
    return null;
  }
  if (b === 0) {
    console.error("nol ya adick adick");
    return null;
  }
  return a / b;
}

console.log(bagi("a"));
console.log(bagi(10, "a"));
console.log(bagi(10, 0));
console.log(bagi(10, 2));
console.log(bagi(10, 5));
console.log(bagi(10, 1));
