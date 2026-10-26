// Module ID: 11356
// Function ID: 11357
// Name: getFrameSurfaces
// Dependencies: [1087, 9649, 2031, 5626, 6811, 2]
// Exports: canOpenFrame, isFrameApp

// Module 11356 (getFrameSurfaces)
import Constants from "Constants" /* 1087 */;
import EmbeddedSurfaceUtils from "EmbeddedSurfaceUtils" /* 2031 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5626 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 6811 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9649 */;
import size from "module_2" /* 2 */;

let set;

function getFrameSurfaces(application) {
  set = new Set();
  if (null != application) {
    const obj5 = AppLauncherUtils;
    if (obj5.isRealApplication(application)) {
      const tmp19Result = EmbeddedSurfaceUtils;
      let result = tmp19Result.supportsEmbeddedSurface(application, tmp19(5626).EmbeddedSurfaceType.MAIN);
      if (result) {
        const tmp19Result2 = ApplicationFlagUtils;
        result = tmp19Result2.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      if (result) {
        set.add(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
      }
      if ("conjureProjectId" in application) {
        if (null != application.conjureProjectId) {
          const items = [EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL];
          for (const item10039 of items) {
            let tmp11 = item10039;
            let obj4 = EmbeddedSurfaceUtils;
            if (obj4.supportsEmbeddedSurface(application, item10039)) {
              let addResult1 = set.add(tmp11);
            }
            continue;
          }
        }
      }
      return set;
    }
  }
  return set;
}
const ApplicationFlags = Constants.ApplicationFlags;
let result = size.fileFinishedImporting("modules/frames/utils/getFrameSurfaces.tsx");

export { getFrameSurfaces };
export const isFrameApp = function isFrameApp(application) {
  return getFrameSurfaces(application).size > 0;
};
export const canOpenFrame = function canOpenFrame(app) {
  const obj = getFrameSurfaces(app);
  let hasItem = obj.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
  if (!hasItem) {
    hasItem = obj.has(EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL);
  }
  return hasItem;
};
