// Module ID: 10928
// Function ID: 84895
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 4150, 10929, 4811, 8355, 653, 664, 4814, 10930, 10931, 2]
// Exports: ensureSpotifyPlayable, ensureSpotifyPremium, getSpotifyMetadataFromActivity, isSpotifyPlayable, isSpotifyPremium

// Module 10928 (_createForOfIteratorHelperLoose)
import ME from "ME";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import spotifyUtmParams from "spotifyUtmParams";
import { PlatformTypes } from "ME";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
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
function asString(arg0) {
  if ("string" === typeof arg0) {
    return arg0;
  } else {
    const _Error = Error;
    const error = new Error("value is not a string");
    throw error;
  }
}
function _getSpotifyMetadataFromActivity() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ SPOTIFY_APP_PROTOCOL: closure_7, SpotifyResourceTypes: closure_8, getSpotifyResourceType: closure_9 } = spotifyUtmParams);
let closure_11 = 30 * require("set").Millis.SECOND;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/spotify/SpotifyUtils.tsx");

export const isSpotifyPlayable = function isSpotifyPlayable(getActiveSocketAndDevice) {
  let isProtocolRegisteredResult = null != getActiveSocketAndDevice.getActiveSocketAndDevice();
  if (!isProtocolRegisteredResult) {
    isProtocolRegisteredResult = closure_5.isProtocolRegistered();
  }
  return isProtocolRegisteredResult;
};
export const ensureSpotifyPlayable = function ensureSpotifyPlayable() {
  let device;
  let socket;
  const activeSocketAndDevice = store.getActiveSocketAndDevice();
  if (null != activeSocketAndDevice) {
    return Promise.resolve(activeSocketAndDevice);
  } else if (closure_5.isProtocolRegistered()) {
    const playableComputerDevices = store.getPlayableComputerDevices();
    let obj = importDefault(4814);
    if (observedAppRunning.isObservedAppRunning(obj.get(PlatformTypes.SPOTIFY).name)) {
      if (playableComputerDevices.length > 0) {
        ({ socket, device } = playableComputerDevices[0]);
        playableComputerDevices(10930).setActiveDevice(socket.accountId, device.id);
        obj = { socket, device };
        return Promise.resolve(obj);
      }
    }
    const promise = new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      function onSpotifyStoreChange() {
        let done;
        function _loop(socket, device) {
          let closure_0 = socket;
          let closure_1 = device;
          if (null == closure_0.find((device) => device.device.id === device.id)) {
            const _clearTimeout = clearTimeout;
            clearTimeout(outer1_2);
            outer3_6.removeChangeListener(outer1_3);
            const _setImmediate = setImmediate;
            setImmediate(() => {
              let obj = playableComputerDevices(outer4_2[8]);
              obj.setActiveDevice(socket.accountId, device.id);
              obj = { socket, device };
              outer2_0(obj);
            });
          }
        }
        const tmp = outer2_12(outer2_6.getPlayableComputerDevices());
        let iter = tmp();
        if (!iter.done) {
          do {
            let value = iter.value;
            let _loopResult = _loop(value.socket, value.device);
            let iter2 = tmp();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
      }
      const timeout = setTimeout(() => {
        outer2_6.removeChangeListener(onSpotifyStoreChange);
        const error = new Error("timeout launching spotify");
        callback(error);
      }, outer1_11);
      outer1_6.addChangeListener(onSpotifyStoreChange);
      window.open("" + outer1_7 + ":");
    });
    return promise;
  } else {
    const _Error = Error;
    let error = new Error("protocol is not registered");
    return Promise.reject(error);
  }
};
export const isSpotifyPremium = function isSpotifyPremium() {
  const activeSocketAndDevice = store.getActiveSocketAndDevice();
  let isPremium = null;
  if (null != activeSocketAndDevice) {
    isPremium = activeSocketAndDevice.socket.isPremium;
  }
  return isPremium;
};
export const ensureSpotifyPremium = function ensureSpotifyPremium() {
  const activeSocketAndDevice = store.getActiveSocketAndDevice();
  if (null == activeSocketAndDevice) {
    let _Error = Error;
    let error = new Error("no active profile");
    return Promise.reject(error);
  } else {
    const socket = activeSocketAndDevice.socket;
    if (socket.isPremium) {
      let resolved = Promise.resolve();
    } else {
      const profile = socket(10930).getProfile(socket.accountId, socket.accessToken);
      resolved = profile.then(() => {
        if (!socket.isPremium) {
          const _Error = Error;
          const error = new Error("spotify account is not premium");
          return Promise.reject(error);
        }
      });
      const obj = socket(10930);
    }
    return resolved;
  }
};
export const getSpotifyMetadataFromActivity = function getSpotifyMetadataFromActivity(closure_0, closure_1) {
  return _getSpotifyMetadataFromActivity(...arguments);
};
