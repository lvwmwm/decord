// Module ID: 16290
// Function ID: 16291
// Name: ConjureBuilderPreviewStore
// Dependencies: [6846, 504, 2019, 572, 2]

// Module 16290 (ConjureBuilderPreviewStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import EmbeddedActivityOrientationLockState from "EmbeddedActivityOrientationLockState" /* 2019 */;
import FramesStore from "FramesStore" /* 6846 */;
import size from "module_2" /* 2 */;

let applicationId = null;
let enabled = false;
let closure_6 = false;
const Store = get_initializedDefault.Store;
class ConjureBuilderPreviewStore extends Store {
  initialize() {
    this.waitFor(FramesStore);
  }
  getBuilderPreviewApplicationId() {
    return applicationId;
  }
  getPhoneLensApplicationId() {
    return applicationId;
  }
  getLastBuilderPreviewApplicationId() {
    return applicationId;
  }
  isBuilderPreviewMobile() {
    return enabled;
  }
  isBuilderPreviewLandscape() {
    return closure_6;
  }
}
const prototype = ConjureBuilderPreviewStore.prototype;
const obj = {
  LOGOUT: function handleLogout() {
    if (null == applicationId) {
      if (null == applicationId) {
        const tmp2 = enabled;
        if (!tmp2) {
          const tmp3 = closure_6;
          if (!tmp3) {
            return false;
          }
        }
      }
    }
    applicationId = null;
    enabled = false;
    closure_6 = false;
  },
  CONJURE_BUILDER_PREVIEW_APPLICATION_SET: function handleBuilderPreviewApplicationSet(applicationId) {
    applicationId = applicationId.applicationId;
    if (applicationId === applicationId) {
      return false;
    }
  },
  CONJURE_BUILDER_PREVIEW_MOBILE_SET: function handleBuilderPreviewMobileSet(enabled) {
    enabled = enabled.enabled;
    if (enabled === enabled) {
      return false;
    }
  },
  CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET: function handleBuilderPreviewLandscapeSet(landscape) {
    landscape = landscape.landscape;
    if (closure_6 === landscape) {
      return false;
    } else {
      closure_6 = landscape;
    }
  },
  FRAME_SET_ORIENTATION_LOCK_STATE: function handleFrameSetOrientationLockState(lockState) {
    lockState = lockState.lockState;
    const frameId = lockState.frameId;
    if (lockState !== EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.LANDSCAPE) {
      if (lockState !== EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.PORTRAIT) {
        return false;
      }
    }
    const frame = FramesStore.getFrame(frameId);
    if (null != frame) {
      if (frame.applicationId === applicationId) {
        const tmp5 = lockState === EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.LANDSCAPE;
        if (closure_6 === tmp5) {
          return false;
        } else {
          closure_6 = tmp5;
        }
      }
    }
    return false;
  }
};
const conjureBuilderPreviewStore = new ConjureBuilderPreviewStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjureBuilderPreviewStore.tsx");

export default conjureBuilderPreviewStore;
