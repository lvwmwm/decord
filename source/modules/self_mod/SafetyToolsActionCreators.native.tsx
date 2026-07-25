// Module ID: 10097
// Function ID: 78247
// Name: openSafetyToolsActionSheet
// Dependencies: [10098, 4099, 10099, 1935, 2]
// Exports: openSafetyToolsActionSheet

// Module 10097 (openSafetyToolsActionSheet)
import { getSafetyToolsActionSheetKey as closure_3 } from "LOCATION_CONTEXT_MOBILE";

const result = require("SafetyToolsActionSheet").fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export const openSafetyToolsActionSheet = function openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType) {
  const tmp = callback(channelId);
  const require = tmp;
  let obj = importDefault(4099);
  obj = {
    channelId,
    warningId,
    warningType,
    recipientId,
    onClose() {
      outer1_1(outer1_2[1]).hideActionSheet(closure_0);
    }
  };
  obj.openLazy(require(1935) /* maybeLoadBundle */(10099, dependencyMap.paths), tmp, obj);
};
