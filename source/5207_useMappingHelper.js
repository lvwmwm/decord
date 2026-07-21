// Module ID: 5207
// Function ID: 44122
// Name: useMappingHelper
// Dependencies: []
// Exports: useMappingHelper

// Module 5207 (useMappingHelper)
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
