const fs = require("fs");

const file = fs.readFileSync("../../../kustomize/build1/deployment.yml").toString();

console.log(file)
