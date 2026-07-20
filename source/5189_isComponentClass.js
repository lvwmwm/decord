// Module ID: 5189
// Function ID: 43984
// Name: isComponentClass
// Dependencies: []
// Exports: getValidComponent, isComponentClass

// Module 5189 (isComponentClass)
let closure_0 = importDefault(dependencyMap[0]);

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
