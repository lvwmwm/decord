// Module ID: 16979
// Function ID: 16980
// Name: DesignTogglesActions
// Dependencies: [6913, 584, 2]
// Exports: clearAll, toggle

// Module 16979 (DesignTogglesActions)
import DispatcherDefault from "Dispatcher" /* 584 */;
import DesignTogglesStore from "DesignTogglesStore" /* 6913 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/devtools/design_toggles/DesignTogglesActions.tsx");

export const toggle = function toggle(toggle, flag) {
  let tmp = flag;
  if (typeof flag !== "boolean") {
    tmp = !DesignTogglesStore.get(toggle);
  }
  const obj = DispatcherDefault;
  const obj2 = { type: "DEV_TOOLS_DESIGN_TOGGLE_SET", toggle, value: tmp };
  obj.dispatch(obj2);
};
export const clearAll = function clearAll() {
  for (const key10005 in DesignTogglesStore.all()) {
    let flag = false;
    if (typeof false !== "boolean") {
      flag = !DesignTogglesStore.get(key10005);
    }
    let obj = DispatcherDefault;
    let obj2 = { type: "DEV_TOOLS_DESIGN_TOGGLE_SET", toggle: key10005, value: flag };
    let dispatchResult = obj.dispatch(obj2);
    continue;
  }
};
