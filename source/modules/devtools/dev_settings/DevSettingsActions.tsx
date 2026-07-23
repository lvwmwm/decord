// Module ID: 14662
// Function ID: 111749
// Name: toggle
// Dependencies: [4129, 686, 2]
// Exports: clearAll

// Module 14662 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function toggle(toggle) {
  let tmp = arg1;
  if ("boolean" !== typeof arg1) {
    tmp = !_isNativeReflectConstruct.get(toggle);
  }
  let obj = importDefault(686);
  obj = { type: "DEV_TOOLS_DEV_SETTING_SET", toggle, value: tmp };
  obj.dispatch(obj);
}
const result = require("set").fileFinishedImporting("modules/devtools/dev_settings/DevSettingsActions.tsx");

export { toggle };
export const clearAll = function clearAll() {
  for (const key10006 in _isNativeReflectConstruct.enabled()) {
    let tmp = key10006;
    let tmp2 = toggle;
    let tmp3 = toggle(key10006, false);
    continue;
  }
};
