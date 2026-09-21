// Module ID: 7160
// Function ID: 7161
// Dependencies: [19, 7112]
// Exports: useMappingHelper

// Module 7160
import _mod19 from "module_19" /* 19 */;
import _mod7112 from "module_7112" /* 7112 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod7112.useRecyclerViewContext();
  const obj2 = { getMappingKey: null };
  const items = [recyclerViewContext];
  obj2.getMappingKey = useCallback((arg0, arg1) => {
    let tmp = arg0;
    if (recyclerViewContext) {
      tmp = arg1;
    }
    return tmp;
  }, items);
  return obj2;
};
