// Module ID: 11290
// Function ID: 11291
// Name: canLaunchContextlessFrame
// Dependencies: [1087, 9606, 2031, 5608, 6790, 2]
// Exports: canLaunchContextlessFrame

// Module 11290 (canLaunchContextlessFrame)
import Constants from "Constants" /* 1087 */;
import EmbeddedSurfaceUtils from "EmbeddedSurfaceUtils" /* 2031 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 6790 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9606 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
let result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export const canLaunchContextlessFrame = function canLaunchContextlessFrame(application) {
  if (null != application) {
    const obj = AppLauncherUtils;
    if (obj.isRealApplication(application)) {
      const tmpResult = EmbeddedSurfaceUtils;
      let result = tmpResult.supportsEmbeddedSurface(application, tmp(5608).EmbeddedSurfaceType.MAIN);
      const tmpResult2 = ApplicationFlagUtils;
      if (result) {
        result = tmpResult2.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return result;
    }
  }
  return false;
};
