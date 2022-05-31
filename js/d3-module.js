// NOTE: Datadreven supports 2 kinds of D3 charts: chart & canvas. This file should be updated for more types
import { Runtime, Inspector } from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@asgersp/d3-force-directed-graph-with-input.js?v=3";
import defineVoroblobinoids from "https://api.observablehq.com/@asgersp/voroblobinoids.js?v=3";
const d3ChartPlaceholders = document.querySelectorAll(".d3-chart-placeholder");
const d3ChartPlaceholdersVoroblobinoids = document.querySelectorAll(".d3-canvas-placeholder");

d3ChartPlaceholders.forEach(function (d3ChartPlaceholder) {
    new Runtime().module(define, name => {
        if (name === "chart") return new Inspector(d3ChartPlaceholder);
    });
});

d3ChartPlaceholdersVoroblobinoids.forEach(function (d3CanvasPlaceholder) {
    new Runtime().module(defineVoroblobinoids, name => {
        if (name === "canvas") return new Inspector(d3CanvasPlaceholder);
    });
});