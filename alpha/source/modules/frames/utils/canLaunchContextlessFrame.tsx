// Module ID: 8994
// Function ID: 8995
// Name: canLaunchContextlessFrame
// Dependencies: [1085, 8794, 2016, 8514, 8726, 2]
// Exports: canLaunchContextlessFrame

// Module 8994 (canLaunchContextlessFrame)
import Constants from "Constants" /* 1085 */;
import EmbeddedSurfaceUtils from "EmbeddedSurfaceUtils" /* 2016 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 8726 */;
import AppLauncherUtils from "AppLauncherUtils" /* 8794 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
let result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export const canLaunchContextlessFrame = function canLaunchContextlessFrame(application) {
  if (null != application) {
    const obj = AppLauncherUtils;
    if (obj.isRealApplication(application)) {
      const tmpResult = EmbeddedSurfaceUtils;
      let result = tmpResult.supportsEmbeddedSurface(application, tmp(8514).EmbeddedSurfaceType.MAIN);
      const tmpResult2 = ApplicationFlagUtils;
      if (result) {
        result = tmpResult2.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return result;
    }
  }
  return false;
};
