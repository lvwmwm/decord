// Module ID: 10306
// Function ID: 10307
// Name: openSafetyToolsActionSheet
// Dependencies: [10272, 4270, 10307, 1988, 2]
// Exports: openSafetyToolsActionSheet

// Module 10306 (openSafetyToolsActionSheet)
import { getSafetyToolsActionSheetKey as closure_3 } from "LOCATION_CONTEXT_MOBILE";

const result = require("SafetyToolsActionSheet").fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export const openSafetyToolsActionSheet = function openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType) {
  const tmp = callback(channelId);
  const require = tmp;
  let obj = importDefault(4270);
  obj = {
    channelId,
    warningId,
    warningType,
    recipientId,
    onClose() {
      outer1_1(outer1_2[1]).hideActionSheet(closure_0);
    }
  };
  obj.openLazy(require(1988) /* asyncRequireImpl */(10307, dependencyMap.paths), tmp, obj);
};
