/* global L */

// A layer control which provides for html content
// Author: Juan Carlos García del Canto
L.Control.HtmlLayers = L.Control.extend({
  
  options: {
    collapsed: true,
    position: 'topleft',
    autoZIndex: true
  },

  initialize: function (options) {
	  this._html = "";
	  this._lastZIndex = 0;
	  this._handlingClick = false;
  },

  onAdd: function (map) {
    this._initLayout();

    map
        .on('layeradd', this._onLayerChange, this)
        .on('layerremove', this._onLayerChange, this);

    
    this._expand();
    
    return this._container;
  },

  onRemove: function (map) {
    map
        .off('layeradd', this._onLayerChange)
        .off('layerremove', this._onLayerChange);
  },

  _initLayout: function () {
    var className = 'leaflet-control-layers',
        container = this._container = L.DomUtil.create('div', className);

    //Makes this work on IE10 Touch devices by stopping it from firing a mouseout event when the touch is released
    container.setAttribute('aria-haspopup', true);

    if (!L.Browser.touch) {
      L.DomEvent.disableClickPropagation(container);
      L.DomEvent.on(container, 'wheel', L.DomEvent.stopPropagation);
    } else {
      L.DomEvent.on(container, 'click', L.DomEvent.stopPropagation);
    }

    var form = this._form = L.DomUtil.create('form', className + '-list');
    
    container.appendChild(form);
    
    // Generating collapse button
    this._button = L.DomUtil.create("div", className + '-collapse-button', container);
    jQuery(this._button).html("<img src=\"styles/leaflet/images/layers.png\" />");
    
    L.DomEvent.on(this._button, 'click', this._collapse, this);
  },

  _setHtmlContent: function (html) {
	  this._html = html;
	  jQuery(this._form).html(html);
  },

  _onLayerChange: function (e) {
  },

  _expand: function () {
    L.DomUtil.addClass(this._container, 'leaflet-control-layers-expanded');
  },

  _collapse: function () {
	  var button = jQuery(this._button);
	  if(button.data("function") == undefined || button.data("function") == "" || button.data("function") == "collapse"){
		  jQuery(this._container).animate({left: "-100%"}, function(){
			  button.data("function", "expand");
		  });
	  }else{
		  jQuery(this._container).animate({left: "0%"}, function(){
			  button.data("function", "collapse");
		  });
	  }
	  
  }
});

L.control.htmlLayers = function (options) {
  return new L.Control.HtmlLayers(options);
};
