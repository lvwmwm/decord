// Module ID: 6828
// Function ID: 6829
// Name: react
// Dependencies: [19, 6780]
// Exports: useMappingHelper

// Module 6828 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6780 */;

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
