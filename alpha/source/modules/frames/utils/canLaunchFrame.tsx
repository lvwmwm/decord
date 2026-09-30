// Module ID: 8982
// Function ID: 8983
// Name: canLaunchFrame
// Dependencies: [1074, 8789, 8517, 2]
// Exports: canLaunchFrame

// Module 8982 (canLaunchFrame)
import Constants from "Constants" /* 1074 */;
import AppLauncherUtils from "AppLauncherUtils" /* 8789 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
const result = size.fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let hasApplicationFlagResult = tmp(8517).hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      const tmpResult = tmp(8517);
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult2.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = AppLauncherUtils;
  }
  return false;
};
