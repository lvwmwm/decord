// Module ID: 17213
// Function ID: 17214
// Name: closeRestrictedHoursModal
// Dependencies: [5, 4731, 17214, 2008, 2]
// Exports: openRestrictedHoursModal

// Module 17213 (closeRestrictedHoursModal)
import _modDef4731 from "module_4731" /* 4731 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;

const require = arg1;
function closeRestrictedHoursModal() {
  _modDef4731.popWithKey(RESTRICTED_HOURS_MODAL_KEY);
}
const RESTRICTED_HOURS_MODAL_KEY = "RESTRICTED_HOURS_MODAL_KEY";
const result = require("set").fileFinishedImporting("modules/parent_tools/RestrictedHoursActionCreators.native.tsx");

export const openRestrictedHoursModal = function openRestrictedHoursModal() {
  let obj = _modDef4731;
  obj = { onClose: closeRestrictedHoursModal };
  obj.pushLazy(callback(function*() {
    yield v0(closure_1_2[3])(closure_1_2[2], closure_1_2.paths);
    return arg1.default;
  }), obj, RESTRICTED_HOURS_MODAL_KEY, { animation: "none", presentation: "fullScreenModal" });
};
export { closeRestrictedHoursModal };
