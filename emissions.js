var area = "Greenhouse gas emissions by gas from 1950 to 2022.json";
var map = "map.json";
var bar1 = "bar1.json";
var bar2 = "bar2.json";
var bar3 = "bar3.json";

vegaEmbed("#area", area).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#map", map);

vegaEmbed("#bar", bar1);
vegaEmbed("#bar2", bar2);
vegaEmbed("#bar3", bar3);