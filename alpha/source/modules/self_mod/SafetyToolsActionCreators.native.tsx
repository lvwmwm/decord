// Module ID: 11140
// Function ID: 11141
// Name: SafetyToolsActionCreators
// Dependencies: [11110, 4830, 11141, 1981, 2]
// Exports: openSafetyToolsActionSheet

// Module 11140 (SafetyToolsActionCreators)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import Constants from "Constants" /* 11110 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_3 = Constants.getSafetyToolsActionSheetKey;
const result = size.fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export const openSafetyToolsActionSheet = function openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType) {
  const tmp = closure_3(channelId);
  _require = tmp;
  ActionSheetActionCreatorsDefault.openLazy(require("asyncRequireImpl")(11141, dependencyMap.paths), tmp, {
    channelId,
    warningId,
    warningType,
    recipientId,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_0);
    }
  });
};
