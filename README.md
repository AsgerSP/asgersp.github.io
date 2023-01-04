# Datadreven Blog

## Imargin
This site has been changed from the tufte-jekyll theme to a more general blog-site. 
It is called imargin as in "in the margin" (danish translation). 

To see more information regarding the original them, please see https://github.com/clayh53/tufte-jekyll

## External links
Instead of the markdown I want to have links open in a new tab. Therefore I use the this standard for links: 
<a href="[LINK]" target="_blank" rel="noopener">Link name</a>

## Development
* install https://jekyllrb.com/
* run `bundle exec jekyll serve`
* open http://127.0.0.1:4000/ in your browser

## Insert a new D3 chart type
1. go to https://observablehq.com/ and pick a chart to embed
2. next to the chart on the left side click on the '...' more button and chose 'Embed'
3. from the dropdown chose 'Runtime with JavaScript'
4. copy-paste the chart ID to a post's font matter e.g. `d3chartPlaceholder: "observablehq-canvas-a12167a7"`
5. add a chart type e.g. `d3chartType: "canvas"`
6. copy-paste the rest of the code snippet into [/js/d3-module.js](https://github.com/AsgerSP/asgersp.github.io/blob/main/js/d3-module.js) and follow the established pattern to add the new chart type (in case you are adding a new type)
7. To add a chart manually elsewhere use the `<div class="d3-chart-placeholder" id="observablehq-chart-8b041057" data-type="disjoint"></div>` or similar markup

## Firebase
Firebase deploy

* `jekyll build`
* `npm run deploy`

https://imarginproject.firebaseapp.com/
https://imarginproject.web.app/

Crimson - header
Oxygen - body