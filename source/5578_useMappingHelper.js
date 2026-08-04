// Module ID: 5578
// Function ID: 5579
// Name: useMappingHelper
// Dependencies: [19, 5530]
// Exports: useMappingHelper

// Module 5578 (useMappingHelper)
require("noop").useCallback;

export const useMappingHelper = () => {
  let obj = recyclerViewContext(5530);
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
