// Module ID: 6416
// Function ID: 6417
// Name: react
// Dependencies: [19, 6368]
// Exports: useMappingHelper

// Module 6416 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6368 */;

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
