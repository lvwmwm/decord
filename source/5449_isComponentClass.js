// Module ID: 5449
// Function ID: 46559
// Name: isComponentClass
// Dependencies: [31]
// Exports: getValidComponent, isComponentClass

// Module 5449 (isComponentClass)
import result from "result";


export const isComponentClass = function isComponentClass(renderScrollComponent) {
  let BooleanResult = "function" === typeof renderScrollComponent;
  if (BooleanResult) {
    const prototype = renderScrollComponent.prototype;
    let isReactComponent;
    if (null != prototype) {
      isReactComponent = prototype.isReactComponent;
    }
    BooleanResult = Boolean(isReactComponent);
  }
  return BooleanResult;
};
export const getValidComponent = function getValidComponent(ListEmptyComponent) {
  let tmp = ListEmptyComponent;
  if (!React.isValidElement(ListEmptyComponent)) {
    let element = null;
    if (null != ListEmptyComponent) {
      element = React.createElement(ListEmptyComponent);
    }
    tmp = element;
  }
  return tmp;
};
