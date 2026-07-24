// Module ID: 5430
// Function ID: 46523
// Name: useMappingHelper
// Dependencies: [31, 5378]
// Exports: useMappingHelper

// Module 5430 (useMappingHelper)
require("result").useCallback;

export const useMappingHelper = function useMappingHelper() {
  let obj = recyclerViewContext(5378);
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
