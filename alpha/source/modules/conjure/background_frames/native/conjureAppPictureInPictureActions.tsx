// Module ID: 19398
// Function ID: 19399
// Name: conjureAppPictureInPictureActions
// Dependencies: [6981, 6979, 6982, 11062, 16613, 14394, 1113, 3995, 14800, 14608, 12081, 14609, 7500, 12022, 2]
// Exports: openConjureAppPictureInPictureFrame, showConjureAppPictureInPictureActions

// Module 19398 (conjureAppPictureInPictureActions)
import _modDef3995 from "module_3995" /* 3995 */;
import FramesConstants from "FramesConstants" /* 6982 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 7500 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11062 */;
import EmbeddedAppShimExperiment from "EmbeddedAppShimExperiment" /* 12022 */;
import openConjureProjectInBuilderDefault from "openConjureProjectInBuilder" /* 14394 */;
import closeFrameDefault from "closeFrame" /* 14609 */;
import FramesStore from "FramesStore" /* 6981 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6979 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp;
let tmp3;
const getConjureAppSoundButtonDefault = tmp3(14608);
const conjureBackgroundFrames = tmp(16613);
function getConjureAppPictureInPictureActions(id, appName, arg2) {
  let intl;
  let intl2;
  let obj2;
  _require = id;
  let obj = {
    label: intl.formatToPlainString(_modDef3995.dPf03z, obj2),
    IconComponent: require("WindowLaunchIcon").WindowLaunchIcon,
    onPress() {
      const obj = conjurePreviewSurface;
      if (obj.isConjurePreviewSurface(id.surface)) {
        const result = ConjureProjectStore.findProjectByApplicationId(tmp.applicationId);
        if (null != result) {
          openConjureProjectInBuilderDefault(result);
        }
      } else {
        const tmp2Result = conjureBackgroundFrames;
        const result1 = tmp2Result.returnToConjureFrameSurface(tmp);
      }
    }
  };
  const tmp = _require;
  let tmp2 = dependencyMap;
  intl = require("intl").intl;
  const items = [obj];
  obj2 = { appName };
  const tmp4 = arg2;
  if (tmp4) {
    items.push(getConjureAppSoundButtonDefault(id.id, id.data.userMuted));
  }
  const push = items.push;
  const obj3 = {
    label: intl2.string(tmp(1113).t.VkMnR2),
    IconComponent: tmp(12081).DoorExitIcon,
    isDestructive: true,
    onPress() {
      return closeFrameDefault(id.id);
    }
  };
  intl2 = tmp(1113).intl;
  push(obj3);
  return items;
}
const asLaunched = FramesConstants.asLaunched;
const ConjureAppPictureInPicture = "ConjureAppPictureInPicture";
let result = size.fileFinishedImporting("modules/conjure/background_frames/native/conjureAppPictureInPictureActions.tsx");

export const CONJURE_APP_PICTURE_IN_PICTURE_LOCATION = "ConjureAppPictureInPicture";
export function openConjureAppPictureInPictureFrame(surface) {
  const obj = conjurePreviewSurface;
  if (obj.isConjurePreviewSurface(surface.surface)) {
    const result = ConjureProjectStore.findProjectByApplicationId(surface.applicationId);
    if (null != result) {
      openConjureProjectInBuilderDefault(result);
    }
  } else {
    const tmpResult = conjureBackgroundFrames;
    const result1 = tmpResult.returnToConjureFrameSurface(surface);
  }
}
export { getConjureAppPictureInPictureActions };
export function showConjureAppPictureInPictureActions(frameId, title) {
  let obj2;
  let obj3;
  const tmp = asLaunched(FramesStore.getFrame(frameId));
  if (null != tmp) {
    const obj = { key: "ConjureAppPictureInPicture", header: obj2, options: getConjureAppPictureInPictureActions(tmp, title, 2 === obj3.getEmbeddedAppShimVersion(ConjureAppPictureInPicture)), hasIcons: true };
    obj2 = { title };
    const showSimpleActionSheet = Sheet_showSimpleActionSheet.showSimpleActionSheet;
    Sheet_showSimpleActionSheet;
    obj3 = EmbeddedAppShimExperiment;
    const result = showSimpleActionSheet(obj);
  }
}
