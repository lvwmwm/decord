// Module ID: 10468
// Function ID: 81050
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10468 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const FrameLayoutModes = arg1(dependencyMap[5]).FrameLayoutModes;
const ActivityPanelModes = arg1(dependencyMap[6]).ActivityPanelModes;
let closure_9 = null;
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
let tmp6 = (Store) => {
  class FramesStoreClass {
    constructor() {
      self = this;
      tmp = closure_2(this, FramesStoreClass);
      obj = closure_5(FramesStoreClass);
      tmp2 = closure_4;
      if (closure_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = FramesStoreClass;
  callback2(FramesStoreClass, Store);
  let obj = {
    key: "getConnectedFrame",
    value() {
      return closure_9;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getFrameLayoutMode",
    value() {
      let layoutMode;
      if (null != closure_9) {
        layoutMode = closure_9.layoutMode;
      }
      return layoutMode;
    }
  };
  items[1] = obj;
  obj = {
    key: "getActivityPanelMode",
    value() {
      let activityPanelMode;
      if (null != closure_9) {
        activityPanelMode = closure_9.activityPanelMode;
      }
      if (null == activityPanelMode) {
        activityPanelMode = constants.DISCONNECTED;
      }
      return activityPanelMode;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isFrameActive",
    value() {
      return null != closure_9;
    }
  };
  items[4] = {
    key: "isLaunchingFrame",
    value(arg0) {
      if (null != arg0) {
        const value = closure_10.get(arg0);
        let tmp2 = null != value && value;
        const tmp5 = null != value && value;
      } else {
        tmp2 = closure_10.size > 0;
      }
      return tmp2;
    }
  };
  items[5] = {
    key: "isProxyTicketRefreshing",
    value(arg0) {
      return set.has(arg0);
    }
  };
  items[6] = {
    key: "getOrientationLockStateForApp",
    value(arg0) {
      return closure_12.get(arg0);
    }
  };
  items[7] = {
    key: "getPipOrientationLockStateForApp",
    value(applicationId) {
      const self = this;
      let orientationLockStateForApp = closure_13.get(applicationId);
      if (null == orientationLockStateForApp) {
        orientationLockStateForApp = self.getOrientationLockStateForApp(applicationId);
      }
      return orientationLockStateForApp;
    }
  };
  return callback(FramesStoreClass, items);
}(importDefault(dependencyMap[8]).Store);
tmp6.displayName = "FramesStore";
tmp6 = new tmp6(importDefault(dependencyMap[9]), {
  FRAME_LAUNCH_START: function handleFrameLaunchStart(applicationId) {
    const result = map.set(applicationId.applicationId, true);
  },
  FRAME_LAUNCH: function handleFrameLaunch(applicationId) {
    applicationId = applicationId.applicationId;
    const tmp = importDefault(dependencyMap[7])(applicationId);
    if (null != tmp) {
      map.delete(applicationId);
      const obj = { applicationId, url: tmp };
      const _Date = Date;
      obj.connectedSince = Date.now();
      obj.layoutMode = FrameLayoutModes.FOCUSED;
      obj.activityPanelMode = ActivityPanelModes.PANEL;
      obj.proxyTicket = applicationId.proxyTicket;
      let closure_9 = obj;
    } else {
      map.delete(applicationId);
    }
  },
  FRAME_LAUNCH_FAIL: function handleFrameLaunchFail(applicationId) {
    map.delete(applicationId.applicationId);
  },
  FRAME_STOP: function handleFrameStop(applicationId) {
    applicationId = undefined;
    if (null != _null) {
      applicationId = _null.applicationId;
    }
    if (applicationId === applicationId.applicationId) {
      const _null = null;
    }
  },
  FRAME_UPDATE_LAYOUT_MODE: function handleFrameUpdateLayoutMode(arg0) {
    let applicationId;
    let layoutMode;
    applicationId = undefined;
    ({ applicationId, layoutMode } = arg0);
    if (null != _null) {
      applicationId = _null.applicationId;
    }
    if (applicationId === applicationId) {
      const obj = {};
      const merged = Object.assign(_null);
      obj["layoutMode"] = layoutMode;
      const _null = obj;
    }
  },
  FRAME_SET_PANEL_MODE: function handleSetPanelMode(arg0) {
    if (null != closure_9) {
      const obj = {};
      const merged = Object.assign(closure_9);
      obj["activityPanelMode"] = tmp;
      closure_9 = obj;
    }
  },
  FRAME_SET_ORIENTATION_LOCK_STATE: function handleOrientationLockState(arg0) {
    let applicationId;
    let lockState;
    let pictureInPictureLockState;
    ({ applicationId, lockState, pictureInPictureLockState } = arg0);
    if (null == lockState) {
      map2.delete(applicationId);
    } else {
      const result = map2.set(applicationId, lockState);
    }
    if (null === pictureInPictureLockState) {
      map3.delete(applicationId);
    } else if (undefined !== pictureInPictureLockState) {
      const result1 = map3.set(applicationId, pictureInPictureLockState);
    }
  },
  FRAME_SET_PROXY_TICKET_REFRESHING: function handleSetProxyTicketRefreshing(applicationId) {
    applicationId = applicationId.applicationId;
    if (applicationId.refreshing) {
      const result = obj.set(applicationId, true);
    } else {
      obj.delete(applicationId);
    }
  },
  FRAME_UPDATE_PROXY_TICKET: function handleUpdateProxyTicket(arg0) {
    let applicationId;
    let proxyTicket;
    applicationId = undefined;
    ({ applicationId, proxyTicket } = arg0);
    if (null != _null) {
      applicationId = _null.applicationId;
    }
    if (applicationId === applicationId) {
      const obj = {};
      const merged = Object.assign(_null);
      obj["proxyTicket"] = proxyTicket;
      const _null = obj;
    }
  },
  CHANNEL_SELECT: function handleChannelSelect() {
    let tmp = null != _null;
    if (tmp) {
      let flag = _null.layoutMode !== FrameLayoutModes.PIP;
      if (flag) {
        const obj = {};
        const merged = Object.assign(_null);
        obj["layoutMode"] = FrameLayoutModes.PIP;
        const _null = obj;
        flag = true;
      }
      tmp = flag;
    }
    return tmp;
  }
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/frames/FramesStore.tsx");

export default tmp6;
