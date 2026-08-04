// Module ID: 10509
// Function ID: 10510
// Name: canLaunchFrame
// Dependencies: [676, 8149, 7510, 2]
// Exports: canLaunchFrame

// Module 10509 (canLaunchFrame)
import { ApplicationFlags } from "ME";

const result = require("getApplicationFlags").fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let tmpResult = tmp(7510);
      let hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      tmpResult = tmp(7510);
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = require(8149) /* getShelfBadgeTypeIfActive */;
  }
  return false;
};
