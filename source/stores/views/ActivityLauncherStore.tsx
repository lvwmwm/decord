// Module ID: 10443
// Function ID: 80517
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 10444, 4810, 653, 4015, 686, 566, 2]

// Module 10443 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "ME";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_10;
let closure_11;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function startActivityLaunchTimeout(applicationId, JOIN, c14) {
  const _require = applicationId;
  let closure_1 = JOIN;
  if (null != dependencyMap2[applicationId]) {
    dependencyMap2[applicationId].stop();
    let obj = dependencyMap2[applicationId];
  }
  const timeout = new _require(4015).Timeout();
  timeout.start(c14, () => {
    let obj = JOIN(outer1_2[9]);
    obj = { type: "ACTIVITY_LAUNCH_FAIL", applicationId: closure_0, activityType: JOIN };
    return obj.dispatch(obj);
  });
  dependencyMap2[applicationId] = timeout;
}
function handleActivityStateChanged(COMPLETE, JOIN, type) {
  let applicationId;
  let remotePartyId;
  ({ applicationId, remotePartyId } = type);
  if (COMPLETE === constants.COMPLETE) {
    if (null != dependencyMap[applicationId]) {
      delete tmp[tmp4];
    }
    if (null != dependencyMap2[applicationId]) {
      dependencyMap2[applicationId].stop();
      delete tmp2[tmp3];
      const obj3 = dependencyMap2[applicationId];
    }
  } else {
    let obj = dependencyMap[applicationId];
    if (null == obj) {
      obj = {};
    }
    obj = { state: COMPLETE, remotePartyId };
    obj[JOIN] = obj;
    dependencyMap[applicationId] = obj;
    if (COMPLETE === constants.FAILED) {
      startActivityLaunchTimeout(applicationId, JOIN, c14);
    } else if (COMPLETE === constants.LOADING) {
      let num = 15000;
      if (null == remotePartyId) {
        num = c14;
      }
      startActivityLaunchTimeout(applicationId, JOIN, num);
      const tmp10 = startActivityLaunchTimeout;
    }
  }
}
function handleActivityComplete(type) {
  let tmp = "ACTIVITY_JOIN" !== type.type;
  if (!tmp) {
    tmp = null == type.parentApplicationId;
  }
  if (tmp) {
    tmp = handleActivityStateChanged(constants.COMPLETE, constants2.JOIN, type);
  }
  return tmp;
}
function handleActivityUpdate() {
  const entries = Object.entries(closure_12);
  const mapped = entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const obj = { applicationId: tmp };
    let remotePartyId;
    if (null != tmp2[outer1_11.JOIN]) {
      remotePartyId = tmp3.remotePartyId;
    }
    obj.remotePartyId = remotePartyId;
    return obj;
  });
  const found = mapped.filter((remotePartyId) => null != remotePartyId.remotePartyId);
  let c0 = false;
  const item = found.forEach((arg0) => {
    let applicationId;
    let remotePartyId;
    ({ applicationId, remotePartyId } = arg0);
    const applicationActivity = outer1_8.getApplicationActivity(applicationId);
    const applicationActivity1 = outer1_9.getApplicationActivity(applicationId);
    let id;
    if (null != applicationActivity) {
      const party = applicationActivity.party;
      if (null != party) {
        id = party.id;
      }
    }
    let tmp4 = id !== remotePartyId;
    if (tmp4) {
      let id1;
      if (null != applicationActivity1) {
        const party2 = applicationActivity1.party;
        if (null != party2) {
          id1 = party2.id;
        }
      }
      tmp4 = id1 !== remotePartyId;
    }
    if (!tmp4) {
      const obj = { applicationId, remotePartyId };
      outer1_17(outer1_10.COMPLETE, outer1_11.JOIN, obj);
      let c0 = true;
    }
  });
  return c0;
}
({ ActivityActionStates: closure_10, ActivityActionTypes: closure_11 } = ME);
let closure_12 = {};
let closure_13 = {};
let c14 = 120000;
let tmp3 = ((Store) => {
  class ActivityLauncherStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, ActivityLauncherStore);
      obj = outer1_6(ActivityLauncherStore);
      tmp2 = outer1_5;
      if (outer1_15()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ActivityLauncherStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const items = [outer1_8, outer1_9];
      this.syncWith(items, outer1_18);
    }
  };
  let items = [obj, , ];
  obj = {
    key: "getState",
    value(arg0, arg1) {
      let state;
      if (null != outer1_12[arg0]) {
        if (null != tmp[arg1]) {
          state = tmp4.state;
        }
      }
      return state;
    }
  };
  items[1] = obj;
  obj = {
    key: "getStates",
    value() {
      return outer1_12;
    }
  };
  items[2] = obj;
  return callback(ActivityLauncherStore, items);
})(require("initialize").Store);
tmp3.displayName = "ActivityLauncherStore";
tmp3 = new tmp3(require("dispatcher"), {
  OVERLAY_INITIALIZE: function handleOverlayInitialize(activityLauncherStates) {
    const obj = {};
    const merged = Object.assign(activityLauncherStates.activityLauncherStates);
  },
  ACTIVITY_JOIN_LOADING(type) {
    return handleActivityStateChanged(constants.LOADING, constants2.JOIN, type);
  },
  ACTIVITY_JOIN_FAILED(type) {
    return handleActivityStateChanged(constants.FAILED, constants2.JOIN, type);
  },
  ACTIVITY_JOIN: handleActivityComplete,
  EMBEDDED_ACTIVITY_CLOSE: handleActivityComplete,
  ACTIVITY_LAUNCH_FAIL: function handleActivityLaunchFail(arg0) {
    if (null == dependencyMap[arg0.applicationId]) {
      return false;
    } else {
      delete tmp[tmp2];
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/views/ActivityLauncherStore.tsx");

export default tmp3;
