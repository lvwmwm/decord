// Module ID: 5556
// Function ID: 5557
// Name: react
// Dependencies: [19]
// Exports: getValidComponent, isComponentClass

// Module 5556 (react)
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
export const getValidComponent = (icon) => {
  let tmp = icon;
  const obj = react;
  if (!react.isValidElement(icon)) {
    let element = null;
    if (null != icon) {
      element = obj.createElement(icon);
    }
    tmp = element;
  }
  return tmp;
};
