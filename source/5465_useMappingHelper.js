// Module ID: 5465
// Function ID: 46656
// Name: useMappingHelper
// Dependencies: [31, 5413]
// Exports: useMappingHelper

// Module 5465 (useMappingHelper)
require("result").useCallback;

export const useMappingHelper = function useMappingHelper() {
  let obj = recyclerViewContext(5413);
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
