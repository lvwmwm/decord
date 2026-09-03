// Module ID: 9487
// Function ID: 9488
// Name: canLaunchFrame
// Dependencies: [673, 8157, 8449, 2]
// Exports: canLaunchFrame

// Module 9487 (canLaunchFrame)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getShelfBadgeTypeIfActive from "getShelfBadgeTypeIfActive" /* 8157 */;

const ApplicationFlags = ME.ApplicationFlags;
const result = set.fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let tmpResult = tmp(8449);
      let hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      tmpResult = tmp(8449);
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = getShelfBadgeTypeIfActive;
  }
  return false;
};
