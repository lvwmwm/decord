// Module ID: 8778
// Function ID: 8779
// Name: canLaunchFrame
// Dependencies: [1086, 8587, 8318, 2]
// Exports: canLaunchFrame

// Module 8778 (canLaunchFrame)
import Constants from "Constants" /* 1086 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 8318 */;
import AppLauncherUtils from "AppLauncherUtils" /* 8587 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
const result = size.fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    const obj = AppLauncherUtils;
    if (obj.isRealApplication(application)) {
      const tmpResult = ApplicationFlagUtils;
      let hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      const tmpResult2 = ApplicationFlagUtils;
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult2.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
  }
  return false;
};
