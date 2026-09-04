// Module ID: 9435
// Function ID: 9436
// Name: canLaunchFrame
// Dependencies: [673, 9218, 8786, 2]
// Exports: canLaunchFrame

// Module 9435 (canLaunchFrame)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getShelfBadgeTypeIfActive from "getShelfBadgeTypeIfActive" /* 9218 */;

const ApplicationFlags = ME.ApplicationFlags;
const result = set.fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let tmpResult = tmp(8786);
      let hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      tmpResult = tmp(8786);
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = getShelfBadgeTypeIfActive;
  }
  return false;
};
