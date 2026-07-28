// Module ID: 10137
// Function ID: 78377
// Name: openSafetyToolsActionSheet
// Dependencies: [10138, 4133, 10139, 1935, 2]
// Exports: openSafetyToolsActionSheet

// Module 10137 (openSafetyToolsActionSheet)
import { getSafetyToolsActionSheetKey as closure_3 } from "LOCATION_CONTEXT_MOBILE";

const result = require("SafetyToolsActionSheet").fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export const openSafetyToolsActionSheet = function openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType) {
  const tmp = callback(channelId);
  const require = tmp;
  let obj = importDefault(4133);
  obj = {
    channelId,
    warningId,
    warningType,
    recipientId,
    onClose() {
      outer1_1(outer1_2[1]).hideActionSheet(closure_0);
    }
  };
  obj.openLazy(require(1935) /* maybeLoadBundle */(10139, dependencyMap.paths), tmp, obj);
};
