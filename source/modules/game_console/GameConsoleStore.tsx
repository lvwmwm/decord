// Module ID: 4140
// Function ID: 34801
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4140 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let closure_0 = Symbol_iterator;
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
      closure_0 = tmp;
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
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = importDefault(dependencyMap[6]);
let closure_7 = null;
let closure_8 = null;
const set = new Set();
let closure_10 = {};
let closure_11 = {};
const set1 = new Set();
let closure_13 = Object.freeze({});
let tmp4 = (DeviceSettingsStore) => {
  class GameConsoleStore {
    constructor() {
      self = this;
      tmp = GameConsoleStore(this, GameConsoleStore);
      obj = closure_3(GameConsoleStore);
      tmp2 = closure_2;
      if (closure_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = GameConsoleStore;
  callback2(GameConsoleStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(lastSelectedDeviceByPlatform) {
      const self = this;
      if (null != lastSelectedDeviceByPlatform) {
        let closure_11 = lastSelectedDeviceByPlatform.lastSelectedDeviceByPlatform;
      }
      self.waitFor(closure_5, closure_6);
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "getUserAgnosticState",
    value() {
      return { lastSelectedDeviceByPlatform: closure_11 };
    }
  };
  items[1] = obj;
  obj = {
    key: "getDevicesForPlatform",
    value(arg0) {
      let tmp = closure_10[arg0];
      if (null == tmp) {
        tmp = closure_13;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLastSelectedDeviceByPlatform",
    value(arg0) {
      return closure_11[arg0];
    }
  };
  items[4] = {
    key: "getDevice",
    value(arg0, arg1) {
      let tmp2;
      if (null != closure_10[arg0]) {
        tmp2 = tmp[arg1];
      }
      return tmp2;
    }
  };
  items[5] = {
    key: "getFetchingDevices",
    value(arg0) {
      return set.has(arg0);
    }
  };
  items[6] = {
    key: "getPendingDeviceCommands",
    value() {
      return closure_9;
    }
  };
  items[7] = {
    key: "getRemoteSessionId",
    value() {
      return closure_7;
    }
  };
  items[8] = {
    key: "getAwaitingRemoteSessionInfo",
    value() {
      return closure_8;
    }
  };
  return callback(GameConsoleStore, items);
}(importDefault(dependencyMap[7]).DeviceSettingsStore);
tmp4.displayName = "GameConsoleStore";
tmp4.persistKey = "GameConsoleStore";
tmp4 = new tmp4(importDefault(dependencyMap[8]), {
  REMOTE_SESSION_CONNECT: function handleRemoteSessionConnect(sessionId) {
    sessionId = sessionId.sessionId;
    let closure_8 = null;
  },
  REMOTE_SESSION_DISCONNECT: function handleRemoteSessionDisconnect() {
    let closure_7 = null;
    let closure_8 = null;
  },
  WAIT_FOR_REMOTE_SESSION: function handleWaitForRemoteSession(sessionType) {
    let commandId;
    let deviceId;
    ({ deviceId, commandId } = sessionType);
    let closure_8 = { type: sessionType.sessionType, nonce: sessionType.nonce, channelId: sessionType.channelId, startedAt: Date.now(), deviceId, commandId };
  },
  GAME_CONSOLE_FETCH_DEVICES_START: function handleFetchDevicesStart(platform) {
    set1.add(platform.platform);
  },
  GAME_CONSOLE_FETCH_DEVICES_SUCCESS: function handleFetchDevicesSuccess(platform) {
    let iter2;
    platform = platform.platform;
    set1.delete(platform);
    let obj = {};
    closure_10[platform] = obj;
    obj = {};
    const tmp2 = _createForOfIteratorHelperLoose(platform.devices);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let value = iter.value;
        obj[value.id] = value;
        let tmp3 = closure_11;
        if (closure_11[platform] === value.id) {
          obj[platform] = value.id;
        }
        iter2 = tmp2();
        iter = iter2;
      } while (!iter2.done);
    }
    let closure_11 = obj;
  },
  GAME_CONSOLE_FETCH_DEVICES_FAIL: function handleFetchDevicesFail(platform) {
    set1.delete(platform.platform);
  },
  GAME_CONSOLE_SELECT_DEVICE: function handleSelectDevice(platform) {
    closure_11[platform.platform] = platform.deviceId;
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/game_console/GameConsoleStore.tsx");

export default tmp4;
