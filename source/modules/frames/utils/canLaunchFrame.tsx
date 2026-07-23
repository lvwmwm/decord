// Module ID: 10482
// Function ID: 81142
// Name: canLaunchFrame
// Dependencies: [653, 7919, 7371, 2]
// Exports: canLaunchFrame

// Module 10482 (canLaunchFrame)
import { ApplicationFlags } from "ME";

const result = require("getApplicationFlags").fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let hasApplicationFlagResult = require(7371) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      const obj2 = require(7371) /* getApplicationFlags */;
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = obj3.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = require(7919) /* _createForOfIteratorHelperLoose */;
  }
  return false;
};
