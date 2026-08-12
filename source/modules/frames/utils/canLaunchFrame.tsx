// Module ID: 10653
// Function ID: 10654
// Name: canLaunchFrame
// Dependencies: [676, 8382, 7630, 2]
// Exports: canLaunchFrame

// Module 10653 (canLaunchFrame)
import { ApplicationFlags } from "ME";

const result = require("getApplicationFlags").fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let tmpResult = tmp(7630);
      let hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      tmpResult = tmp(7630);
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = require(8382) /* getShelfBadgeTypeIfActive */;
  }
  return false;
};
