// Module ID: 10896
// Function ID: 10897
// Name: useToggleDraft
// Dependencies: [32, 19, 2]
// Exports: useToggleDraft

// Module 10896 (useToggleDraft)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/settings/useToggleDraft.tsx");

export function useToggleDraft(stateFromStores, callback) {
  let checked;
  let setChecked;
  let closure_0 = callback;
  [checked, setChecked] = react.useState(null);
  const obj = react;
  const tmp3 = null != checked && checked === stateFromStores;
  if (tmp3) {
    setChecked(null);
  }
  let changed = null != checked;
  if (changed) {
    let flag2 = stateFromStores;
    if (stateFromStores == null) {
      flag2 = false;
    }
    changed = checked !== flag2;
  }
  const items = [changed, checked, callback];
  const save = obj.useCallback(() => {
    let tmp = !changed;
    if (changed) {
      tmp = null == checked;
    }
    if (!tmp) {
      tmp = closure_0(checked);
    }
    return tmp;
  }, items);
  if (checked == null) {
    checked = stateFromStores;
  }
  if (checked == null) {
    checked = false;
  }
  return { checked, changed, setChecked, save };
}
