var area = "Greenhouse gas emissions by gas from 1950 to 2022.json";
var map = "map.json";
var spiral = "spiral.json";
var spiral2 = "spiral2.json";
var spiral3 = "spiral3.json";
var lolipop = "lollipop.json"
var line = "average_temperature.json";

vegaEmbed("#area", area).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#map", map);

vegaEmbed("#spiral", spiral);
vegaEmbed("#spiral2", spiral2);
vegaEmbed("#spiral3", spiral3);

vegaEmbed("#lolipop", lolipop);
vegaEmbed("#line", line);
