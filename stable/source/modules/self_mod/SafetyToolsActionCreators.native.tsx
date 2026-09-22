// Module ID: 11528
// Function ID: 11529
// Name: SafetyToolsActionCreators
// Dependencies: [11500, 4603, 11529, 1896, 2]
// Exports: openSafetyToolsActionSheet

// Module 11528 (SafetyToolsActionCreators)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import Constants from "Constants" /* 11500 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_3 = Constants.getSafetyToolsActionSheetKey;
const result = size.fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export const openSafetyToolsActionSheet = function openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType) {
  const tmp = closure_3(channelId);
  _require = tmp;
  ActionSheetActionCreatorsDefault.openLazy(require("asyncRequireImpl")(11529, dependencyMap.paths), tmp, {
    channelId,
    warningId,
    warningType,
    recipientId,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_0);
    }
  });
};
