// Module ID: 10947
// Function ID: 10948
// Name: FramesStore
// Dependencies: [10931, 6287, 1098, 10948, 504, 10949, 10950, 584, 2]

// Module 10947 (FramesStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1098 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 6287 */;
import getURLForApplicationDefault from "getURLForApplication" /* 10948 */;
import EmbeddedAppTypes from "EmbeddedAppTypes" /* 10949 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 10950 */;
import FramesConstants from "FramesConstants" /* 10931 */;
import size from "module_2" /* 2 */;

let set;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ asLaunched: c3, FrameIntent: closure_4, FrameLayoutModes: hasOwnProperty, getFrameIntentForSurface: metroRequire, isLaunched: metroImportDefault, makeFrameId: metroImportAll } = FramesConstants);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const NOOP_TRUE = Constants.NOOP_TRUE;
const map = new Map();
let frameId = null;
const Store = get_initializedDefault.Store;
class FramesStoreClass extends Store {
  getFrame(frameId) {
    if (null != frameId) {
      return map.get(frameId);
    }
  }
  getMainFrame() {
    let tmp = null;
    if (null != frameId) {
      let value = map.get(frameId);
      if (value == null) {
        value = null;
      }
      tmp = value;
    }
    return tmp;
  }
  getAllFrames() {
    return Array.from(map.values());
  }
  getFrameByEmbeddedContext(context, iframeId) {
    if (context.source.type === EmbeddedAppTypes.EmbeddedContextSourceType.FRAME) {
      const tmp3 = _false(map.get(context.source.frameId));
      if (null != tmp3) {
        if (tmp3.data.iframeId === iframeId) {
          return tmp3;
        }
      }
    }
  }
  getFrameBySurface(arg0, arg1) {
    return map.get(metroImportAll(arg0, arg1));
  }
  getFramesForSurface(arg0) {
    let closure_0 = arg0;
    const arr = Array.from(map.values());
    return arr.filter((applicationId) => metroImportAll(applicationId.applicationId, closure_0) === applicationId.id);
  }
  getFramesForChannel(id) {
    let closure_0 = id;
    const arr = Array.from(map.values());
    return arr.filter((surface) => getChannelIdForEmbeddedSurfaceDefault(surface.surface) === id);
  }
}
const prototype = FramesStoreClass.prototype;
FramesStoreClass.displayName = "FramesStore";
let obj = {
  FRAME_LAUNCH_START: function handleFrameLaunchStart(arg0) {
    let applicationId;
    let hostWindowKey;
    let launch;
    let launchRequestId;
    let surface;
    ({ frameId, surface, hostWindowKey } = arg0);
    ({ applicationId, launch, launchRequestId } = arg0);
    const obj = { id: frameId, applicationId, intent: metroRequire(surface), surface, state: "loading", data: null, hostWindowKey, launch, launchRequestId };
    set = map.set;
    if (hostWindowKey == null) {
      hostWindowKey = null;
    }
    const result = set(frameId, obj);
  },
  FRAME_LAUNCH: function handleFrameLaunch(arg0) {
    let hostWindowKey;
    let launch;
    let launchRequestId;
    let obj5;
    let proxyTicket;
    ({ frameId, hostWindowKey, launchRequestId } = arg0);
    ({ proxyTicket, launch } = arg0);
    const value = map.get(frameId);
    if (null != value) {
      const tmp2 = null != launchRequestId && value.launchRequestId !== launchRequestId;
      if (!tmp2) {
        const tmp5 = getURLForApplicationDefault(value.applicationId);
        if (null == tmp5) {
          map.delete(frameId);
          if (frameId === frameId) {
            frameId = null;
          }
        } else {
          const obj3 = { id: null, applicationId: null, intent: null, surface: null, launchRequestId: null, state: "launched", data: obj5 };
          ({ id: obj2.id, applicationId: obj2.applicationId, intent: obj2.intent, surface: obj2.surface, launchRequestId: obj2.launchRequestId } = value);
          const _Date = Date;
          obj5 = { url: tmp5, connectedSince: Date.now(), layoutMode: hasOwnProperty.FOCUSED, activityPanelMode: ActivityPanelModes.PANEL, proxyTicket, proxyTicketRefreshing: false, orientationLock: null, pipOrientationLock: null, runsInBackground: false, iframeId: null, hostWindowKey, launch };
          set = map.set;
          if (hostWindowKey == null) {
            hostWindowKey = null;
          }
          const result = set(frameId, obj3);
        }
      }
    }
    return false;
  },
  FRAME_LAUNCH_FAIL: function handleFrameLaunchFail(arg0) {
    let launchRequestId;
    ({ frameId, launchRequestId } = arg0);
    const value = map.get(frameId);
    const obj = map;
    if (null != value) {
      const tmp2 = null != launchRequestId && value.launchRequestId !== launchRequestId;
      if (tmp2) {
        return false;
      }
    }
    obj.delete(frameId);
    if (frameId === frameId) {
      frameId = null;
    }
  },
  FRAME_STOP: function handleFrameStop(frameId) {
    frameId = frameId.frameId;
    map.delete(frameId);
    if (frameId === frameId) {
      frameId = null;
    }
  },
  FRAME_CLEAR_MAIN_SLOT: function handleFrameClearMainSlot(frameId) {
    if (frameId !== frameId.frameId) {
      return false;
    } else {
      frameId = null;
    }
  },
  FRAME_PROMOTE: function handleFramePromote(frameId) {
    frameId = frameId.frameId;
    if (null == map.get(frameId)) {
      return false;
    }
  },
  FRAME_UPDATE_LAYOUT_MODE: function handleFrameUpdateLayoutMode(frameId) {
    let obj2;
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp6 = metroImportDefault(value);
      const tmp3 = map;
      if (tmp6) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          const obj = { data: obj2 };
          set = tmp3.set;
          const merged = Object.assign(value);
          obj2 = { layoutMode: tmp };
          const merged1 = Object.assign(value.data);
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp6 = flag2;
      }
      flag = tmp6;
    }
    return flag;
  },
  FRAME_SET_PANEL_MODE: function handleSetPanelMode(frameId) {
    let obj2;
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp6 = metroImportDefault(value);
      const tmp3 = map;
      if (tmp6) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          const obj = { data: obj2 };
          set = tmp3.set;
          const merged = Object.assign(value);
          obj2 = { activityPanelMode: tmp };
          const merged1 = Object.assign(value.data);
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp6 = flag2;
      }
      flag = tmp6;
    }
    return flag;
  },
  FRAME_SET_ORIENTATION_LOCK_STATE: function handleOrientationLockState(arg0) {
    let lockState;
    let obj2;
    let pictureInPictureLockState;
    ({ frameId, lockState, pictureInPictureLockState } = arg0);
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp5 = metroImportDefault(value);
      const tmp2 = map;
      if (tmp5) {
        let flag2 = tmp(value.data);
        if (flag2) {
          const obj = { data: obj2 };
          set = tmp2.set;
          const merged = Object.assign(value);
          const data = value.data;
          obj2 = { orientationLock: lockState, pipOrientationLock: pictureInPictureLockState };
          const merged1 = Object.assign(data);
          if (lockState == null) {
            lockState = null;
          }
          if (undefined === pictureInPictureLockState) {
            pictureInPictureLockState = data.pipOrientationLock;
          }
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp5 = flag2;
      }
      flag = tmp5;
    }
    return flag;
  },
  FRAME_SET_RUNS_IN_BACKGROUND: function handleSetRunsInBackground(frameId) {
    let obj2;
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp6 = metroImportDefault(value);
      const tmp3 = map;
      if (tmp6) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          const obj = { data: obj2 };
          set = tmp3.set;
          const merged = Object.assign(value);
          obj2 = { runsInBackground: tmp };
          const merged1 = Object.assign(value.data);
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp6 = flag2;
      }
      flag = tmp6;
    }
    return flag;
  },
  FRAME_SET_PROXY_TICKET_REFRESHING: function handleSetProxyTicketRefreshing(frameId) {
    let obj2;
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp6 = metroImportDefault(value);
      const tmp3 = map;
      if (tmp6) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          const obj = { data: obj2 };
          set = tmp3.set;
          const merged = Object.assign(value);
          obj2 = { proxyTicketRefreshing: tmp };
          const merged1 = Object.assign(value.data);
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp6 = flag2;
      }
      flag = tmp6;
    }
    return flag;
  },
  FRAME_UPDATE_PROXY_TICKET: function handleUpdateProxyTicket(frameId) {
    let obj2;
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp6 = metroImportDefault(value);
      const tmp3 = map;
      if (tmp6) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          const obj = { data: obj2 };
          set = tmp3.set;
          const merged = Object.assign(value);
          obj2 = { proxyTicket: tmp };
          const merged1 = Object.assign(value.data);
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp6 = flag2;
      }
      flag = tmp6;
    }
    return flag;
  },
  FRAME_IFRAME_MOUNT: function handleFrameIframeMount(arg0) {
    let iframeId;
    let obj2;
    ({ frameId, iframeId } = arg0);
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp5 = metroImportDefault(value);
      const tmp2 = map;
      if (tmp5) {
        let flag2 = tmp(value.data);
        if (flag2) {
          const obj = { data: obj2 };
          set = tmp2.set;
          const merged = Object.assign(value);
          const data = value.data;
          obj2 = { iframeId, runsInBackground: data.iframeId === iframeId && data.runsInBackground };
          const merged1 = Object.assign(data);
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp5 = flag2;
      }
      flag = tmp5;
    }
    return flag;
  },
  FRAME_IFRAME_UNMOUNT: function handleFrameIframeUnmount(frameId) {
    let obj2;
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp5 = metroImportDefault(value);
      const tmp2 = map;
      if (tmp5) {
        let flag2 = value.data.iframeId === tmp;
        if (flag2) {
          const obj = { data: obj2 };
          set = tmp2.set;
          const merged = Object.assign(value);
          obj2 = { iframeId: null, runsInBackground: false };
          const merged1 = Object.assign(value.data);
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp5 = flag2;
      }
      flag = tmp5;
    }
    return flag;
  },
  FRAME_HOST_WINDOW_MOUNT: function handleFrameHostWindowMount(frameId) {
    let obj2;
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp6 = metroImportDefault(value);
      const tmp3 = map;
      if (tmp6) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          const obj = { data: obj2 };
          set = tmp3.set;
          const merged = Object.assign(value);
          obj2 = { hostWindowKey: tmp };
          const merged1 = Object.assign(value.data);
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp6 = flag2;
      }
      flag = tmp6;
    }
    return flag;
  },
  FRAME_HOST_WINDOW_UNMOUNT: function handleFrameHostWindowUnmount(frameId) {
    let obj2;
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp5 = metroImportDefault(value);
      const tmp2 = map;
      if (tmp5) {
        let flag2 = value.data.hostWindowKey === tmp;
        if (flag2) {
          const obj = { data: obj2 };
          set = tmp2.set;
          const merged = Object.assign(value);
          obj2 = { hostWindowKey: null };
          const merged1 = Object.assign(value.data);
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp5 = flag2;
      }
      flag = tmp5;
    }
    return flag;
  },
  CHANNEL_SELECT: function handleChannelSelect() {
    let obj2;
    let flag = false;
    if (null != frameId) {
      const value = map.get(tmp);
      let tmp6 = metroImportDefault(value);
      const tmp3 = map;
      if (tmp6) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          const obj = { data: obj2 };
          set = tmp3.set;
          const merged = Object.assign(value);
          obj2 = { layoutMode: hasOwnProperty.PIP };
          const merged1 = Object.assign(value.data);
          const result = set(tmp, obj);
          flag2 = true;
        }
        tmp6 = flag2;
      }
      flag = tmp6;
    }
    return flag;
  }
};
const framesStoreClass = new FramesStoreClass(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/frames/FramesStore.tsx");

export default framesStoreClass;
