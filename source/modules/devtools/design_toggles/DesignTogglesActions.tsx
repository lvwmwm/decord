// Module ID: 14727
// Function ID: 112241
// Name: toggle
// Dependencies: [5090, 686, 2]
// Exports: clearAll

// Module 14727 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function toggle(toggle) {
  let tmp = arg1;
  if ("boolean" !== typeof arg1) {
    tmp = !_isNativeReflectConstruct.get(toggle);
  }
  let obj = importDefault(686);
  obj = { type: "DEV_TOOLS_DESIGN_TOGGLE_SET", toggle, value: tmp };
  obj.dispatch(obj);
}
const result = require("set").fileFinishedImporting("modules/devtools/design_toggles/DesignTogglesActions.tsx");

export { toggle };
export const clearAll = function clearAll() {
  for (const key10006 in _isNativeReflectConstruct.all()) {
    let tmp = key10006;
    let tmp2 = toggle;
    let tmp3 = toggle(key10006, false);
    continue;
  }
};
