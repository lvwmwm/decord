// Module ID: 9636
// Function ID: 9637
// Name: canLaunchFrame
// Dependencies: [1074, 9418, 8981, 2]
// Exports: canLaunchFrame

// Module 9636 (canLaunchFrame)
import Constants from "Constants" /* 1074 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9418 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
const result = size.fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let hasApplicationFlagResult = tmp(8981).hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      const tmpResult = tmp(8981);
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult2.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = AppLauncherUtils;
  }
  return false;
};
