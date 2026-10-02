// Module ID: 15280
// Function ID: 15281
// Name: DevSettingsActions
// Dependencies: [4836, 585, 2]
// Exports: clearAll, toggle

// Module 15280 (DevSettingsActions)
import DispatcherDefault from "Dispatcher" /* 585 */;
import DevSettingsStore from "DevSettingsStore" /* 4836 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/devtools/dev_settings/DevSettingsActions.tsx");

export const toggle = function toggle(toggle, flag) {
  let tmp = flag;
  if (typeof flag !== "boolean") {
    tmp = !DevSettingsStore.get(toggle);
  }
  const obj = DispatcherDefault;
  const obj2 = { type: "DEV_TOOLS_DEV_SETTING_SET", toggle, value: tmp };
  obj.dispatch(obj2);
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
