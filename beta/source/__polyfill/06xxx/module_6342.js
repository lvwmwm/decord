// Module ID: 6342
// Function ID: 6343
// Dependencies: [19, 6294]
// Exports: useMappingHelper

// Module 6342
import _mod19 from "module_19" /* 19 */;
import _mod6294 from "module_6294" /* 6294 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod6294.useRecyclerViewContext();
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
