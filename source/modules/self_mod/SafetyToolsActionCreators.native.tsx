// Module ID: 10259
// Function ID: 10260
// Name: openSafetyToolsActionSheet
// Dependencies: [10225, 4223, 10260, 1959, 2]
// Exports: openSafetyToolsActionSheet

// Module 10259 (openSafetyToolsActionSheet)
import { getSafetyToolsActionSheetKey as closure_3 } from "LOCATION_CONTEXT_MOBILE";

const result = require("SafetyToolsActionSheet").fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export const openSafetyToolsActionSheet = function openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType) {
  const tmp = callback(channelId);
  const require = tmp;
  let obj = importDefault(4223);
  obj = {
    channelId,
    warningId,
    warningType,
    recipientId,
    onClose() {
      outer1_1(outer1_2[1]).hideActionSheet(closure_0);
    }
  };
  obj.openLazy(require(1959) /* asyncRequireImpl */(10260, dependencyMap.paths), tmp, obj);
};
