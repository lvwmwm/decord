// Module ID: 123
// Function ID: 124
// Name: defineLazyObjectProperty
// Dependencies: [49]
// Exports: polyfillGlobal, polyfillObjectProperty

// Module 123 (defineLazyObjectProperty)
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 49 */;


export const polyfillObjectProperty = function polyfillObjectProperty(_navigator, product, get) {
  const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(_navigator, product);
  const configurable = (ownPropertyDescriptor || {}).configurable;
  if (!ownPropertyDescriptor) {
    const obj2 = { get, enumerable: false !== tmp3, writable: false !== tmp4 };
    const obj = defineLazyObjectProperty;
    obj.default(_navigator, product, obj2);
  } else {
    const _console = console;
    console.error(`Failed to set polyfill. ${product} is not configurable.`);
  }
};
export const polyfillGlobal = function polyfillGlobal(arg0, get) {
  const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(global, arg0);
  const configurable = (ownPropertyDescriptor || {}).configurable;
  const tmp = global;
  if (!ownPropertyDescriptor) {
    const obj2 = { get, enumerable: false !== tmp4, writable: false !== tmp5 };
    const obj = defineLazyObjectProperty;
    obj.default(tmp, arg0, obj2);
  } else {
    const _console = console;
    console.error(`Failed to set polyfill. ${arg0} is not configurable.`);
  }
};
