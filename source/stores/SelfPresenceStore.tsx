// Module ID: 4808
// Function ID: 41925
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4808 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
        let tmp = closure_19;
        if (value.type === closure_19.PLAYING) {
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
  return arg1(dependencyMap[14]).shouldShareApplicationActivity(application_id, closure_12);
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
      if (importDefault(dependencyMap[17])(flags)) {
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
          const ShowCurrentGame = arg1(dependencyMap[15]).ShowCurrentGame;
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
  const obj = arg1(dependencyMap[16]);
}
function handleUpdate() {
  const idleSince = closure_11.getIdleSince();
  let num = 0;
  if (null != idleSince) {
    num = idleSince;
  }
  let closure_24 = num;
  let closure_27 = closure_11.isAFK();
  if (closure_28) {
    let IDLE = closure_23;
  } else if (closure_21) {
    IDLE = StatusTypes.INVISIBLE;
  } else {
    const StatusSetting = arg1(dependencyMap[15]).StatusSetting;
    let ONLINE = StatusSetting.getSetting();
    if (ONLINE === StatusTypes.UNKNOWN) {
      ONLINE = StatusTypes.ONLINE;
    }
    IDLE = ONLINE;
  }
  let tmp9 = IDLE === StatusTypes.ONLINE;
  if (tmp9) {
    tmp9 = closure_24 > 0;
  }
  if (tmp9) {
    IDLE = StatusTypes.IDLE;
  }
  if (!closure_28) {
    if (IDLE !== StatusTypes.INVISIBLE) {
      const activities = activities.getActivities();
      let found = activities.filter(shouldShowActivity);
    }
    let flag = false;
    if (!importDefault(dependencyMap[18])(closure_25, found)) {
      closure_25 = found;
      let closure_26 = filterPlayingActivities(found);
      flag = true;
    }
    const remoteActivities = store.getRemoteActivities();
    if (closure_29 !== remoteActivities) {
      closure_29 = remoteActivities;
      flag = true;
    }
    const hiddenActivities = store.getHiddenActivities();
    if (closure_30 !== hiddenActivities) {
      closure_30 = hiddenActivities;
    }
    if (flag) {
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(closure_25, 0);
      arraySpreadResult = HermesBuiltin.arraySpread(closure_29.filter((type) => type.type !== constants.CUSTOM_STATUS), arraySpreadResult);
      const tmp28 = importDefault(dependencyMap[19]);
      const tmp28Result = importDefault(dependencyMap[19])(items.sort(sortActivity));
      const valueResult = importDefault(dependencyMap[19])(items.sort(sortActivity)).uniqBy((type) => "" + type.type + ":" + type.application_id + ":" + type.name).value();
      let closure_31 = valueResult;
      let closure_32 = filterPlayingActivities(valueResult);
      const iter = importDefault(dependencyMap[19])(items.sort(sortActivity)).uniqBy((type) => "" + type.type + ":" + type.application_id + ":" + type.name);
    }
  }
  found = [];
}
function handleConnectionOpen() {
  let closure_28 = false;
  const UNKNOWN = StatusTypes.UNKNOWN;
  handleUpdate();
  const result = currentUserOnConnectionOpen.setCurrentUserOnConnectionOpen(closure_22, closure_31);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
const sortActivity = arg1(dependencyMap[11]).sortActivity;
let closure_16 = importDefault(dependencyMap[12]);
const tmp2 = arg1(dependencyMap[13]);
const StatusTypes = tmp2.StatusTypes;
({ ActivityFlags: closure_18, ActivityTypes: closure_19, AppStates: closure_20 } = tmp2);
let closure_21 = false;
({ ONLINE: closure_22, UNKNOWN: closure_23 } = StatusTypes);
let closure_24 = 0;
let closure_25 = [];
let closure_26 = [];
let closure_27 = false;
let closure_28 = true;
let closure_29 = Object.freeze([]);
let closure_30 = Object.freeze([]);
let closure_31 = [];
let closure_32 = [];
let tmp3 = (Store) => {
  class SelfPresenceStore {
    constructor() {
      self = this;
      tmp = closure_3(this, SelfPresenceStore);
      obj = closure_6(SelfPresenceStore);
      tmp2 = closure_5;
      if (closure_33()) {
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
  const arg1 = SelfPresenceStore;
  callback2(SelfPresenceStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_10, closure_11, closure_12, closure_13, closure_14, closure_16, closure_8, closure_9);
      const items = [closure_13];
      this.syncWith(items, closure_39);
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "getLocalPresence",
    value() {
      return { status: closure_22, since: closure_24, activities: closure_26, afk: closure_27 };
    }
  };
  items[1] = obj;
  obj = {
    key: "getStatus",
    value() {
      return closure_22;
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
      return flag ? closure_32 : closure_26;
    }
  };
  items[4] = {
    key: "getUnfilteredActivities",
    value() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      return flag ? closure_31 : closure_25;
    }
  };
  items[5] = {
    key: "getHiddenActivities",
    value() {
      return closure_30;
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
      const SelfPresenceStore = arg0;
      if (arg1 === undefined) {
        flag = true;
      }
      return self.findActivity((application_id) => application_id.application_id === application_id, flag);
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
}(importDefault(dependencyMap[20]).Store);
tmp3.displayName = "SelfPresenceStore";
tmp3 = new tmp3(importDefault(dependencyMap[21]), {
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
    let closure_28 = true;
    let closure_23 = closure_22;
    handleUpdate();
  },
  FORCE_INVISIBLE: function handleForceInvisible(invisible) {
    invisible = invisible.invisible;
    handleUpdate();
  },
  WINDOW_FOCUS: function handleWindowFocus() {
    let closure_21 = false;
    handleUpdate();
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (state.state === constants3.ACTIVE) {
      if (closure_21) {
        closure_21 = false;
        handleUpdate();
      }
    }
    return false;
  }
});
const result = arg1(dependencyMap[22]).fileFinishedImporting("stores/SelfPresenceStore.tsx");

export default tmp3;
