// Module ID: 17593
// Function ID: 17594
// Name: DesignTogglesActions
// Dependencies: [6987, 584, 2]
// Exports: clearAll, toggle

// Module 17593 (DesignTogglesActions)
import DispatcherDefault from "Dispatcher" /* 584 */;
import DesignTogglesStore from "DesignTogglesStore" /* 6987 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/devtools/design_toggles/DesignTogglesActions.tsx");

export function toggle(toggle, flag) {
  let tmp = flag;
  if (typeof flag !== "boolean") {
    tmp = !DesignTogglesStore.get(toggle);
  }
  const obj = DispatcherDefault;
  const obj2 = { type: "DEV_TOOLS_DESIGN_TOGGLE_SET", toggle, value: tmp };
  obj.dispatch(obj2);
}
export function clearAll() {
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
}
