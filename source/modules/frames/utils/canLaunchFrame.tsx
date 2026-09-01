// Module ID: 9470
// Function ID: 9471
// Name: canLaunchFrame
// Dependencies: [676, 8145, 8436, 2]
// Exports: canLaunchFrame

// Module 9470 (canLaunchFrame)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getShelfBadgeTypeIfActive from "getShelfBadgeTypeIfActive" /* 8145 */;

const ApplicationFlags = ME.ApplicationFlags;
const result = set.fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let tmpResult = tmp(8436);
      let hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      tmpResult = tmp(8436);
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = getShelfBadgeTypeIfActive;
  }
  return false;
};
