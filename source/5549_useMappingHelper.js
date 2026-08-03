// Module ID: 5549
// Function ID: 5550
// Name: useMappingHelper
// Dependencies: [19, 5501]
// Exports: useMappingHelper

// Module 5549 (useMappingHelper)
require("noop").useCallback;

export const useMappingHelper = () => {
  let obj = recyclerViewContext(5501);
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
