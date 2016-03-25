/*
CorpGlory Inc. 
Alexey Velikiy
2016

We are hiring! 
Ask me for details 
https://ru.linkedin.com/in/alexeyvelikiy
*/

var App = {};

App.main = function(data) {
  App.svg = d3.select('#svgLayout svg');
  App.$map = $('#svgLayout img');
  App.width = App.$map.width();
  App.height = App.width;
  App.scale = App.width / 895.854;
  
  App.svg
    .attr("width", App.width)
    .attr("height", App.height);
    
  App.initLabels(data);
}

App.initLabels = function(data) {
  
  App.labels = App.svg.select('#labels');
  App.labels
    .selectAll('text').data(data.labels)
    .enter().append('text')
    .text(function(d) { return d.t; })
    .attr('x', function(d) { return d.x * App.scale; })
    .attr('y', function(d) { return d.y * App.scale; });

}

App.initEdges = function(data) {
  
}


d3.selection.prototype.hide = function() {
  this.style("visibility", "hidden");
  return this;
}

d3.selection.prototype.show = function() {
  this.style("visibility", "visible");
  return this;
}

String.prototype.format = function() {
  var args = Array.prototype.slice.call(arguments);
  return sprintf.apply(sprintf, [this].concat(args));
};

$(function() {
  $.getJSON("data.json", App.main);
});