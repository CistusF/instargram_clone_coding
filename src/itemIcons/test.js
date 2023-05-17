const { readFileSync, readdirSync } = require("fs");


const datas = [];
const svgs = readdirSync("./").filter(i => i.endsWith(".svg"));


svgs.forEach((i) => {
    let svgString = readFileSync("./" + i, {encoding: "utf8"});

    svgString = svgString.split('"');
    const json = {
        name: i,
        viewBox: svgString[3],
        path: svgString[5]
    }

    datas.push(json);
});


console.log(datas);