// Module ID: 4810
// Function ID: 41963
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4811, 1316, 4162, 4943, 4165, 10473, 4217, 4145, 653, 4174, 3803, 1360, 9119, 636, 22, 566, 686, 2]

// Module 4810 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import explicitContentFromProto from "explicitContentFromProto";
import isListeningOnSpotify from "isListeningOnSpotify";
import isUndefinedOrNull from "isUndefinedOrNull";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import { sortActivity } from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_18;
let closure_19;
let closure_20;
let closure_22;
let closure_23;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function filterPlayingActivities(arg0) {
  let iter;
  if (0 === arg0.length) {
    return arg0;
  } else {
    const items = [];
    const items1 = [];
    const tmp14 = _createForOfIteratorHelperLoose(arg0);
    let iter2 = tmp14();
    if (!iter2.done) {
      do {
        let value = iter2.value;
        let tmp = constants2;
        if (value.type === constants2.PLAYING) {
          let arr = items1.push(value);
        } else {
          arr = items.push(value);
        }
        iter = tmp14();
        iter2 = iter;
      } while (!iter.done);
    }
    if (0 === items1.length) {
      return arg0;
    } else if (1 === items1.length) {
      return arg0;
    } else {
      const items2 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(items1, 0);
      const items3 = [];
      arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
      items3[arraySpreadResult] = items2.sort(sortActivity)[0];
      const sum = arraySpreadResult + 1;
      return items3.sort(sortActivity);
    }
  }
}
function shouldShowApplicationActivity(application_id) {
  return require(4174) /* convertToTransitionState */.shouldShareApplicationActivity(application_id, closure_12);
}
function shouldShowActivity(flags) {
  flags = flags.flags;
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  if (obj.hasFlag(num, constants.CONTEXTLESS)) {
    return true;
  } else {
    const type = flags.type;
    if (constants2.LISTENING === type) {
      if (importDefault(9119)(flags)) {
        let shouldShowActivityResult = closure_8.shouldShowActivity();
      } else {
        shouldShowActivityResult = null != flags.application_id;
        if (shouldShowActivityResult) {
          shouldShowActivityResult = shouldShowApplicationActivity(flags.application_id);
        }
      }
      return shouldShowActivityResult;
    } else if (constants2.PLAYING === type) {
      if (null != flags.application_id) {
        let setting = shouldShowApplicationActivity(flags.application_id);
      } else {
        const searchGamesByNameResult = closure_10.searchGamesByName(flags.name);
        if (1 === searchGamesByNameResult.length) {
          setting = shouldShowApplicationActivity(searchGamesByNameResult[0]);
        } else {
          const ShowCurrentGame = require(3803) /* explicitContentFromProto */.ShowCurrentGame;
          setting = ShowCurrentGame.getSetting();
        }
      }
      return setting;
    } else {
      if (constants2.STREAMING !== type) {
        const WATCHING = constants2.WATCHING;
      }
      let tmp4 = null == flags.application_id;
      if (!tmp4) {
        tmp4 = shouldShowApplicationActivity(flags.application_id);
      }
      return tmp4;
    }
  }
  obj = require(1360) /* hasFlag */;
}
function handleUpdate() {
  const idleSince = closure_11.getIdleSince();
  let num = 0;
  if (null != idleSince) {
    num = idleSince;
  }
  let closure_27 = closure_11.isAFK();
  if (c28) {
    let IDLE = closure_23;
  } else if (c21) {
    IDLE = StatusTypes.INVISIBLE;
  } else {
    const StatusSetting = require(3803) /* explicitContentFromProto */.StatusSetting;
    let ONLINE = StatusSetting.getSetting();
    if (ONLINE === StatusTypes.UNKNOWN) {
      ONLINE = StatusTypes.ONLINE;
    }
    IDLE = ONLINE;
  }
  let tmp9 = IDLE === StatusTypes.ONLINE;
  if (tmp9) {
    tmp9 = num > 0;
  }
  if (tmp9) {
    IDLE = StatusTypes.IDLE;
  }
  if (!c28) {
    if (IDLE !== StatusTypes.INVISIBLE) {
      activities = activities.getActivities();
      let found = activities.filter(shouldShowActivity);
    }
    let flag = false;
    if (!importDefault(636)(found, found)) {
      let closure_26 = filterPlayingActivities(found);
      flag = true;
    }
    const remoteActivities = store.getRemoteActivities();
    if (remoteActivities !== remoteActivities) {
      flag = true;
    }
    const hiddenActivities = store.getHiddenActivities();
    if (flag) {
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(found, 0);
      arraySpreadResult = HermesBuiltin.arraySpread(remoteActivities.filter((type) => type.type !== outer1_19.CUSTOM_STATUS), arraySpreadResult);
      const tmp28 = importDefault(22);
      const tmp28Result = importDefault(22)(items.sort(sortActivity));
      const valueResult = importDefault(22)(items.sort(sortActivity)).uniqBy((type) => "" + type.type + ":" + type.application_id + ":" + type.name).value();
      let closure_32 = filterPlayingActivities(valueResult);
      const iter = importDefault(22)(items.sort(sortActivity)).uniqBy((type) => "" + type.type + ":" + type.application_id + ":" + type.name);
    }
  }
  found = [];
}
function handleConnectionOpen() {
  let c28 = false;
  const UNKNOWN = StatusTypes.UNKNOWN;
  handleUpdate();
  const result = currentUserOnConnectionOpen.setCurrentUserOnConnectionOpen(closure_22, closure_31);
}
const StatusTypes = ME.StatusTypes;
({ ActivityFlags: closure_18, ActivityTypes: closure_19, AppStates: closure_20 } = ME);
let c21 = false;
({ ONLINE: closure_22, UNKNOWN: closure_23 } = StatusTypes);
let c24 = 0;
let closure_25 = [];
let closure_26 = [];
let c27 = false;
let c28 = true;
let closure_29 = Object.freeze([]);
let closure_30 = Object.freeze([]);
let closure_31 = [];
let closure_32 = [];
let tmp3 = ((Store) => {
  class SelfPresenceStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, SelfPresenceStore);
      obj = outer1_6(SelfPresenceStore);
      tmp2 = outer1_5;
      if (outer1_33()) {
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
  callback2(SelfPresenceStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_10, outer1_11, outer1_12, outer1_13, outer1_14, outer1_16, outer1_8, outer1_9);
      const items = [outer1_13];
      this.syncWith(items, outer1_39);
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "getLocalPresence",
    value() {
      return { status: outer1_22, since: outer1_24, activities: outer1_26, afk: outer1_27 };
    }
  };
  items[1] = obj;
  obj = {
    key: "getStatus",
    value() {
      return outer1_22;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getActivities",
    value() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      return flag ? outer1_32 : outer1_26;
    }
  };
  items[4] = {
    key: "getUnfilteredActivities",
    value() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      return flag ? outer1_31 : outer1_25;
    }
  };
  items[5] = {
    key: "getHiddenActivities",
    value() {
      return outer1_30;
    }
  };
  items[6] = {
    key: "getPrimaryActivity",
    value() {
      let flag = arg0;
      const self = this;
      if (arg0 === undefined) {
        flag = true;
      }
      return self.getActivities(flag)[0];
    }
  };
  items[7] = {
    key: "getApplicationActivity",
    value(arg0) {
      let flag = arg1;
      const self = this;
      let closure_0 = arg0;
      if (arg1 === undefined) {
        flag = true;
      }
      return self.findActivity((application_id) => application_id.application_id === closure_0, flag);
    }
  };
  items[8] = {
    key: "findActivity",
    value(arg0) {
      let flag = arg1;
      const self = this;
      if (arg1 === undefined) {
        flag = true;
      }
      const activities = self.getActivities(flag);
      return activities.find(arg0);
    }
  };
  return callback(SelfPresenceStore, items);
})(require("initialize").Store);
tmp3.displayName = "SelfPresenceStore";
tmp3 = new tmp3(require("dispatcher"), {
  START_SESSION: handleUpdate,
  CONNECTION_OPEN: function handleConnectionOpenTracked() {
    handleConnectionOpen();
  },
  CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CONNECTION_CLOSED: handleUpdate,
  IDLE: handleUpdate,
  AFK: handleUpdate,
  RUNNING_GAMES_CHANGE: handleUpdate,
  STREAMING_UPDATE: handleUpdate,
  USER_SETTINGS_PROTO_UPDATE: handleUpdate,
  LOCAL_ACTIVITY_UPDATE: handleUpdate,
  SPOTIFY_PLAYER_STATE: handleUpdate,
  SPOTIFY_PLAYER_PLAY: handleUpdate,
  USER_CONNECTIONS_UPDATE: handleUpdate,
  SESSIONS_REPLACE: handleUpdate,
  RPC_APP_DISCONNECTED: handleUpdate,
  LIBRARY_FETCH_SUCCESS: handleUpdate,
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: handleUpdate,
  LOGOUT: function handleLogout() {
    let c28 = true;
    let closure_23 = closure_22;
    handleUpdate();
  },
  FORCE_INVISIBLE: function handleForceInvisible(invisible) {
    invisible = invisible.invisible;
    handleUpdate();
  },
  WINDOW_FOCUS: function handleWindowFocus() {
    let c21 = false;
    handleUpdate();
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (state.state === constants3.ACTIVE) {
      if (c21) {
        c21 = false;
        handleUpdate();
      }
    }
    return false;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/SelfPresenceStore.tsx");

export default tmp3;
