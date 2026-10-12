// Module ID: 6604
// Function ID: 6605
// Name: react
// Dependencies: [19, 6556]
// Exports: useMappingHelper

// Module 6604 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6556 */;

const useCallback = react.useCallback;

export const useMappingHelper = () => {
  let items;
  const obj = react2;
  const recyclerViewContext = obj.useRecyclerViewContext();
  const obj2 = {
    getMappingKey: useCallback((arg0, arg1) => {
      let tmp = arg0;
      const tmp2 = recyclerViewContext;
      if (tmp2) {
        tmp = arg1;
      }
      return tmp;
    }, items)
  };
  items = [recyclerViewContext];
  return obj2;
};
