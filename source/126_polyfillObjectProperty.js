// Module ID: 126
// Function ID: 2112
// Name: polyfillObjectProperty
// Dependencies: [50]

// Module 126 (polyfillObjectProperty)
const global = arg0;
const require = arg1;
const dependencyMap = arg6;
function polyfillObjectProperty(_navigator, product, get) {
  const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(_navigator, product);
  let obj = ownPropertyDescriptor;
  if (!ownPropertyDescriptor) {
    obj = {};
  }
  const configurable = obj.configurable;
  if (!ownPropertyDescriptor) {
    obj = { get, enumerable: false !== tmp2, writable: false !== tmp3 };
    require(50) /* defineLazyObjectProperty */.default(_navigator, product, obj);
    const obj2 = require(50) /* defineLazyObjectProperty */;
  } else {
    const _console = console;
    console.error(`Failed to set polyfill. ${product} is not configurable.`);
  }
}
arg5.polyfillObjectProperty = polyfillObjectProperty;
arg5.polyfillGlobal = function polyfillGlobal(product, get) {
  polyfillObjectProperty(global, product, get);
};
