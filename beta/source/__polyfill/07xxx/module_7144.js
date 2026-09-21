// Module ID: 7144
// Function ID: 7145
// Dependencies: [19]
// Exports: getValidComponent, isComponentClass

// Module 7144
import noop from "module_19" /* 19 */;


export const isComponentClass = (fn) => {
  let BooleanResult = typeof fn === "function";
  if (typeof fn === "function") {
    const prototype = fn.prototype;
    let isReactComponent;
    if (prototype != null) {
      isReactComponent = prototype.isReactComponent;
    }
    BooleanResult = Boolean(isReactComponent);
  }
  return BooleanResult;
};
export const getValidComponent = (label) => {
  let tmp = label;
  if (!noop.isValidElement(label)) {
    let element = null;
    if (null != label) {
      element = noop.createElement(label);
    }
    tmp = element;
  }
  return tmp;
};
