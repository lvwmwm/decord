// Module ID: 18740
// Function ID: 18741
// Name: conjureAppPictureInPictureActions
// Dependencies: [6810, 6811, 1125, 3863, 14269, 18327, 14080, 11578, 14081, 7327, 11531, 2]
// Exports: showConjureAppPictureInPictureActions

// Module 18740 (conjureAppPictureInPictureActions)
import _modDef3863 from "module_3863" /* 3863 */;
import FramesConstants from "FramesConstants" /* 6811 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 7327 */;
import EmbeddedAppShimExperiment from "EmbeddedAppShimExperiment" /* 11531 */;
import closeFrameDefault from "closeFrame" /* 14081 */;
import conjureBackgroundFrames from "conjureBackgroundFrames" /* 18327 */;
import FramesStore from "FramesStore" /* 6810 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp3;
const getConjureAppSoundButtonDefault = tmp3(14080);
function getConjureAppPictureInPictureActions(stateFromStores, appName, arg2) {
  let intl;
  let intl2;
  let obj2;
  _require = stateFromStores;
  let obj = {
    label: intl.formatToPlainString(_modDef3863.dPf03z, obj2),
    IconComponent: require("WindowLaunchIcon").WindowLaunchIcon,
    onPress() {
      const obj = conjureBackgroundFrames;
      return obj.returnToConjureFrameSurface(stateFromStores);
    }
  };
  intl = require("intl").intl;
  const items = [obj];
  obj2 = { appName };
  const tmp4 = arg2;
  if (tmp4) {
    items.push(getConjureAppSoundButtonDefault(stateFromStores.id, stateFromStores.data.userMuted));
  }
  const push = items.push;
  const obj3 = {
    label: intl2.string(require("intl").t.VkMnR2),
    IconComponent: require("DoorExitIcon").DoorExitIcon,
    isDestructive: true,
    onPress() {
      return closeFrameDefault(stateFromStores.id);
    }
  };
  intl2 = tmp(1125).intl;
  push(obj3);
  return items;
}
const asLaunched = FramesConstants.asLaunched;
const ConjureAppPictureInPicture = "ConjureAppPictureInPicture";
let result = size.fileFinishedImporting("modules/conjure/background_frames/native/conjureAppPictureInPictureActions.tsx");

export const CONJURE_APP_PICTURE_IN_PICTURE_LOCATION = "ConjureAppPictureInPicture";
export { getConjureAppPictureInPictureActions };
export const showConjureAppPictureInPictureActions = function showConjureAppPictureInPictureActions(frameId, title) {
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
};
