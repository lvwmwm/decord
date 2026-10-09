// Module ID: 10768
// Function ID: 10769
// Name: canLaunchContextlessFrame
// Dependencies: [1085, 9219, 2029, 8594, 9205, 2]
// Exports: canLaunchContextlessFrame

// Module 10768 (canLaunchContextlessFrame)
import Constants from "Constants" /* 1085 */;
import EmbeddedSurfaceUtils from "EmbeddedSurfaceUtils" /* 2029 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 9205 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9219 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
let result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export const canLaunchContextlessFrame = function canLaunchContextlessFrame(application) {
  if (null != application) {
    const obj = AppLauncherUtils;
    if (obj.isRealApplication(application)) {
      const tmpResult = EmbeddedSurfaceUtils;
      let result = tmpResult.supportsEmbeddedSurface(application, tmp(8594).EmbeddedSurfaceType.MAIN);
      const tmpResult2 = ApplicationFlagUtils;
      if (result) {
        result = tmpResult2.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return result;
    }
  }
  return false;
};
