const fs = require("fs");
console.log(process.cwd())

const file = fs.readFileSync("./kustomize/build1/deployment.yml").toString();

console.log(file)
