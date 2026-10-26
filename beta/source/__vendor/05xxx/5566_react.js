// Module ID: 5566
// Function ID: 5567
// Name: react
// Dependencies: [19, 5518]
// Exports: useMappingHelper

// Module 5566 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5518 */;

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
