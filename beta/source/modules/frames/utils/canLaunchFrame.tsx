// Module ID: 9590
// Function ID: 9591
// Name: canLaunchFrame
// Dependencies: [1078, 9401, 9133, 2]
// Exports: canLaunchFrame

// Module 9590 (canLaunchFrame)
import Constants from "Constants" /* 1078 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9401 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
const result = size.fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let hasApplicationFlagResult = tmp(9133).hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      const tmpResult = tmp(9133);
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult2.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = AppLauncherUtils;
  }
  return false;
};
