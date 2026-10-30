// Module ID: 19067
// Function ID: 19068
// Name: conjureAppPictureInPictureActions
// Dependencies: [6840, 6841, 1114, 3865, 14536, 18620, 14343, 11845, 14344, 7358, 11786, 2]
// Exports: showConjureAppPictureInPictureActions

// Module 19067 (conjureAppPictureInPictureActions)
import _modDef3865 from "module_3865" /* 3865 */;
import FramesConstants from "FramesConstants" /* 6841 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 7358 */;
import EmbeddedAppShimExperiment from "EmbeddedAppShimExperiment" /* 11786 */;
import closeFrameDefault from "closeFrame" /* 14344 */;
import conjureBackgroundFrames from "conjureBackgroundFrames" /* 18620 */;
import FramesStore from "FramesStore" /* 6840 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp3;
const getConjureAppSoundButtonDefault = tmp3(14343);
function getConjureAppPictureInPictureActions(id, appName, arg2) {
  let intl;
  let intl2;
  let obj2;
  _require = id;
  let obj = {
    label: intl.formatToPlainString(_modDef3865.dPf03z, obj2),
    IconComponent: require("WindowLaunchIcon").WindowLaunchIcon,
    onPress() {
      const obj = conjureBackgroundFrames;
      return obj.returnToConjureFrameSurface(id);
    }
  };
  intl = require("intl").intl;
  const items = [obj];
  obj2 = { appName };
  const tmp4 = arg2;
  if (tmp4) {
    items.push(getConjureAppSoundButtonDefault(id.id, id.data.userMuted));
  }
  const push = items.push;
  const obj3 = {
    label: intl2.string(require("intl").t.VkMnR2),
    IconComponent: require("DoorExitIcon").DoorExitIcon,
    isDestructive: true,
    onPress() {
      return closeFrameDefault(id.id);
    }
  };
  intl2 = tmp(1114).intl;
  push(obj3);
  return items;
}
const asLaunched = FramesConstants.asLaunched;
const ConjureAppPictureInPicture = "ConjureAppPictureInPicture";
let result = size.fileFinishedImporting("modules/conjure/background_frames/native/conjureAppPictureInPictureActions.tsx");

export const CONJURE_APP_PICTURE_IN_PICTURE_LOCATION = "ConjureAppPictureInPicture";
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
