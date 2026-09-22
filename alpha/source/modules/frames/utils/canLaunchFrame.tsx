// Module ID: 9600
// Function ID: 9601
// Name: canLaunchFrame
// Dependencies: [1074, 9409, 9140, 2]
// Exports: canLaunchFrame

// Module 9600 (canLaunchFrame)
import Constants from "Constants" /* 1074 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9409 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
const result = size.fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let hasApplicationFlagResult = tmp(9140).hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      const tmpResult = tmp(9140);
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult2.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = AppLauncherUtils;
  }
  return false;
};
