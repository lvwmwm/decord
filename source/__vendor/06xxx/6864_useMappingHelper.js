// Module ID: 6864
// Function ID: 6865
// Name: useMappingHelper
// Dependencies: [19, 6816]
// Exports: useMappingHelper

// Module 6864 (useMappingHelper)
import noop from "noop" /* 19 */;

noop.useCallback;

export const useMappingHelper = () => {
  let obj = recyclerViewContext(6816);
  recyclerViewContext = obj.useRecyclerViewContext();
  obj = {
    getMappingKey: useCallback((arg0, arg1) => {
      let tmp = arg0;
      if (recyclerViewContext) {
        tmp = arg1;
      }
      return tmp;
    }, items)
  };
  items = [recyclerViewContext];
  return obj;
};
