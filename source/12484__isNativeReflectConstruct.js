// Module ID: 12484
// Function ID: 95702
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12484 (_isNativeReflectConstruct)
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
    let obj = importDefault(dependencyMap[12]);
    obj = { location: "ConnectivityIndicatorStateStore" };
    const timeoutMs = obj.getConfig(obj).timeoutMs;
    let num2 = 10000;
    if (null != timeoutMs) {
      num2 = timeoutMs;
    }
    let tmp = num2;
  } else {
    tmp = closure_17;
  }
  return tmp;
}
function nextState(HIDDEN) {
  if (!closure_24) {
    if (store.getState() !== AppStates.BACKGROUND) {
      if (null != closure_21) {
        if (null != closure_20) {
          if (closure_21) {
            let UNKNOWN = constants.OFFLINE;
          } else if (!closure_20) {
            UNKNOWN = constants.ONLINE;
          } else {
            UNKNOWN = constants.CONNECTING;
          }
        }
        if (obj.HIDDEN === HIDDEN) {
          if (constants.OFFLINE === UNKNOWN) {
            let obj = {};
            obj = {};
            obj.state = obj.NO_CONNECTION;
            obj.delayMs = closure_17;
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
        } else if (obj.BACK_ONLINE === HIDDEN) {
          if (constants.OFFLINE === UNKNOWN) {
            const obj3 = {};
            const obj4 = { state: obj.NO_CONNECTION, delayMs: closure_17 };
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
            const obj8 = { state: obj.HIDDEN, delayMs: closure_16 };
            obj7.delayed = obj8;
            return obj7;
          }
        } else if (obj.WAITING_FOR_NETWORK === HIDDEN) {
          if (constants.OFFLINE === UNKNOWN) {
            const obj9 = { immediate: obj.NO_CONNECTION };
            return obj9;
          } else if (constants.ONLINE === UNKNOWN) {
            const obj10 = { immediate: obj.BACK_ONLINE };
            const obj11 = { state: obj.HIDDEN, delayMs: closure_16 };
            obj10.delayed = obj11;
            return obj10;
          } else {
            if (constants.CONNECTING !== UNKNOWN) {
              const UNKNOWN3 = constants.UNKNOWN;
            }
            return {};
          }
        } else if (obj.NO_CONNECTION === HIDDEN) {
          if (constants.CONNECTING === UNKNOWN) {
            const obj12 = { immediate: obj.WAITING_FOR_NETWORK };
            return obj12;
          } else if (constants.ONLINE === UNKNOWN) {
            obj = {};
            obj.immediate = obj.BACK_ONLINE;
            const obj13 = { state: obj.HIDDEN, delayMs: closure_16 };
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
  if (null != closure_26) {
    importDefaultResult.verbose("clearing pending state update timer");
    const _clearTimeout = clearTimeout;
    clearTimeout(closure_26);
    closure_26 = null;
  }
  let closure_19 = null;
}
function updateState() {
  const tmp2 = nextState(HIDDEN);
  if (null != tmp2.immediate) {
    const HIDDEN = tmp2.immediate;
    let tmp5 = null !== closure_19;
    if (tmp5) {
      tmp5 = closure_19 === HIDDEN;
    }
    if (tmp5) {
      clearPendingDelayed();
    }
    if (tmp !== HIDDEN) {
      const _HermesInternal = HermesInternal;
      importDefaultResult.verbose("state changed immediately from " + tmp + " to " + HIDDEN);
      if (null != tmp4) {
        obj.emitChange();
      }
      const obj = tmp4;
    }
  }
  if (null != tmp2.delayed) {
    const delayed = tmp2.delayed;
    const state = delayed.state;
    const importDefault = state;
    if (null != timeout) {
      importDefaultResult.verbose("clearing existing state update timer because we're scheduling a new one");
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
    }
    closure_19 = state;
    const _setTimeout = setTimeout;
    const timeout = setTimeout(() => {
      let closure_26 = null;
      let closure_19 = null;
      let closure_18 = state;
      if (closure_18 !== state) {
        const _HermesInternal = HermesInternal;
        closure_13.verbose("state changed after a delay from " + tmp + " to " + closure_18);
        if (null != closure_28) {
          obj.emitChange();
        }
        const obj = closure_28;
      }
    }, delayed.delayMs);
  } else {
    clearPendingDelayed();
  }
}
function handleConnectionClosed() {
  let closure_22 = false;
  updateState();
  return false;
}
function handleLoadingMessagesChanged() {
  const channelId = channelId.getChannelId();
  if (null == channelId) {
    return false;
  } else {
    const isLoadingMessagesResult = loadingMessages.isLoadingMessages(channelId);
    if (isLoadingMessagesResult !== closure_23) {
      closure_23 = isLoadingMessagesResult;
      updateState();
    }
    return false;
  }
}
function handleAuthStoreChanged() {
  const isAuthenticatedResult = authenticated.isAuthenticated();
  if (closure_20 !== isAuthenticatedResult) {
    closure_20 = isAuthenticatedResult;
    updateState();
  }
  return false;
}
function handleAppStateUpdate() {
  const state = store.getState();
  if (AppStates.ACTIVE === state) {
    if (closure_25 === AppStates.BACKGROUND) {
      let closure_24 = true;
      if (null != timeout) {
        const _clearTimeout2 = clearTimeout;
        clearTimeout(timeout);
      }
      const _setTimeout = setTimeout;
      let timeout = setTimeout(() => {
        let closure_24 = false;
        let closure_27 = null;
        callback();
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
  closure_25 = state;
  updateState();
  return false;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
const AppStates = arg1(dependencyMap[10]).AppStates;
let importDefaultResult = importDefault(dependencyMap[11]);
importDefaultResult = new importDefaultResult("ConnectivityIndicatorStateStore");
let obj = { HIDDEN: "hidden", WAITING_FOR_NETWORK: "waiting_for_network", NO_CONNECTION: "no_connection", BACK_ONLINE: "back_online" };
let closure_15 = { UNKNOWN: "unknown", ONLINE: "online", OFFLINE: "offline", CONNECTING: "connecting" };
let closure_16 = 2000;
let closure_17 = 1000;
const HIDDEN = obj.HIDDEN;
let closure_19 = null;
let closure_20 = null;
let closure_21 = null;
let closure_22 = false;
let closure_23 = false;
let closure_24 = false;
let closure_25 = null;
let closure_26 = null;
let closure_27 = null;
let tmp4 = null;
tmp4 = (Store) => {
  class ConnectivityIndicatorStateStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ConnectivityIndicatorStateStore);
      obj = closure_5(ConnectivityIndicatorStateStore);
      tmp2 = closure_4;
      if (closure_29()) {
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
  const importDefault = ConnectivityIndicatorStateStore;
  callback2(ConnectivityIndicatorStateStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(authenticated, closure_7, closure_9, closure_10, closure_11);
      const items = [closure_9];
      this.syncWith(items, closure_34);
      const items1 = [authenticated];
      this.syncWith(items1, closure_35);
      const items2 = [closure_11];
      this.syncWith(items2, closure_36);
      ConnectivityIndicatorStateStore(closure_1[13]).addOfflineCallback(() => {
        let closure_21 = true;
        callback();
      });
      const obj = ConnectivityIndicatorStateStore(closure_1[13]);
      ConnectivityIndicatorStateStore(closure_1[13]).addOnlineCallback(() => {
        let closure_21 = false;
        callback();
      });
      const obj2 = ConnectivityIndicatorStateStore(closure_1[13]);
      let closure_21 = !ConnectivityIndicatorStateStore(closure_1[13]).isOnline();
      let closure_20 = authenticated.isAuthenticated();
      callback4();
    }
  };
  const items = [obj, ];
  obj = {
    key: "getState",
    value() {
      return closure_18;
    }
  };
  items[1] = obj;
  return callback(ConnectivityIndicatorStateStore, items);
}(importDefault(dependencyMap[14]).Store);
tmp4.displayName = "ConnectivityIndicatorStateStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_22 = true;
    updateState();
    return false;
  },
  CONNECTION_RESUMED: function handleConnectionResumed() {
    let closure_22 = true;
    updateState();
    return false;
  },
  CONNECTION_CLOSED: handleConnectionClosed,
  CONNECTION_INTERRUPTED: handleConnectionClosed
};
tmp4 = new tmp4(importDefault(dependencyMap[15]), obj);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/connectivity/native/ConnectivityIndicatorStateStore.tsx");

export default tmp4;
export const ConnectivityIndicatorState = obj;
