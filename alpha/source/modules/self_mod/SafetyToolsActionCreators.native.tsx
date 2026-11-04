// Module ID: 11484
// Function ID: 11485
// Name: SafetyToolsActionCreators
// Dependencies: [11444, 5382, 11485, 2123, 2]
// Exports: openSafetyToolsActionSheet

// Module 11484 (SafetyToolsActionCreators)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import Constants from "Constants" /* 11444 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_3 = Constants.getSafetyToolsActionSheetKey;
const result = size.fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export function openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType) {
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
  obj.openLazy(require("asyncRequire")(11485, dependencyMap.paths), tmp, obj2);
}
