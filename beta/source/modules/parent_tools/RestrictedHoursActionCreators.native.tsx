// Module ID: 17725
// Function ID: 17726
// Name: RestrictedHoursActionCreators
// Dependencies: [5, 4993, 17726, 1984, 2]
// Exports: openRestrictedHoursModal

// Module 17725 (RestrictedHoursActionCreators)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

const require = fn;
function closeRestrictedHoursModal() {
  ModalActionCreatorsDefault.popWithKey(RESTRICTED_HOURS_MODAL_KEY);
}
const RESTRICTED_HOURS_MODAL_KEY = "RESTRICTED_HOURS_MODAL_KEY";
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/RestrictedHoursActionCreators.native.tsx");

export const openRestrictedHoursModal = function openRestrictedHoursModal() {
  ModalActionCreatorsDefault.pushLazy(asyncGeneratorStep(async () => {
    await require("asyncRequireImpl")(paths[2], paths.paths);
    return arg1.default;
  }), { onClose: closeRestrictedHoursModal }, RESTRICTED_HOURS_MODAL_KEY, { animation: "none", presentation: "fullScreenModal" });
};
export { closeRestrictedHoursModal };
