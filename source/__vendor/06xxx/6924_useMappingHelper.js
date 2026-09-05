// Module ID: 6924
// Function ID: 6925
// Name: useMappingHelper
// Dependencies: [19, 6876]
// Exports: useMappingHelper

// Module 6924 (useMappingHelper)
import noop from "noop" /* 19 */;

noop.useCallback;

export const useMappingHelper = () => {
  let obj = recyclerViewContext(6876);
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
