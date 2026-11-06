// Module ID: 16628
// Function ID: 16629
// Name: conjureAppPictureInPictureFrames
// Dependencies: [2162, 6926, 1194, 11067, 6924, 6927, 16627, 11021, 16624, 16629, 11030, 504, 14599, 5867, 1113, 4024, 11076, 2]
// Exports: enterConjureAppPictureInPicture, exitConjureAppPictureInPicture, getFloatableFrames, getStrandedFloatingFrames, isConjureAppPictureInPictureInteractive, useConjureAppPictureInPictureFrameIds

// Module 16628 (conjureAppPictureInPictureFrames)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import _modDef4024 from "module_4024" /* 4024 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5867 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11021 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11076 */;
import closeFrameDefault from "closeFrame" /* 14599 */;
import conjureBackgroundFrameRules from "conjureBackgroundFrameRules" /* 16624 */;
import isConjureAppChannelFrameDefault from "isConjureAppChannelFrame" /* 16627 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import FramesStore from "FramesStore" /* 6926 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 11067 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6924 */;
import FramesConstants from "FramesConstants" /* 6927 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
const f111233 = (id) => id.id;
function canFloat(id) {
  let tmp3;
  if (isConjureAppChannelFrameDefault(id)) {
    const obj = conjureBackgroundFrameRules;
    tmp3 = !obj.isBuilderPreviewFrame(id);
  } else {
    tmp3 = tmp(16629)(id);
  }
  if (tmp3) {
    tmp3 = tmp(11030)(id, UnsyncedUserSettingsStore);
  }
  if (tmp3) {
    const mainFrame = FramesStore.getMainFrame();
    id = undefined;
    if (mainFrame != null) {
      id = mainFrame.id;
    }
    tmp3 = id !== id.id;
  }
  return tmp3;
}
function isConjureAppPictureInPictureFrame(frame) {
  let tmp3;
  if (isConjureAppChannelFrameDefault(frame)) {
    const obj = conjureBackgroundFrameRules;
    tmp3 = !obj.isBuilderPreviewFrame(frame);
  } else {
    tmp3 = tmp(16629)(frame);
  }
  if (tmp3) {
    tmp3 = tmp(11030)(frame, UnsyncedUserSettingsStore);
  }
  if (tmp3) {
    const mainFrame = FramesStore.getMainFrame();
    let id;
    if (mainFrame != null) {
      id = mainFrame.id;
    }
    tmp3 = id !== frame.id;
  }
  if (tmp3) {
    const tmp11 = metroRequire(frame);
    let layoutMode;
    if (tmp11 != null) {
      layoutMode = tmp11.data.layoutMode;
    }
    tmp3 = layoutMode === metroImportDefault.PIP;
  }
  return tmp3;
}
function getConjureAppPictureInPictureFrameIds() {
  const allFrames = FramesStore.getAllFrames();
  const found = allFrames.filter(isConjureAppPictureInPictureFrame);
  return found.map(f111233);
}
function closeToMakeRoom(frameId) {
  let intl;
  let obj2;
  const frame = FramesStore.getFrame(frameId);
  let applicationId;
  if (frame != null) {
    applicationId = frame.applicationId;
  }
  let tmp3 = null;
  if (null != applicationId) {
    const application = ApplicationStore.getApplication(applicationId);
    let name;
    if (application != null) {
      name = application.name;
    }
    tmp3 = name;
  }
  closeFrameDefault(frameId);
  if (null != tmp3) {
    const obj = { text: intl.formatToPlainString(_modDef4024.jmMirO, obj2) };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl2.intl;
    obj2 = { appName: tmp3 };
    open("CONJURE_APP_PIP_CLOSED_TO_MAKE_ROOM", obj);
  }
}
({ asLaunched: metroRequire, FrameLayoutModes: metroImportDefault } = FramesConstants);
const items = [FramesStore, UnsyncedUserSettingsStore, ApplicationStore, ConjureProjectStore, ConjureBuilderPreviewStore];
let result = size.fileFinishedImporting("modules/conjure/background_frames/native/conjureAppPictureInPictureFrames.tsx");

export const FLOATING_APP_STORES = items;
export function getFloatableFrames() {
  const allFrames = FramesStore.getAllFrames();
  return allFrames.filter(canFloat);
}
export function getStrandedFloatingFrames() {
  const allFrames = FramesStore.getAllFrames();
  return allFrames.filter((surface) => {
    let result = isConjureAppChannelFrameDefault(surface);
    if (!result) {
      const obj = conjurePreviewSurface;
      result = obj.isConjurePreviewSurface(surface.surface);
    }
    if (result) {
      const tmp6 = closure_1_6(surface);
      let layoutMode;
      if (tmp6 != null) {
        layoutMode = tmp6.data.layoutMode;
      }
      result = layoutMode === constants.PIP;
    }
    if (result) {
      let tmp10;
      if (isConjureAppChannelFrameDefault(surface)) {
        const obj2 = conjureBackgroundFrameRules;
        tmp10 = !obj2.isBuilderPreviewFrame(surface);
      } else {
        tmp10 = tmp(tmp2[9])(surface);
      }
      if (tmp10) {
        tmp10 = tmp(tmp2[10])(surface, UnsyncedUserSettingsStore);
      }
      if (tmp10) {
        mainFrame = mainFrame.getMainFrame();
        let id;
        if (mainFrame != null) {
          id = mainFrame.id;
        }
        tmp10 = id !== surface.id;
      }
      result = !tmp10;
    }
    return result;
  });
}
export { isConjureAppPictureInPictureFrame };
export function isConjureAppPictureInPictureInteractive(stateFromStores, SHOWS_STATIC_CARD) {
  let tmp = !SHOWS_STATIC_CARD;
  if (tmp) {
    const tmp4 = metroRequire(stateFromStores);
    let prop;
    if (tmp4 != null) {
      prop = tmp4.data.pictureInPictureInteractive;
    }
    tmp = true === prop;
  }
  return tmp;
}
export { getConjureAppPictureInPictureFrameIds };
export function useConjureAppPictureInPictureFrameIds() {
  const obj = get_initialized;
  return obj.useStateFromStoresArray(items, getConjureAppPictureInPictureFrameIds);
}
export function enterConjureAppPictureInPicture(id) {
  const frame = FramesStore.getFrame(id);
  if (null != frame) {
    let tmp2;
    if (isConjureAppChannelFrameDefault(frame)) {
      const obj2 = conjureBackgroundFrameRules;
      tmp2 = !obj2.isBuilderPreviewFrame(frame);
    } else {
      tmp2 = tmp13(16629)(frame);
    }
    if (tmp2) {
      tmp2 = tmp13(11030)(frame, UnsyncedUserSettingsStore);
    }
    if (tmp2) {
      const mainFrame = obj.getMainFrame();
      id = undefined;
      if (mainFrame != null) {
        id = mainFrame.id;
      }
      tmp2 = id !== frame.id;
    }
    if (tmp2) {
      const tmp7 = isConjureAppPictureInPictureFrame;
      if (!isConjureAppPictureInPictureFrame(frame)) {
        const allFrames = obj.getAllFrames();
        const found = allFrames.filter(tmp7);
        const mapped = found.map(f111233);
        const _Math = Math;
        const substr = mapped.slice(0, Math.max(0, mapped.length - 2 + 1));
        const item = substr.forEach(closeToMakeRoom);
        const obj3 = { frameId: id, layoutMode: metroImportDefault.PIP };
        const tmp13Result = FramesActionCreatorsDefault;
        const result = tmp13Result.updateFrameLayoutMode(obj3);
      }
    }
  }
}
export function exitConjureAppPictureInPicture(id) {
  const tmp = metroRequire(FramesStore.getFrame(id));
  let layoutMode;
  if (tmp != null) {
    layoutMode = tmp.data.layoutMode;
  }
  if (layoutMode === metroImportDefault.PIP) {
    const obj2 = { frameId: id, layoutMode: tmp3.FOCUSED };
    const obj = FramesActionCreatorsDefault;
    const result = obj.updateFrameLayoutMode(obj2);
  }
}
