// Module ID: 14557
// Function ID: 109713
// Name: toggle
// Dependencies: [30, 3506438160, 2382364714]
// Exports: clearAll

// Module 14557 (toggle)
import _objectWithoutPropertiesLoose from "_objectWithoutPropertiesLoose";

function toggle(toggle) {
  let tmp = arg1;
  if ("boolean" !== typeof arg1) {
    tmp = !_objectWithoutPropertiesLoose.get(toggle);
  }
  let obj = importDefault(dependencyMap[1]);
  obj = { type: "DEV_TOOLS_DESIGN_TOGGLE_SET", toggle, value: tmp };
  obj.dispatch(obj);
}
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/devtools/design_toggles/DesignTogglesActions.tsx");

export { toggle };
export const clearAll = function clearAll() {
  for (const key10006 in _objectWithoutPropertiesLoose.all()) {
    let tmp = key10006;
    let tmp2 = closure_3;
    let tmp3 = closure_3(key10006, false);
  }
};
