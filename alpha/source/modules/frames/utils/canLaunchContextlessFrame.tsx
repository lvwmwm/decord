// Module ID: 11201
// Function ID: 11202
// Name: canLaunchContextlessFrame
// Dependencies: [1087, 9548, 2032, 6297, 6359, 2]
// Exports: canLaunchContextlessFrame

// Module 11201 (canLaunchContextlessFrame)
import Constants from "Constants" /* 1087 */;
import EmbeddedSurfaceUtils from "EmbeddedSurfaceUtils" /* 2032 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 6359 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9548 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
let result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export const canLaunchContextlessFrame = function canLaunchContextlessFrame(application) {
  if (null != application) {
    const obj = AppLauncherUtils;
    if (obj.isRealApplication(application)) {
      const tmpResult = EmbeddedSurfaceUtils;
      let result = tmpResult.supportsEmbeddedSurface(application, tmp(6297).EmbeddedSurfaceType.MAIN);
      const tmpResult2 = ApplicationFlagUtils;
      if (result) {
        result = tmpResult2.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return result;
    }
  }
  return false;
};
