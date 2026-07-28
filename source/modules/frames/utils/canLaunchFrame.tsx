// Module ID: 10481
// Function ID: 81100
// Name: canLaunchFrame
// Dependencies: [653, 7990, 5674, 2]
// Exports: canLaunchFrame

// Module 10481 (canLaunchFrame)
import { ApplicationFlags } from "ME";

const result = require("getApplicationFlags").fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let hasApplicationFlagResult = require(5674) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      const obj2 = require(5674) /* getApplicationFlags */;
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = obj3.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = require(7990) /* _createForOfIteratorHelperLoose */;
  }
  return false;
};
