// Module ID: 5483
// Function ID: 5484
// Name: useMappingHelper
// Dependencies: [19, 5435]
// Exports: useMappingHelper

// Module 5483 (useMappingHelper)
require("noop").useCallback;

export const useMappingHelper = () => {
  let obj = recyclerViewContext(5435);
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
