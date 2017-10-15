require("dts-generator").default({
    name: "cuon-matrix-ts",
    project: ".",
    out: "index.d.ts",
    exclude: [
        "node_modules/**/*.d.ts"
    ]
});

const fs = require("fs")

// super lame i ended up using just setTimeout, but this is a build utility so ¯\_(ツ)_/¯
setTimeout(function() {
    fs.readFile("./index.d.ts", "utf8", function (err,data) {
        if (err) {
            return console.log(err);
        }
        let result = data.replace(/cuon-matrix-ts\/src\/(?!index)/g, "");
        result = result.replace(/\/src\/index\'/g, "\'");

        fs.writeFile("./index.d.ts", result, "utf8", function (err) {
            if (err) return console.log(err);
        });
    });
}, 500);

