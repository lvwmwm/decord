// Module ID: 10617
// Function ID: 10618
// Name: canLaunchContextlessFrame
// Dependencies: [1085, 9185, 2028, 8586, 9138, 2]
// Exports: canLaunchContextlessFrame

// Module 10617 (canLaunchContextlessFrame)
import Constants from "Constants" /* 1085 */;
import EmbeddedSurfaceUtils from "EmbeddedSurfaceUtils" /* 2028 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 9138 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9185 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
let result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export const canLaunchContextlessFrame = function canLaunchContextlessFrame(application) {
  if (null != application) {
    const obj = AppLauncherUtils;
    if (obj.isRealApplication(application)) {
      const tmpResult = EmbeddedSurfaceUtils;
      let result = tmpResult.supportsEmbeddedSurface(application, tmp(8586).EmbeddedSurfaceType.MAIN);
      const tmpResult2 = ApplicationFlagUtils;
      if (result) {
        result = tmpResult2.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return result;
    }
  }
  return false;
};
