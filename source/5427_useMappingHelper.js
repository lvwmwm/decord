// Module ID: 5427
// Function ID: 46499
// Name: useMappingHelper
// Dependencies: []
// Exports: useMappingHelper

// Module 5427 (useMappingHelper)
require(dependencyMap[0]).useCallback;

export const useMappingHelper = function useMappingHelper() {
  let obj = require(dependencyMap[1]);
  const recyclerViewContext = obj.useRecyclerViewContext();
  const require = recyclerViewContext;
  obj = {
    getMappingKey: useCallback((arg0, arg1) => {
      let tmp = arg0;
      if (recyclerViewContext) {
        tmp = arg1;
      }
      return tmp;
    }, items)
  };
  const items = [recyclerViewContext];
  return obj;
};
