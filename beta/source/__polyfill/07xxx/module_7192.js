// Module ID: 7192
// Function ID: 7193
// Dependencies: [19, 7144]
// Exports: useMappingHelper

// Module 7192
import _mod19 from "module_19" /* 19 */;
import _mod7144 from "module_7144" /* 7144 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod7144.useRecyclerViewContext();
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
