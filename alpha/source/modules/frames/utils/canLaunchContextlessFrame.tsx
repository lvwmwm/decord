// Module ID: 11125
// Function ID: 11126
// Name: canLaunchContextlessFrame
// Dependencies: [1085, 9467, 2029, 7259, 6286, 2]
// Exports: canLaunchContextlessFrame

// Module 11125 (canLaunchContextlessFrame)
import Constants from "Constants" /* 1085 */;
import EmbeddedSurfaceUtils from "EmbeddedSurfaceUtils" /* 2029 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 6286 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9467 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
let result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export const canLaunchContextlessFrame = function canLaunchContextlessFrame(application) {
  if (null != application) {
    const obj = AppLauncherUtils;
    if (obj.isRealApplication(application)) {
      const tmpResult = EmbeddedSurfaceUtils;
      let result = tmpResult.supportsEmbeddedSurface(application, tmp(7259).EmbeddedSurfaceType.MAIN);
      const tmpResult2 = ApplicationFlagUtils;
      if (result) {
        result = tmpResult2.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return result;
    }
  }
  return false;
};
