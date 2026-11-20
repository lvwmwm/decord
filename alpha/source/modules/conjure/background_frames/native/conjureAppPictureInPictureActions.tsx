// Module ID: 19045
// Function ID: 19046
// Name: conjureAppPictureInPictureActions
// Dependencies: [6504, 6502, 6505, 6824, 15624, 13374, 1112, 4091, 10019, 13754, 10248, 13755, 7431, 10697, 2]
// Exports: openConjureAppPictureInPictureFrame, showConjureAppPictureInPictureActions

// Module 19045 (conjureAppPictureInPictureActions)
import _modDef4091 from "module_4091" /* 4091 */;
import FramesConstants from "FramesConstants" /* 6505 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 6824 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 7431 */;
import EmbeddedAppShimExperiment from "EmbeddedAppShimExperiment" /* 10697 */;
import openConjureProjectInBuilderDefault from "openConjureProjectInBuilder" /* 13374 */;
import closeFrameDefault from "closeFrame" /* 13755 */;
import FramesStore from "FramesStore" /* 6504 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6502 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp;
let tmp3;
const getConjureAppSoundButtonDefault = tmp3(13754);
const conjureBackgroundFrames = tmp(15624);
function getConjureAppPictureInPictureActions(id, appName, arg2) {
  let intl;
  let intl2;
  let obj2;
  _require = id;
  let obj = {
    label: intl.formatToPlainString(_modDef4091.dPf03z, obj2),
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
    label: intl2.string(tmp(1112).t.VkMnR2),
    IconComponent: tmp(10248).DoorExitIcon,
    isDestructive: true,
    onPress() {
      return closeFrameDefault(id.id);
    }
  };
  intl2 = tmp(1112).intl;
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
