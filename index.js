const fs = require("fs");

fs.mkdirSync(".secrets-dec")
fs.writeFileSync(".secrets-dec/production.json", '{"a": "b"}')