// Module ID: 18566
// Function ID: 18567
// Name: conjureAppPictureInPictureFrames
// Dependencies: [2043, 6833, 1206, 6831, 6834, 18565, 18562, 14332, 558, 504, 14314, 5701, 1125, 3864, 10880, 2]
// Exports: enterConjureAppPictureInPicture, exitConjureAppPictureInPicture, getFloatableFrames, getStrandedFloatingFrames, useConjureAppPictureInPictureFrameIds

// Module 18566 (conjureAppPictureInPictureFrames)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5701 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10880 */;
import closeFrameDefault from "closeFrame" /* 14314 */;
import conjureBackgroundFrameRules from "conjureBackgroundFrameRules" /* 18562 */;
import isConjureAppChannelFrameDefault from "isConjureAppChannelFrame" /* 18565 */;
import ApplicationStore from "ApplicationStore" /* 2043 */;
import FramesStore from "FramesStore" /* 6833 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1206 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6831 */;
import FramesConstants from "FramesConstants" /* 6834 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let tmp;
const frameRunsInBackgroundDefault = tmp(14332);
const f136183 = (id) => id.id;
function canFloat(id) {
  let tmp3 = isConjureAppChannelFrameDefault(id);
  if (tmp3) {
    const obj = conjureBackgroundFrameRules;
    tmp3 = !obj.isBuilderPreviewFrame(id);
  }
  if (tmp3) {
    tmp3 = frameRunsInBackgroundDefault(id, UnsyncedUserSettingsStore);
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
  let tmp3 = isConjureAppChannelFrameDefault(frame);
  if (tmp3) {
    const obj = conjureBackgroundFrameRules;
    tmp3 = !obj.isBuilderPreviewFrame(frame);
  }
  if (tmp3) {
    tmp3 = frameRunsInBackgroundDefault(frame, UnsyncedUserSettingsStore);
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
  return found.map(f136183);
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
    const obj = { text: intl.formatToPlainString(_modDef3864.jmMirO, obj2) };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl2.intl;
    obj2 = { appName: tmp3 };
    open("CONJURE_APP_PIP_CLOSED_TO_MAKE_ROOM", obj);
  }
}
({ asLaunched: metroRequire, FrameLayoutModes: metroImportDefault } = FramesConstants);
const items = [FramesStore, UnsyncedUserSettingsStore, ConjureProjectStore];
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/conjure/background_frames/native/conjureAppPictureInPictureFrames.tsx");

export const FLOATING_APP_STORES = items;
export function getFloatableFrames() {
  const allFrames = FramesStore.getAllFrames();
  return allFrames.filter(canFloat);
}
export function getStrandedFloatingFrames() {
  const allFrames = FramesStore.getAllFrames();
  return allFrames.filter((id) => {
    let tmp3 = isConjureAppChannelFrameDefault(id);
    if (tmp3) {
      const tmp5 = closure_1_6(id);
      let layoutMode;
      if (tmp5 != null) {
        layoutMode = tmp5.data.layoutMode;
      }
      tmp3 = layoutMode === constants.PIP;
    }
    if (tmp3) {
      let tmp9 = tmp(tmp2[5])(id);
      if (tmp9) {
        const obj = conjureBackgroundFrameRules;
        tmp9 = !obj.isBuilderPreviewFrame(id);
      }
      if (tmp9) {
        tmp9 = tmp(tmp2[7])(id, UnsyncedUserSettingsStore);
      }
      if (tmp9) {
        mainFrame = mainFrame.getMainFrame();
        id = undefined;
        if (mainFrame != null) {
          id = mainFrame.id;
        }
        tmp9 = id !== id.id;
      }
      tmp3 = !tmp9;
    }
    return tmp3;
  });
}
export { isConjureAppPictureInPictureFrame };
export { getConjureAppPictureInPictureFrameIds };
export function useConjureAppPictureInPictureFrameIds() {
  const obj = get_initialized;
  return obj.useStateFromStoresArray(items, getConjureAppPictureInPictureFrameIds);
}
export function enterConjureAppPictureInPicture(id) {
  const frame = FramesStore.getFrame(id);
  if (null != frame) {
    let tmp3 = isConjureAppChannelFrameDefault(frame);
    if (tmp3) {
      const obj2 = conjureBackgroundFrameRules;
      tmp3 = !obj2.isBuilderPreviewFrame(frame);
    }
    if (tmp3) {
      tmp3 = tmp22(14332)(frame, UnsyncedUserSettingsStore);
    }
    if (tmp3) {
      const mainFrame = obj.getMainFrame();
      id = undefined;
      if (mainFrame != null) {
        id = mainFrame.id;
      }
      tmp3 = id !== frame.id;
    }
    if (tmp3) {
      let tmp7 = tmp22(18565)(frame);
      if (tmp7) {
        const obj3 = conjureBackgroundFrameRules;
        tmp7 = !obj3.isBuilderPreviewFrame(frame);
      }
      if (tmp7) {
        tmp7 = tmp22(14332)(frame, UnsyncedUserSettingsStore);
      }
      if (tmp7) {
        const mainFrame1 = obj.getMainFrame();
        let id1;
        if (mainFrame1 != null) {
          id1 = mainFrame1.id;
        }
        tmp7 = id1 !== frame.id;
      }
      if (tmp7) {
        const tmp13 = metroRequire(frame);
        let layoutMode;
        if (tmp13 != null) {
          layoutMode = tmp13.data.layoutMode;
        }
        tmp7 = layoutMode === metroImportDefault.PIP;
      }
      if (!tmp7) {
        const allFrames = obj.getAllFrames();
        const found = allFrames.filter(isConjureAppPictureInPictureFrame);
        const mapped = found.map(f136183);
        const _Math = Math;
        const substr = mapped.slice(0, Math.max(0, mapped.length - 2 + 1));
        const item = substr.forEach(closeToMakeRoom);
        const obj4 = { frameId: id, layoutMode: metroImportDefault.PIP };
        const tmp22Result = FramesActionCreatorsDefault;
        const result = tmp22Result.updateFrameLayoutMode(obj4);
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
