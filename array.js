let antrian = ["ray", "fiki", "fadhilla", "farah"];

antrian.push("nabila");
antrian.push("maza", "elsi");

antrian.pop();
antrian.shift();
antrian.shift();
antrian.unshift("tomi");

let result = antrian.slice();

console.log("Antrian akhir:", result);
