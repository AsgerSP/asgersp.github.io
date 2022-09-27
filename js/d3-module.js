// NOTE: Datadreven supports 3 kinds of D3 charts: chart, canvas & disjoint. This file should be updated for more types
import { Runtime, Inspector } from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@asgersp/d3-force-directed-graph-with-input.js?v=3";
import defineDisjoint from "https://api.observablehq.com/@asgersp/force-directed-graph-disjoint.js?v=3";
import defineDisjointSmall from "https://api.observablehq.com/d/85654f9589f63b8f.js?v=3";
import defineCanvas from "https://api.observablehq.com/@asgersp/voroblobinoids.js?v=3";
import defineSpiral from "https://api.observablehq.com/@mcmcclur/self-similar-spirals.js?v=3";
import defineSticky from "https://api.observablehq.com/@mcmcclur/iterated-function-systems.js?v=3";
import defineBubblechart from "https://api.observablehq.com/d/139422bced734dbe.js?v=3";
const d3ChartPlaceholders = document.querySelectorAll(".d3-chart-placeholder");

d3ChartPlaceholders.forEach(function (d3ChartPlaceholder) {
    var d3Type = d3ChartPlaceholder.getAttribute('data-type');

    if (d3Type == "chart") {
        new Runtime().module(define, name => {
            if (name === "chart") return new Inspector(d3ChartPlaceholder);
        });
    } else if (d3Type == "canvas") {
        new Runtime().module(defineCanvas, name => {
            if (name === "canvas") return new Inspector(d3ChartPlaceholder);
        });
    } else if (d3Type == "disjoint") {
        new Runtime().module(defineDisjoint, name => {
            if (name === "chart") return new Inspector(d3ChartPlaceholder);
            return ["key"].includes(name);
        });
    } else if (d3Type == "disjointsmall") {
        new Runtime().module(defineDisjointSmall, name => {
            if (name === "chart") return new Inspector(d3ChartPlaceholder);
            return ["key"].includes(name);
        });
    } else if (d3Type == "spiral") {
        new Runtime().module(defineSpiral, name => {
            if (name === "interactive_spiral") return new Inspector(d3ChartPlaceholder);
        });
    } else if (d3Type == "sticky") {
        new Runtime().module(defineSticky, name => {
            if (name === "sticky_sierpinski") return new Inspector(d3ChartPlaceholder);
        });
    } else if (d3Type == "Bubblechart") {
        new Runtime().module(defineBubblechart, name => {
        if (name === "BubbleChartName") return new Inspector(d3ChartPlaceholder);
        });
    }
    
});