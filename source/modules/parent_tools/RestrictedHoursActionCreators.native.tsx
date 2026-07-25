// Module ID: 16026
// Function ID: 123816
// Name: closeRestrictedHoursModal
// Dependencies: [5, 4338, 16027, 1935, 2]
// Exports: openRestrictedHoursModal

// Module 16026 (closeRestrictedHoursModal)
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
function closeRestrictedHoursModal() {
  importDefault(4338).popWithKey(RESTRICTED_HOURS_MODAL_KEY);
}
const RESTRICTED_HOURS_MODAL_KEY = "RESTRICTED_HOURS_MODAL_KEY";
const result = require("RestrictedHoursLogoutBlockingLayer").fileFinishedImporting("modules/parent_tools/RestrictedHoursActionCreators.native.tsx");

export const openRestrictedHoursModal = function openRestrictedHoursModal() {
  let obj = importDefault(tmp);
  // CreateGeneratorClosureLongIndex (0x67)
  obj = { onClose: closeRestrictedHoursModal };
  obj.pushLazy(callback(4338), obj, RESTRICTED_HOURS_MODAL_KEY, { animation: "none", presentation: "fullScreenModal" });
};
export { closeRestrictedHoursModal };
