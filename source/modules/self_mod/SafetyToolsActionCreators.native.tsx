// Module ID: 10133
// Function ID: 78423
// Name: openSafetyToolsActionSheet
// Dependencies: [10134, 4098, 10135, 1934, 2]
// Exports: openSafetyToolsActionSheet

// Module 10133 (openSafetyToolsActionSheet)
import { getSafetyToolsActionSheetKey as closure_3 } from "LOCATION_CONTEXT_MOBILE";

const result = require("SafetyToolsActionSheet").fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export const openSafetyToolsActionSheet = function openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType) {
  const tmp = callback(channelId);
  const require = tmp;
  let obj = importDefault(4098);
  obj = {
    channelId,
    warningId,
    warningType,
    recipientId,
    onClose() {
      outer1_1(outer1_2[1]).hideActionSheet(closure_0);
    }
  };
  obj.openLazy(require(1934) /* maybeLoadBundle */(10135, dependencyMap.paths), tmp, obj);
};
