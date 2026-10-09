// Module ID: 10390
// Function ID: 10391
// Name: SafetyToolsActionCreators
// Dependencies: [10348, 5055, 10391, 2000, 2]
// Exports: openSafetyToolsActionSheet

// Module 10390 (SafetyToolsActionCreators)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import Constants from "Constants" /* 10348 */;
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
  obj.openLazy(require("asyncRequire")(10391, dependencyMap.paths), tmp, obj2);
};
