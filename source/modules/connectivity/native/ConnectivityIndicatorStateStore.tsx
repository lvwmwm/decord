// Module ID: 12612
// Function ID: 97931
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 6708, 1194, 4349, 1906, 6651, 653, 3, 12613, 1430, 566, 686, 2]

// Module 12612 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import dispatcher from "dispatcher";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { AppStates } from "ME";
import importDefaultResult from "_getPrototypeOf";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getShowWaitingForNetworkDelayMs() {
  if (closure_7.hasCache()) {
    let obj = importDefault(12613);
    obj = { location: "ConnectivityIndicatorStateStore" };
    const timeoutMs = obj.getConfig(obj).timeoutMs;
    let num2 = 10000;
    if (null != timeoutMs) {
      num2 = timeoutMs;
    }
    let tmp = num2;
  } else {
    tmp = c17;
  }
  return tmp;
}
function nextState(immediate) {
  if (!c24) {
    if (store.getState() !== AppStates.BACKGROUND) {
      if (null != c21) {
        if (null != c20) {
          if (c21) {
            let UNKNOWN = constants.OFFLINE;
          } else if (!c20) {
            UNKNOWN = constants.ONLINE;
          } else {
            UNKNOWN = constants.CONNECTING;
          }
        }
        if (obj.HIDDEN === immediate) {
          if (constants.OFFLINE === UNKNOWN) {
            obj = {};
            obj = {};
            obj.state = obj.NO_CONNECTION;
            obj.delayMs = c17;
            obj.delayed = obj;
            return obj;
          } else if (constants.CONNECTING === UNKNOWN) {
            const obj1 = {};
            const obj2 = { state: obj.WAITING_FOR_NETWORK, delayMs: getShowWaitingForNetworkDelayMs() };
            obj1.delayed = obj2;
            return obj1;
          } else {
            if (constants.ONLINE !== UNKNOWN) {
              const UNKNOWN4 = constants.UNKNOWN;
            }
            return {};
          }
        } else if (obj.BACK_ONLINE === immediate) {
          if (constants.OFFLINE === UNKNOWN) {
            const obj3 = {};
            const obj4 = { state: obj.NO_CONNECTION, delayMs: c17 };
            obj3.delayed = obj4;
            return obj3;
          } else if (constants.CONNECTING === UNKNOWN) {
            const obj5 = {};
            const obj6 = { state: obj.WAITING_FOR_NETWORK, delayMs: getShowWaitingForNetworkDelayMs() };
            obj5.delayed = obj6;
            return obj5;
          } else {
            if (constants.ONLINE !== UNKNOWN) {
              if (constants.UNKNOWN !== UNKNOWN) {
                return {};
              }
            }
            const obj7 = {};
            const obj8 = { state: obj.HIDDEN, delayMs: c16 };
            obj7.delayed = obj8;
            return obj7;
          }
        } else if (obj.WAITING_FOR_NETWORK === immediate) {
          if (constants.OFFLINE === UNKNOWN) {
            const obj9 = { immediate: obj.NO_CONNECTION };
            return obj9;
          } else if (constants.ONLINE === UNKNOWN) {
            const obj10 = { immediate: obj.BACK_ONLINE };
            const obj11 = { state: obj.HIDDEN, delayMs: c16 };
            obj10.delayed = obj11;
            return obj10;
          } else {
            if (constants.CONNECTING !== UNKNOWN) {
              const UNKNOWN3 = constants.UNKNOWN;
            }
            return {};
          }
        } else if (obj.NO_CONNECTION === immediate) {
          if (constants.CONNECTING === UNKNOWN) {
            const obj12 = { immediate: obj.WAITING_FOR_NETWORK };
            return obj12;
          } else if (constants.ONLINE === UNKNOWN) {
            obj = {};
            obj.immediate = obj.BACK_ONLINE;
            const obj13 = { state: obj.HIDDEN, delayMs: c16 };
            obj.delayed = obj13;
            return obj;
          } else {
            if (constants.OFFLINE !== UNKNOWN) {
              const UNKNOWN2 = constants.UNKNOWN;
            }
            return {};
          }
        }
      }
      UNKNOWN = constants.UNKNOWN;
    }
  }
  return { immediate: obj.HIDDEN };
}
function clearPendingDelayed() {
  if (null != c26) {
    importDefaultResult.verbose("clearing pending state update timer");
    const _clearTimeout = clearTimeout;
    clearTimeout(c26);
    c26 = null;
  }
  let c19 = null;
}
function updateState() {
  const tmp2 = nextState(immediate);
  if (null != tmp2.immediate) {
    immediate = tmp2.immediate;
    let tmp5 = null !== state;
    if (tmp5) {
      tmp5 = state === immediate;
    }
    if (tmp5) {
      clearPendingDelayed();
    }
    if (tmp !== immediate) {
      let _HermesInternal = HermesInternal;
      importDefaultResult.verbose("state changed immediately from " + tmp + " to " + immediate);
      if (null != c28) {
        obj.emitChange();
      }
      obj = c28;
    }
  }
  if (null != tmp2.delayed) {
    const delayed = tmp2.delayed;
    state = delayed.state;
    if (null != timeout) {
      importDefaultResult.verbose("clearing existing state update timer because we're scheduling a new one");
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
    }
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      let closure_26 = null;
      const state = null;
      const immediate = state;
      if (immediate !== state) {
        const _HermesInternal = HermesInternal;
        outer1_13.verbose("state changed after a delay from " + tmp + " to " + immediate);
        if (null != outer1_28) {
          obj.emitChange();
        }
        obj = outer1_28;
      }
    }, delayed.delayMs);
  } else {
    clearPendingDelayed();
  }
}
function handleConnectionClosed() {
  let c22 = false;
  updateState();
  return false;
}
function handleLoadingMessagesChanged() {
  channelId = channelId.getChannelId();
  if (null == channelId) {
    return false;
  } else {
    const isLoadingMessagesResult = loadingMessages.isLoadingMessages(channelId);
    if (isLoadingMessagesResult !== c23) {
      c23 = isLoadingMessagesResult;
      updateState();
    }
    return false;
  }
}
function handleAuthStoreChanged() {
  const isAuthenticatedResult = authenticated.isAuthenticated();
  if (c20 !== isAuthenticatedResult) {
    c20 = isAuthenticatedResult;
    updateState();
  }
  return false;
}
function handleAppStateUpdate() {
  const state = store.getState();
  if (AppStates.ACTIVE === state) {
    if (state === AppStates.BACKGROUND) {
      let c24 = true;
      if (null != timeout) {
        const _clearTimeout2 = clearTimeout;
        clearTimeout(timeout);
      }
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let c24 = false;
        let c27 = null;
        outer1_33();
      }, 5000);
    }
  } else if (AppStates.BACKGROUND === state) {
    if (null != timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      timeout = null;
    }
  } else {
    const INACTIVE = AppStates.INACTIVE;
  }
  updateState();
  return false;
}
importDefaultResult = new importDefaultResult("ConnectivityIndicatorStateStore");
let obj = { HIDDEN: "hidden", WAITING_FOR_NETWORK: "waiting_for_network", NO_CONNECTION: "no_connection", BACK_ONLINE: "back_online" };
let closure_15 = { UNKNOWN: "unknown", ONLINE: "online", OFFLINE: "offline", CONNECTING: "connecting" };
let c16 = 2000;
let c17 = 1000;
const HIDDEN = obj.HIDDEN;
let c19 = null;
let c20 = null;
let c21 = null;
let c22 = false;
let c23 = false;
let c24 = false;
let c25 = null;
let c26 = null;
let c27 = null;
let c28 = null;
let tmp4 = ((Store) => {
  class ConnectivityIndicatorStateStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, ConnectivityIndicatorStateStore);
      obj = outer1_5(ConnectivityIndicatorStateStore);
      tmp2 = outer1_4;
      if (outer1_29()) {
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
  callback2(ConnectivityIndicatorStateStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8, outer1_7, outer1_9, outer1_10, outer1_11);
      const items = [outer1_9];
      this.syncWith(items, outer1_34);
      const items1 = [outer1_8];
      this.syncWith(items1, outer1_35);
      const items2 = [outer1_11];
      this.syncWith(items2, outer1_36);
      ConnectivityIndicatorStateStore(outer1_1[13]).addOfflineCallback(() => {
        const outer2_21 = true;
        outer2_33();
      });
      const obj = ConnectivityIndicatorStateStore(outer1_1[13]);
      ConnectivityIndicatorStateStore(outer1_1[13]).addOnlineCallback(() => {
        const outer2_21 = false;
        outer2_33();
      });
      const obj2 = ConnectivityIndicatorStateStore(outer1_1[13]);
      const outer1_21 = !ConnectivityIndicatorStateStore(outer1_1[13]).isOnline();
      const outer1_20 = outer1_8.isAuthenticated();
      outer1_33();
    }
  };
  let items = [obj, ];
  obj = {
    key: "getState",
    value() {
      return outer1_18;
    }
  };
  items[1] = obj;
  return callback(ConnectivityIndicatorStateStore, items);
})(require("initialize").Store);
tmp4.displayName = "ConnectivityIndicatorStateStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let c22 = true;
    updateState();
    return false;
  },
  CONNECTION_RESUMED: function handleConnectionResumed() {
    let c22 = true;
    updateState();
    return false;
  },
  CONNECTION_CLOSED: handleConnectionClosed,
  CONNECTION_INTERRUPTED: handleConnectionClosed
};
tmp4 = new tmp4(require("dispatcher"), obj);
c28 = tmp4;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/connectivity/native/ConnectivityIndicatorStateStore.tsx");

export default tmp4;
export const ConnectivityIndicatorState = obj;
