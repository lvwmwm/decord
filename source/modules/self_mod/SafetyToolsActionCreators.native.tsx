// Module ID: 10378
// Function ID: 10379
// Name: openSafetyToolsActionSheet
// Dependencies: [10344, 4271, 10379, 2007, 2]
// Exports: openSafetyToolsActionSheet

// Module 10378 (openSafetyToolsActionSheet)
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
  obj.openLazy(require(2007) /* asyncRequireImpl */(10379, dependencyMap.paths), tmp, obj);
};
