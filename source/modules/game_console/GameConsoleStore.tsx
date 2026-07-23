// Module ID: 4144
// Function ID: 34833
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4145, 4146, 566, 686, 2]

// Module 4144 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let _isNativeReflectConstruct = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _isNativeReflectConstruct;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let _isNativeReflectConstruct = iterable;
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
      _isNativeReflectConstruct = tmp;
    }
    let c1 = 0;
    return () => {
      if (initialize >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        initialize = tmp3 + 1;
        obj.value = length[+initialize];
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
let c7 = null;
let c8 = null;
let set = new Set();
let closure_10 = {};
let closure_11 = {};
const set1 = new Set();
let closure_13 = Object.freeze({});
let tmp4 = ((DeviceSettingsStore) => {
  class GameConsoleStore {
    constructor() {
      self = this;
      tmp = GameConsoleStore(this, GameConsoleStore);
      obj = outer1_3(GameConsoleStore);
      tmp2 = outer1_2;
      if (outer1_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GameConsoleStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(lastSelectedDeviceByPlatform) {
      const self = this;
      if (null != lastSelectedDeviceByPlatform) {
        const outer1_11 = lastSelectedDeviceByPlatform.lastSelectedDeviceByPlatform;
      }
      self.waitFor(outer1_5, outer1_6);
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "getUserAgnosticState",
    value() {
      return { lastSelectedDeviceByPlatform: outer1_11 };
    }
  };
  items[1] = obj;
  obj = {
    key: "getDevicesForPlatform",
    value(arg0) {
      let tmp = outer1_10[arg0];
      if (null == tmp) {
        tmp = outer1_13;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLastSelectedDeviceByPlatform",
    value(arg0) {
      return outer1_11[arg0];
    }
  };
  items[4] = {
    key: "getDevice",
    value(arg0, arg1) {
      let tmp2;
      if (null != outer1_10[arg0]) {
        tmp2 = tmp[arg1];
      }
      return tmp2;
    }
  };
  items[5] = {
    key: "getFetchingDevices",
    value(arg0) {
      return outer1_12.has(arg0);
    }
  };
  items[6] = {
    key: "getPendingDeviceCommands",
    value() {
      return outer1_9;
    }
  };
  items[7] = {
    key: "getRemoteSessionId",
    value() {
      return outer1_7;
    }
  };
  items[8] = {
    key: "getAwaitingRemoteSessionInfo",
    value() {
      return outer1_8;
    }
  };
  return callback(GameConsoleStore, items);
})(require("initialize").DeviceSettingsStore);
tmp4.displayName = "GameConsoleStore";
tmp4.persistKey = "GameConsoleStore";
tmp4 = new tmp4(require("dispatcher"), {
  REMOTE_SESSION_CONNECT: function handleRemoteSessionConnect(sessionId) {
    sessionId = sessionId.sessionId;
    let c8 = null;
  },
  REMOTE_SESSION_DISCONNECT: function handleRemoteSessionDisconnect() {
    let c7 = null;
    let c8 = null;
  },
  WAIT_FOR_REMOTE_SESSION: function handleWaitForRemoteSession(sessionType) {
    let commandId;
    let deviceId;
    const obj = { type: sessionType.sessionType, nonce: sessionType.nonce, channelId: sessionType.channelId, startedAt: Date.now(), deviceId, commandId };
    ({ deviceId, commandId } = sessionType);
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
        let tmp3 = obj;
        if (obj[platform] === value.id) {
          obj[platform] = value.id;
        }
        iter2 = tmp2();
        iter = iter2;
      } while (!iter2.done);
    }
  },
  GAME_CONSOLE_FETCH_DEVICES_FAIL: function handleFetchDevicesFail(platform) {
    set1.delete(platform.platform);
  },
  GAME_CONSOLE_SELECT_DEVICE: function handleSelectDevice(platform) {
    closure_11[platform.platform] = platform.deviceId;
  }
});
let result = set.fileFinishedImporting("modules/game_console/GameConsoleStore.tsx");

export default tmp4;
