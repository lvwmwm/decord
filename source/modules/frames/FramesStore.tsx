// Module ID: 10479
// Function ID: 81113
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 10480, 10226, 10481, 566, 686, 2]

// Module 10479 (_isNativeReflectConstruct)
import ActivityPanelModes from "ActivityPanelModes";
import getNonTestModeUrlForApplication from "getNonTestModeUrlForApplication";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { FrameLayoutModes } from "FrameLayoutModes";
import { ActivityPanelModes } from "ActivityPanelModes";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let c9 = null;
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
let tmp6 = ((Store) => {
  class FramesStoreClass {
    constructor() {
      self = this;
      tmp = outer1_2(this, FramesStoreClass);
      obj = outer1_5(FramesStoreClass);
      tmp2 = outer1_4;
      if (outer1_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(FramesStoreClass, Store);
  let obj = {
    key: "getConnectedFrame",
    value() {
      return outer1_9;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getFrameLayoutMode",
    value() {
      let layoutMode;
      if (null != outer1_9) {
        layoutMode = outer1_9.layoutMode;
      }
      return layoutMode;
    }
  };
  items[1] = obj;
  obj = {
    key: "getActivityPanelMode",
    value() {
      let activityPanelMode;
      if (null != outer1_9) {
        activityPanelMode = outer1_9.activityPanelMode;
      }
      if (null == activityPanelMode) {
        activityPanelMode = outer1_8.DISCONNECTED;
      }
      return activityPanelMode;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isFrameActive",
    value() {
      return null != outer1_9;
    }
  };
  items[4] = {
    key: "isLaunchingFrame",
    value(arg0) {
      if (null != arg0) {
        const value = outer1_10.get(arg0);
        let tmp2 = null != value && value;
        const tmp5 = null != value && value;
      } else {
        tmp2 = outer1_10.size > 0;
      }
      return tmp2;
    }
  };
  items[5] = {
    key: "isProxyTicketRefreshing",
    value(arg0) {
      return outer1_11.has(arg0);
    }
  };
  items[6] = {
    key: "getOrientationLockStateForApp",
    value(arg0) {
      return outer1_12.get(arg0);
    }
  };
  items[7] = {
    key: "getPipOrientationLockStateForApp",
    value(applicationId) {
      const self = this;
      let orientationLockStateForApp = outer1_13.get(applicationId);
      if (null == orientationLockStateForApp) {
        orientationLockStateForApp = self.getOrientationLockStateForApp(applicationId);
      }
      return orientationLockStateForApp;
    }
  };
  return callback(FramesStoreClass, items);
})(require("initialize").Store);
tmp6.displayName = "FramesStore";
tmp6 = new tmp6(require("dispatcher"), {
  FRAME_LAUNCH_START: function handleFrameLaunchStart(applicationId) {
    const result = map.set(applicationId.applicationId, true);
  },
  FRAME_LAUNCH: function handleFrameLaunch(applicationId) {
    let channelId;
    let proxyTicket;
    applicationId = applicationId.applicationId;
    ({ proxyTicket, channelId } = applicationId);
    const tmp = importDefault(10481)(applicationId);
    if (null != tmp) {
      map.delete(applicationId);
      const obj = { applicationId, url: tmp };
      const _Date = Date;
      obj.connectedSince = Date.now();
      obj.layoutMode = FrameLayoutModes.FOCUSED;
      obj.activityPanelMode = ActivityPanelModes.PANEL;
      obj.proxyTicket = proxyTicket;
      obj.channelId = channelId;
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
      _null = null;
    }
  },
  FRAME_UPDATE_LAYOUT_MODE: function handleFrameUpdateLayoutMode(arg0) {
    let applicationId;
    let layoutMode;
    applicationId = undefined;
    ({ applicationId, layoutMode } = arg0);
    if (null != obj) {
      applicationId = obj.applicationId;
    }
    if (applicationId === applicationId) {
      obj = {};
      const merged = Object.assign(obj);
      obj["layoutMode"] = layoutMode;
    }
  },
  FRAME_SET_PANEL_MODE: function handleSetPanelMode(arg0) {
    if (null != obj) {
      obj = {};
      const merged = Object.assign(obj);
      obj["activityPanelMode"] = tmp;
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
    if (null != obj) {
      applicationId = obj.applicationId;
    }
    if (applicationId === applicationId) {
      obj = {};
      const merged = Object.assign(obj);
      obj["proxyTicket"] = proxyTicket;
    }
  },
  CHANNEL_SELECT: function handleChannelSelect() {
    let tmp = null != obj;
    if (tmp) {
      let flag = obj.layoutMode !== FrameLayoutModes.PIP;
      if (flag) {
        obj = {};
        const merged = Object.assign(obj);
        obj["layoutMode"] = FrameLayoutModes.PIP;
        flag = true;
      }
      tmp = flag;
    }
    return tmp;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/frames/FramesStore.tsx");

export default tmp6;
