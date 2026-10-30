// Module ID: 6840
// Function ID: 6841
// Name: FramesStore
// Dependencies: [6841, 5652, 1083, 5667, 1378, 504, 6842, 6843, 572, 2]

// Module 6840 (FramesStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1083 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5652 */;
import getURLForApplicationDefault from "getURLForApplication" /* 5667 */;
import EmbeddedAppTypes from "EmbeddedAppTypes" /* 6842 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6843 */;
import FramesConstants from "FramesConstants" /* 6841 */;
import size from "module_2" /* 2 */;

let set;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function computeMuted(poolVisibility, userMuted) {
  return "hidden" === poolVisibility || userMuted || muted;
}
function findFrameByIframeId(iframeId) {
  const values = map.values();
  for (const item10009 of values) {
    let tmp2 = item10009;
    if (metroImportDefault(item10009)) {
      if (tmp2.data.iframeId === iframeId) {
        obj.return();
        return item10009;
      }
    }
    continue;
  }
}
({ asLaunched: c3, FrameIntent: closure_4, FrameLayoutModes: hasOwnProperty, getFrameIntentForSurface: metroRequire, isLaunched: metroImportDefault, makeFrameId: metroImportAll } = FramesConstants);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const NOOP_TRUE = Constants.NOOP_TRUE;
const map = new Map();
let closure_12 = { audible: false };
let frameId = null;
let muted = false;
const Store = get_initializedDefault.Store;
class FramesStoreClass extends Store {
  getFrame(frameId) {
    if (null != frameId) {
      return map.get(frameId);
    }
  }
  isFramePooled(frameId) {
    const value = map.get(frameId);
    const tmp2 = metroImportDefault(value) && "unpooled" !== value.data.poolVisibility;
    return tmp2;
  }
  isFrameVisible(frameId) {
    const value = map.get(frameId);
    const tmp2 = metroImportDefault(value);
    let tmp3 = !tmp2;
    if (tmp2) {
      tmp3 = "hidden" !== value.data.poolVisibility;
    }
    return tmp3;
  }
  getFrameByIframeId(iframeId) {
    return findFrameByIframeId(iframeId);
  }
  isDeviceMuted() {
    return muted;
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
    let invite;
    let launch;
    let launchRequestId;
    let surface;
    ({ frameId, surface, hostWindowKey } = arg0);
    ({ applicationId, launch, invite, launchRequestId } = arg0);
    const obj = { id: frameId, applicationId, intent: metroRequire(surface), surface, state: "loading", data: null, hostWindowKey, launch, invite, launchRequestId };
    set = map.set;
    if (hostWindowKey == null) {
      hostWindowKey = null;
    }
    const result = set(frameId, obj);
  },
  FRAME_LAUNCH: function handleFrameLaunch(arg0) {
    let hostWindowKey;
    let invite;
    let launch;
    let launchRequestId;
    let obj4;
    let proxyTicket;
    ({ frameId, launch, hostWindowKey, launchRequestId } = arg0);
    ({ proxyTicket, invite } = arg0);
    const value = map.get(frameId);
    if (null != value) {
      const tmp2 = null != launchRequestId && value.launchRequestId !== launchRequestId;
      if (!tmp2) {
        const tmp5 = getURLForApplicationDefault(value.applicationId);
        let tmp6 = tmp5;
        const tmp3 = importDefault;
        if (null != tmp5) {
          tmp6 = tmp5;
          if (null != launch.path) {
            const tmp3Result = tmp3(1378);
            const str = tmp3Result.toURLSafe(launch.path, tmp5);
            let str1;
            if (str != null) {
              str1 = str.toString();
            }
            tmp6 = str1;
          }
        }
        if (null == tmp6) {
          map.delete(frameId);
          if (frameId === frameId) {
            frameId = null;
          }
        } else {
          const obj2 = { id: null, applicationId: null, intent: null, surface: null, launchRequestId: null, state: "launched", data: obj4 };
          ({ id: obj3.id, applicationId: obj3.applicationId, intent: obj3.intent, surface: obj3.surface, launchRequestId: obj3.launchRequestId } = value);
          const _Date = Date;
          obj4 = { url: tmp6, connectedSince: Date.now(), layoutMode: hasOwnProperty.FOCUSED, activityPanelMode: ActivityPanelModes.PANEL, proxyTicket, proxyTicketRefreshing: false, orientationLock: null, pipOrientationLock: null, runsInBackground: false, poolVisibility: "unpooled", muted, userMuted: false, iframeId: null, hostWindowKey, launch, invite };
          set = map.set;
          const merged = Object.assign(closure_12);
          if (hostWindowKey == null) {
            hostWindowKey = null;
          }
          const result = set(frameId, obj2);
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
    const obj = map;
    if (frameId === frameId) {
      frameId = null;
    }
    const arr = Array.from(obj.values());
    if (!arr.some(metroImportDefault)) {
      muted = false;
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
  FRAME_POOL_VISIBILITY_UPDATE: function handleFramePoolVisibilityUpdate(arg0) {
    let obj2;
    let poolVisibility;
    ({ frameId, poolVisibility } = arg0);
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
          obj2 = { poolVisibility, muted: "hidden" === poolVisibility || data.userMuted || muted };
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
  FRAME_SET_USER_MUTED: function handleSetUserMuted(arg0) {
    let obj2;
    ({ frameId, muted } = arg0);
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp4 = metroImportDefault(value);
      const tmp = map;
      if (tmp4) {
        let flag2 = value.data.userMuted !== muted;
        if (flag2) {
          const obj = { data: obj2 };
          set = tmp.set;
          const merged = Object.assign(value);
          const data = value.data;
          obj2 = { userMuted: muted, muted: "hidden" === data.poolVisibility || muted || muted };
          const merged1 = Object.assign(data);
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp4 = flag2;
      }
      flag = tmp4;
    }
    return flag;
  },
  FRAME_SET_DEVICE_MUTED: function handleSetDeviceMuted(muted) {
    let obj2;
    muted = muted.muted;
    if (muted === muted) {
      return false;
    } else {
      const values = map.values();
      const iter = values[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        if (metroImportDefault(nextResult)) {
          let obj = { data: obj2 };
          set = map.set;
          let id = tmp4.id;
          let merged = Object.assign(nextResult);
          obj2 = { muted: computeMuted(tmp4.data.poolVisibility, tmp4.data.userMuted) };
          let merged1 = Object.assign(tmp4.data);
          let result = set(id, obj);
        }
        continue;
      }
    }
  },
  EMBEDDED_APP_SHIM_STATE_UPDATE: function handleEmbeddedAppShimStateUpdate(state) {
    let obj2;
    state = state.state;
    const tmp = findFrameByIframeId(state.iframeId);
    let tmp2 = null != tmp;
    if (tmp2) {
      const id = tmp.id;
      let flag = false;
      if (null != id) {
        const value = map.get(id);
        let tmp7 = metroImportDefault(value);
        const tmp4 = map;
        if (tmp7) {
          let flag2 = tmp3(value.data);
          if (flag2) {
            const obj = { data: obj2 };
            set = tmp4.set;
            const merged = Object.assign(value);
            obj2 = { audible: state.audible };
            const merged1 = Object.assign(value.data);
            const result = set(id, obj);
            flag2 = true;
          }
          tmp7 = flag2;
        }
        flag = tmp7;
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  EMBEDDED_APP_SHIM_DISCONNECT: function handleEmbeddedAppShimDisconnect(iframeId) {
    let obj2;
    const tmp = findFrameByIframeId(iframeId.iframeId);
    let tmp2 = null != tmp;
    if (tmp2) {
      const id = tmp.id;
      let flag = false;
      if (null != id) {
        const value = map.get(id);
        let tmp7 = metroImportDefault(value);
        const tmp4 = map;
        if (tmp7) {
          let flag2 = tmp3(value.data);
          if (flag2) {
            const obj = { data: obj2 };
            set = tmp4.set;
            const merged = Object.assign(value);
            obj2 = {};
            const merged1 = Object.assign(value.data);
            const merged2 = Object.assign(closure_12);
            const result = set(id, obj);
            flag2 = true;
          }
          tmp7 = flag2;
        }
        flag = tmp7;
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  FRAME_IFRAME_MOUNT: function handleFrameIframeMount(arg0) {
    let iframeId;
    let obj2;
    ({ frameId, iframeId } = arg0);
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp4 = metroImportDefault(value);
      const tmp = map;
      if (tmp4) {
        let flag2 = value.data.iframeId !== iframeId;
        if (flag2) {
          const obj = { data: obj2 };
          set = tmp.set;
          const merged = Object.assign(value);
          obj2 = { iframeId, runsInBackground: false };
          const merged1 = Object.assign(value.data);
          const merged2 = Object.assign(closure_12);
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp4 = flag2;
      }
      flag = tmp4;
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
          const merged2 = Object.assign(closure_12);
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
