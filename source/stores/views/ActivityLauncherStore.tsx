// Module ID: 10432
// Function ID: 80443
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10432 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function startActivityLaunchTimeout(applicationId, JOIN, closure_14) {
  JOIN = applicationId;
  const importDefault = JOIN;
  if (null != closure_13[applicationId]) {
    closure_13[applicationId].stop();
    const obj = closure_13[applicationId];
  }
  const timeout = new JOIN(dependencyMap[8]).Timeout();
  timeout.start(closure_14, () => {
    let obj = arg1(closure_2[9]);
    obj = { type: "ACTIVITY_LAUNCH_FAIL", applicationId: arg0, activityType: arg1 };
    return obj.dispatch(obj);
  });
  closure_13[applicationId] = timeout;
}
function handleActivityStateChanged(COMPLETE, JOIN, type) {
  let applicationId;
  let remotePartyId;
  ({ applicationId, remotePartyId } = type);
  if (COMPLETE === constants.COMPLETE) {
    if (null != closure_12[applicationId]) {
      delete r0[r4];
    }
    if (null != closure_13[applicationId]) {
      closure_13[applicationId].stop();
      delete r1[r2];
      const obj3 = closure_13[applicationId];
    }
  } else {
    let obj = closure_12[applicationId];
    if (null == obj) {
      obj = {};
    }
    obj = { state: COMPLETE, remotePartyId };
    obj[JOIN] = obj;
    closure_12[applicationId] = obj;
    if (COMPLETE === constants.FAILED) {
      startActivityLaunchTimeout(applicationId, JOIN, closure_14);
    } else if (COMPLETE === constants.LOADING) {
      let num = 15000;
      if (null == remotePartyId) {
        num = closure_14;
      }
      startActivityLaunchTimeout(applicationId, JOIN, num);
      const tmp6 = startActivityLaunchTimeout;
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
    if (null != tmp2[closure_11.JOIN]) {
      remotePartyId = tmp3.remotePartyId;
    }
    obj.remotePartyId = remotePartyId;
    return obj;
  });
  const found = mapped.filter((remotePartyId) => null != remotePartyId.remotePartyId);
  let closure_0 = false;
  const item = found.forEach((arg0) => {
    let applicationId;
    let remotePartyId;
    ({ applicationId, remotePartyId } = arg0);
    const applicationActivity = applicationActivity.getApplicationActivity(applicationId);
    const applicationActivity1 = applicationActivity2.getApplicationActivity(applicationId);
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
      callback(constants.COMPLETE, constants2.JOIN, obj);
      let closure_0 = true;
    }
  });
  return closure_0;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ ActivityActionStates: closure_10, ActivityActionTypes: closure_11 } = arg1(dependencyMap[7]));
let closure_12 = {};
let closure_13 = {};
let closure_14 = 120000;
let tmp3 = (Store) => {
  class ActivityLauncherStore {
    constructor() {
      self = this;
      tmp = closure_3(this, ActivityLauncherStore);
      obj = closure_6(ActivityLauncherStore);
      tmp2 = closure_5;
      if (closure_15()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ActivityLauncherStore;
  callback2(ActivityLauncherStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const items = [closure_8, closure_9];
      this.syncWith(items, closure_18);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getState",
    value(arg0, arg1) {
      let state;
      if (null != closure_12[arg0]) {
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
      return closure_12;
    }
  };
  items[2] = obj;
  return callback(ActivityLauncherStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp3.displayName = "ActivityLauncherStore";
tmp3 = new tmp3(importDefault(dependencyMap[9]), {
  OVERLAY_INITIALIZE: function handleOverlayInitialize(activityLauncherStates) {
    const merged = Object.assign(activityLauncherStates.activityLauncherStates);
    let closure_12 = {};
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
    if (null == closure_12[arg0.applicationId]) {
      return false;
    } else {
      delete r0[r1];
    }
  }
});
const obj = {
  OVERLAY_INITIALIZE: function handleOverlayInitialize(activityLauncherStates) {
    const merged = Object.assign(activityLauncherStates.activityLauncherStates);
    let closure_12 = {};
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
    if (null == closure_12[arg0.applicationId]) {
      return false;
    } else {
      delete r0[r1];
    }
  }
};
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("stores/views/ActivityLauncherStore.tsx");

export default tmp3;
