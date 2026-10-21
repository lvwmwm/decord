// Module ID: 18555
// Function ID: 18556
// Name: RestrictedHoursActionCreators
// Dependencies: [5, 6651, 18556, 2002, 2]
// Exports: openRestrictedHoursModal

// Module 18555 (RestrictedHoursActionCreators)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
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
