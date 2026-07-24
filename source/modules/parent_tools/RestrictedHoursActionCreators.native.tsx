// Module ID: 16015
// Function ID: 123648
// Name: closeRestrictedHoursModal
// Dependencies: [5, 4337, 16016, 1934, 2]
// Exports: openRestrictedHoursModal

// Module 16015 (closeRestrictedHoursModal)
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
function closeRestrictedHoursModal() {
  importDefault(4337).popWithKey(RESTRICTED_HOURS_MODAL_KEY);
}
const RESTRICTED_HOURS_MODAL_KEY = "RESTRICTED_HOURS_MODAL_KEY";
const result = require("RestrictedHoursLogoutBlockingLayer").fileFinishedImporting("modules/parent_tools/RestrictedHoursActionCreators.native.tsx");

export const openRestrictedHoursModal = function openRestrictedHoursModal() {
  let obj = importDefault(tmp);
  // CreateGeneratorClosureLongIndex (0x67)
  obj = { onClose: closeRestrictedHoursModal };
  obj.pushLazy(callback(4337), obj, RESTRICTED_HOURS_MODAL_KEY, { animation: "none", presentation: "fullScreenModal" });
};
export { closeRestrictedHoursModal };
