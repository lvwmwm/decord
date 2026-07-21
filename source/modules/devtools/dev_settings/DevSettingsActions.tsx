// Module ID: 14537
// Function ID: 109514
// Name: toggle
// Dependencies: []
// Exports: clearAll

// Module 14537 (toggle)
function toggle(toggle) {
  let tmp = arg1;
  if ("boolean" !== typeof arg1) {
    tmp = !closure_2.get(toggle);
  }
  let obj = importDefault(dependencyMap[1]);
  obj = { type: "DEV_TOOLS_DEV_SETTING_SET", toggle, value: tmp };
  obj.dispatch(obj);
}
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/devtools/dev_settings/DevSettingsActions.tsx");

export { toggle };
export const clearAll = function clearAll() {
  for (const key10006 in closure_2.enabled()) {
    let tmp = key10006;
    let tmp2 = closure_3;
    let tmp3 = closure_3(key10006, false);
  }
};
