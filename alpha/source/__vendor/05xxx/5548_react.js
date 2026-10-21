// Module ID: 5548
// Function ID: 5549
// Name: react
// Dependencies: [19, 5500]
// Exports: useMappingHelper

// Module 5548 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5500 */;

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
