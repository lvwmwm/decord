// Module ID: 5564
// Function ID: 5565
// Name: react
// Dependencies: [19, 5516]
// Exports: useMappingHelper

// Module 5564 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5516 */;

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
