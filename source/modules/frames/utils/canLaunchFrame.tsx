// Module ID: 9506
// Function ID: 9507
// Name: canLaunchFrame
// Dependencies: [1074, 9289, 8856, 2]
// Exports: canLaunchFrame

// Module 9506 (canLaunchFrame)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getShelfBadgeTypeIfActive from "getShelfBadgeTypeIfActive" /* 9289 */;

const ApplicationFlags = ME.ApplicationFlags;
const result = set.fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let tmpResult = tmp(8856);
      let hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      tmpResult = tmp(8856);
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = getShelfBadgeTypeIfActive;
  }
  return false;
};
