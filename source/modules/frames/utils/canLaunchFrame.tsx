// Module ID: 10680
// Function ID: 10681
// Name: canLaunchFrame
// Dependencies: [676, 8493, 7733, 2]
// Exports: canLaunchFrame

// Module 10680 (canLaunchFrame)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getShelfBadgeTypeIfActive from "getShelfBadgeTypeIfActive" /* 8493 */;

const ApplicationFlags = ME.ApplicationFlags;
const result = set.fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let tmpResult = tmp(7733);
      let hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      tmpResult = tmp(7733);
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = getShelfBadgeTypeIfActive;
  }
  return false;
};
