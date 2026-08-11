// Module ID: 16379
// Function ID: 16380
// Name: closeRestrictedHoursModal
// Dependencies: [5, 4509, 16380, 2007, 2]
// Exports: openRestrictedHoursModal

// Module 16379 (closeRestrictedHoursModal)
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
function closeRestrictedHoursModal() {
  importDefault(4509).popWithKey(RESTRICTED_HOURS_MODAL_KEY);
}
const RESTRICTED_HOURS_MODAL_KEY = "RESTRICTED_HOURS_MODAL_KEY";
const result = require("RestrictedHoursLogoutBlockingLayer").fileFinishedImporting("modules/parent_tools/RestrictedHoursActionCreators.native.tsx");

export const openRestrictedHoursModal = function openRestrictedHoursModal() {
  let obj = importDefault(4509);
  obj = { onClose: closeRestrictedHoursModal };
  obj.pushLazy(callback(function*() {
    yield v0(outer1_2[3])(outer1_2[2], outer1_2.paths);
    return arg1.default;
  }), obj, RESTRICTED_HOURS_MODAL_KEY, { animation: "none", presentation: "fullScreenModal" });
};
export { closeRestrictedHoursModal };
