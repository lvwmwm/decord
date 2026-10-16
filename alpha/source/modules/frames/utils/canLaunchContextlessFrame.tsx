// Module ID: 11141
// Function ID: 11142
// Name: canLaunchContextlessFrame
// Dependencies: [1087, 9483, 2032, 7261, 6288, 2]
// Exports: canLaunchContextlessFrame

// Module 11141 (canLaunchContextlessFrame)
import Constants from "Constants" /* 1087 */;
import EmbeddedSurfaceUtils from "EmbeddedSurfaceUtils" /* 2032 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 6288 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9483 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
let result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export const canLaunchContextlessFrame = function canLaunchContextlessFrame(application) {
  if (null != application) {
    const obj = AppLauncherUtils;
    if (obj.isRealApplication(application)) {
      const tmpResult = EmbeddedSurfaceUtils;
      let result = tmpResult.supportsEmbeddedSurface(application, tmp(7261).EmbeddedSurfaceType.MAIN);
      const tmpResult2 = ApplicationFlagUtils;
      if (result) {
        result = tmpResult2.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return result;
    }
  }
  return false;
};
