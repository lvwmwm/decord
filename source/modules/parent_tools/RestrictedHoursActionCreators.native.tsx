// Module ID: 16077
// Function ID: 124019
// Name: closeRestrictedHoursModal
// Dependencies: [5, 4372, 16078, 1935, 2]
// Exports: openRestrictedHoursModal

// Module 16077 (closeRestrictedHoursModal)
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
function closeRestrictedHoursModal() {
  importDefault(4372).popWithKey(RESTRICTED_HOURS_MODAL_KEY);
}
const RESTRICTED_HOURS_MODAL_KEY = "RESTRICTED_HOURS_MODAL_KEY";
const result = require("RestrictedHoursLogoutBlockingLayer").fileFinishedImporting("modules/parent_tools/RestrictedHoursActionCreators.native.tsx");

export const openRestrictedHoursModal = function openRestrictedHoursModal() {
  let obj = importDefault(tmp);
  // CreateGeneratorClosureLongIndex (0x67)
  obj = { onClose: closeRestrictedHoursModal };
  obj.pushLazy(callback(4372), obj, RESTRICTED_HOURS_MODAL_KEY, { animation: "none", presentation: "fullScreenModal" });
};
export { closeRestrictedHoursModal };
