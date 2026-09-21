// Module ID: 15993
// Function ID: 15994
// Name: DevSettingsActions
// Dependencies: [4757, 577, 2]
// Exports: clearAll, toggle

// Module 15993 (DevSettingsActions)
import DispatcherDefault from "Dispatcher" /* 577 */;
import DevSettingsStore from "DevSettingsStore" /* 4757 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/dev_settings/DevSettingsActions.tsx");

export const toggle = function toggle(toggle, flag) {
  let tmp = flag;
  if (typeof flag !== "boolean") {
    tmp = !DevSettingsStore.get(toggle);
  }
  DispatcherDefault.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle, value: tmp });
};
export const clearAll = function clearAll() {
  for (const key10005 in DevSettingsStore.enabled()) {
    let flag = false;
    if (typeof false !== "boolean") {
      flag = !DevSettingsStore.get(key10005);
    }
    let obj = DispatcherDefault;
    let obj2 = { type: "DEV_TOOLS_DEV_SETTING_SET", toggle: key10005, value: flag };
    let dispatchResult = obj.dispatch(obj2);
    continue;
  }
};
