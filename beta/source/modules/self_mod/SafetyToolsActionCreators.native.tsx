// Module ID: 9598
// Function ID: 9599
// Name: SafetyToolsActionCreators
// Dependencies: [9557, 4801, 9599, 1987, 2]
// Exports: openSafetyToolsActionSheet

// Module 9598 (SafetyToolsActionCreators)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import Constants from "Constants" /* 9557 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_3 = Constants.getSafetyToolsActionSheetKey;
const result = size.fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export const openSafetyToolsActionSheet = function openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType) {
  let closure_0;
  const tmp = closure_3(channelId);
  _require = tmp;
  let obj = ActionSheetActionCreatorsDefault;
  const obj2 = {
    channelId,
    warningId,
    warningType,
    recipientId,
    onClose() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(closure_0);
    }
  };
  obj.openLazy(require("asyncRequire")(9599, dependencyMap.paths), tmp, obj2);
};
