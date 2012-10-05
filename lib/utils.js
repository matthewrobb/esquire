global.StopIteration = {};
var keys = Object.keys, ownProp = Object.getOwnPropertyDescriptor, defineProps = Object.defineProperties;
function define(target, source) {
  var desc = {};
  keys(source).forEach(function (key) {
    return desc[key] = ownProp(source, key);
  }.bind(this));
  defineProps(target, desc);
  return target;
}
function ArrayIterator() {
  return {
    elements: this,
    index: 0,
    next: function () {
      if (this.index >= this.elements.length)
        throw StopIteration;
      return this.elements[this.index++];
    }
  };
}
defineProps(exports, {define: {
    value: define,
    enumerable: false,
    writable: true,
    configurable: true
  }});
defineProps(global.Array.prototype, {iterator: {
    value: ArrayIterator,
    enumerable: false,
    configurable: true,
    writable: true
  }});