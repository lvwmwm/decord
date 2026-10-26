// Module ID: 5550
// Function ID: 5551
// Name: react
// Dependencies: [19]
// Exports: getValidComponent, isComponentClass

// Module 5550 (react)
import react from "react" /* 19 */;


export const isComponentClass = (fn) => {
  let _BooleanResult = typeof fn === "function";
  if (typeof fn === "function") {
    const prototype = fn.prototype;
    let isReactComponent;
    const _Boolean = Boolean;
    if (prototype != null) {
      isReactComponent = prototype.isReactComponent;
    }
    _BooleanResult = _Boolean(isReactComponent);
  }
  return _BooleanResult;
};
export const getValidComponent = (label) => {
  let tmp = label;
  const obj = react;
  if (!react.isValidElement(label)) {
    let element = null;
    if (null != label) {
      element = obj.createElement(label);
    }
    tmp = element;
  }
  return tmp;
};
