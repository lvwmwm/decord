// Module ID: 7198
// Function ID: 7199
// Dependencies: [19, 7150]
// Exports: useMappingHelper

// Module 7198
import _mod19 from "module_19" /* 19 */;
import _mod7150 from "module_7150" /* 7150 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod7150.useRecyclerViewContext();
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
