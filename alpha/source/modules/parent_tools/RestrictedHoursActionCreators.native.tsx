// Module ID: 17899
// Function ID: 17900
// Name: RestrictedHoursActionCreators
// Dependencies: [5, 5941, 17900, 2000, 2]
// Exports: openRestrictedHoursModal

// Module 17899 (RestrictedHoursActionCreators)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function closeRestrictedHoursModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(RESTRICTED_HOURS_MODAL_KEY);
}
const RESTRICTED_HOURS_MODAL_KEY = "RESTRICTED_HOURS_MODAL_KEY";
const result = size.fileFinishedImporting("modules/parent_tools/RestrictedHoursActionCreators.native.tsx");

export const openRestrictedHoursModal = function openRestrictedHoursModal() {
  let paths;
  const obj = ModalActionCreatorsDefault;
  const obj2 = { onClose: closeRestrictedHoursModal };
  obj.pushLazy(_asyncToGenerator(async () => {
    let c0;
    let c1;
    await require("asyncRequire")(paths[2], paths.paths);
    return arg1.default;
  }), obj2, RESTRICTED_HOURS_MODAL_KEY, { animation: "none", presentation: "fullScreenModal" });
};
export { closeRestrictedHoursModal };
