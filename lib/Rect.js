'use strict';

var createComponent = require('./createComponent');
var LayerMixin = require('./LayerMixin');

var Rect = createComponent('Rect', LayerMixin, {

  applyRectProps: function(prevProps, props) {
    var style = (props && props.style) ? props.style : {};
    var layer = this.node;

    layer.type = 'rect';

    layer.xPos = style.xPos;
    layer.yPos = style.yPos;
    layer.width = style.width;
    layer.height = style.height;
    layer.color = style.color;
  },

  mountComponent: function(rootID, transaction, context) {
    var props = this._currentElement.props;
    var layer = this.node;
    this.applyLayerProps({}, props);
    this.applyRectProps({}, props);
    return layer;
  },

  receiveComponent: function(nextComponent, transaction, context) {
    var props = nextComponent.props;
    var prevProps = this._currentElement.props;
    this.applyLayerProps(prevProps, props);
    this.applyRectProps(prevProps, props);
    this._currentElement = nextComponent;
    this.node.invalidateLayout();
  }

});

module.exports = Rect;
