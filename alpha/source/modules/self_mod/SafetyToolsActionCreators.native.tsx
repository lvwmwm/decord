// Module ID: 10401
// Function ID: 10402
// Name: SafetyToolsActionCreators
// Dependencies: [10361, 5054, 10402, 1999, 2]
// Exports: openSafetyToolsActionSheet

// Module 10401 (SafetyToolsActionCreators)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Constants from "Constants" /* 10361 */;
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
  obj.openLazy(require("asyncRequire")(10402, dependencyMap.paths), tmp, obj2);
};
