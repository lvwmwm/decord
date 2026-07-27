// Module ID: 10443
// Function ID: 80979
// Name: canLaunchFrame
// Dependencies: [653, 7953, 5664, 2]
// Exports: canLaunchFrame

// Module 10443 (canLaunchFrame)
import { ApplicationFlags } from "ME";

const result = require("getApplicationFlags").fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let hasApplicationFlagResult = require(5664) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      const obj2 = require(5664) /* getApplicationFlags */;
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = obj3.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = require(7953) /* _createForOfIteratorHelperLoose */;
  }
  return false;
};
