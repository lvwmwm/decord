// Module ID: 10373
// Function ID: 10374
// Name: openSafetyToolsActionSheet
// Dependencies: [10339, 4271, 10374, 1988, 2]
// Exports: openSafetyToolsActionSheet

// Module 10373 (openSafetyToolsActionSheet)
import { getSafetyToolsActionSheetKey as closure_3 } from "LOCATION_CONTEXT_MOBILE";

const result = require("SafetyToolsActionSheet").fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export const openSafetyToolsActionSheet = function openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType) {
  const tmp = callback(channelId);
  const require = tmp;
  let obj = importDefault(4271);
  obj = {
    channelId,
    warningId,
    warningType,
    recipientId,
    onClose() {
      outer1_1(outer1_2[1]).hideActionSheet(closure_0);
    }
  };
  obj.openLazy(require(1988) /* asyncRequireImpl */(10374, dependencyMap.paths), tmp, obj);
};
