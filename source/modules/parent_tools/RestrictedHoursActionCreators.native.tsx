// Module ID: 15851
// Function ID: 121153
// Name: closeRestrictedHoursModal
// Dependencies: []
// Exports: openRestrictedHoursModal

// Module 15851 (closeRestrictedHoursModal)
function closeRestrictedHoursModal() {
  importDefault(dependencyMap[1]).popWithKey(closure_4);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = "RESTRICTED_HOURS_MODAL_KEY";
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/parent_tools/RestrictedHoursActionCreators.native.tsx");

export const openRestrictedHoursModal = function openRestrictedHoursModal() {
  let obj = importDefault(tmp);
  // CreateGeneratorClosureLongIndex (0x67)
  obj = { onClose: closeRestrictedHoursModal };
  obj.pushLazy(callback(dependencyMap[1]), obj, closure_4, {});
};
export { closeRestrictedHoursModal };
