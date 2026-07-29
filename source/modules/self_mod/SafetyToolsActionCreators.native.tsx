// Module ID: 10158
// Function ID: 10159
// Name: openSafetyToolsActionSheet
// Dependencies: [10159, 4157, 10160, 1959, 2]
// Exports: openSafetyToolsActionSheet

// Module 10158 (openSafetyToolsActionSheet)
import { getSafetyToolsActionSheetKey as closure_3 } from "LOCATION_CONTEXT_MOBILE";

const result = require("SafetyToolsActionSheet").fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export const openSafetyToolsActionSheet = function openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType) {
  const tmp = callback(channelId);
  const require = tmp;
  let obj = importDefault(4157);
  obj = {
    channelId,
    warningId,
    warningType,
    recipientId,
    onClose() {
      outer1_1(outer1_2[1]).hideActionSheet(closure_0);
    }
  };
  obj.openLazy(require(1959) /* asyncRequireImpl */(10160, dependencyMap.paths), tmp, obj);
};
