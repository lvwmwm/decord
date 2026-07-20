// Module ID: 126
// Function ID: 2112
// Name: polyfillObjectProperty
// Dependencies: []

// Module 126 (polyfillObjectProperty)
function polyfillObjectProperty(_navigator, product, get) {
  const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(_navigator, product);
  let obj = ownPropertyDescriptor;
  if (!ownPropertyDescriptor) {
    obj = {};
  }
  const configurable = obj.configurable;
  if (!ownPropertyDescriptor) {
    obj = { get, enumerable: false !== tmp2, writable: false !== tmp3 };
    product(arg6[0]).default(_navigator, product, obj);
    const obj2 = product(arg6[0]);
  } else {
    const _console = console;
    console.error(`Failed to set polyfill. ${product} is not configurable.`);
  }
}
arg5.polyfillObjectProperty = polyfillObjectProperty;
arg5.polyfillGlobal = function polyfillGlobal(product, get) {
  polyfillObjectProperty(product, product, get);
};
