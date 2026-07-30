// Module ID: 10501
// Function ID: 10502
// Name: canLaunchFrame
// Dependencies: [676, 8012, 5692, 2]
// Exports: canLaunchFrame

// Module 10501 (canLaunchFrame)
import { ApplicationFlags } from "ME";

const result = require("getApplicationFlags").fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let tmpResult = tmp(5692);
      let hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      tmpResult = tmp(5692);
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = require(8012) /* getShelfBadgeTypeIfActive */;
  }
  return false;
};
