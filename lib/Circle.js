'use strict';

var createComponent = require('./createComponent');
var LayerMixin = require('./LayerMixin');

var Circle = createComponent('Circle', LayerMixin, {

  applyCircleProps: function(prevProps, props) {
    var style = (props && props.style) ? props.style : {};
    var layer = this.node;

    layer.type = 'circle';

    layer.xPos = style.xPos;
    layer.yPos = style.yPos;
    layer.radius = style.radius;
    layer.color = style.color;
  },

  mountComponent: function(rootID, transaction, context) {
    var props = this._currentElement.props;
    var layer = this.node;
    this.applyLayerProps({}, props);
    this.applyCircleProps({}, props);
    return layer;
  },

  receiveComponent: function(nextComponent, transaction, context) {
    var props = nextComponent.props;
    var prevProps = this._currentElement.props;
    this.applyLayerProps(prevProps, props);
    this.applyCircleProps(prevProps, props);
    this._currentElement = nextComponent;
    this.node.invalidateLayout();
  }

});

module.exports = Circle;
