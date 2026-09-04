// Module ID: 11323
// Function ID: 11324
// Name: openSafetyToolsActionSheet
// Dependencies: [11295, 4448, 11324, 2008, 2]
// Exports: openSafetyToolsActionSheet

// Module 11323 (openSafetyToolsActionSheet)
import set from "set" /* 2 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;
import LOCATION_CONTEXT_MOBILE from "LOCATION_CONTEXT_MOBILE" /* 11295 */;

let closure_3 = LOCATION_CONTEXT_MOBILE.getSafetyToolsActionSheetKey;
const result = set.fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export const openSafetyToolsActionSheet = function openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType) {
  const tmp = callback(channelId);
  const _require = tmp;
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    channelId,
    warningId,
    warningType,
    recipientId,
    onClose() {
      closure_1_1(closure_1_2[1]).hideActionSheet(closure_0);
    }
  };
  obj.openLazy(_require(2008)(11324, dependencyMap.paths), tmp, obj);
};
