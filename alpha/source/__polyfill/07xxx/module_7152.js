// Module ID: 7152
// Function ID: 7153
// Dependencies: [19]
// Exports: getValidComponent, isComponentClass

// Module 7152
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
export const getValidComponent = (icon) => {
  let tmp = icon;
  if (!noop.isValidElement(icon)) {
    let element = null;
    if (null != icon) {
      element = noop.createElement(icon);
    }
    tmp = element;
  }
  return tmp;
};
