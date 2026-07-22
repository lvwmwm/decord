// Module ID: 10891
// Function ID: 84657
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: ensureSpotifyPlayable, ensureSpotifyPremium, getSpotifyMetadataFromActivity, isSpotifyPlayable, isSpotifyPremium

// Module 10891 (_createForOfIteratorHelperLoose)
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
  const _getSpotifyMetadataFromActivity = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ SPOTIFY_APP_PROTOCOL: closure_7, SpotifyResourceTypes: closure_8, getSpotifyResourceType: closure_9 } = arg1(dependencyMap[4]));
const PlatformTypes = arg1(dependencyMap[5]).PlatformTypes;
let closure_11 = 30 * importDefault(dependencyMap[6]).Millis.SECOND;
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/spotify/SpotifyUtils.tsx");

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
    const arg1 = playableComputerDevices;
    let obj = importDefault(dependencyMap[7]);
    if (observedAppRunning.isObservedAppRunning(obj.get(PlatformTypes.SPOTIFY).name)) {
      if (playableComputerDevices.length > 0) {
        ({ socket, device } = playableComputerDevices[0]);
        arg1(dependencyMap[8]).setActiveDevice(socket.accountId, device.id);
        obj = { socket, device };
        return Promise.resolve(obj);
      }
    }
    const promise = new Promise((arg0, arg1) => {
      const playableComputerDevices = arg0;
      function onSpotifyStoreChange() {
        let done;
        function _loop(socket, device) {
          if (null == socket.find((device) => device.device.id === arg1.id)) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_2);
            closure_6.removeChangeListener(closure_3);
            const _setImmediate = setImmediate;
            setImmediate(() => {
              let obj = arg0(closure_2[8]);
              obj.setActiveDevice(arg0.accountId, arg1.id);
              obj = { socket: arg0, device: arg1 };
              arg0(obj);
            });
          }
        }
        const tmp = callback(closure_6.getPlayableComputerDevices());
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
        closure_6.removeChangeListener(onSpotifyStoreChange);
        const error = new Error("timeout launching spotify");
        arg1(error);
      }, closure_11);
      closure_6.addChangeListener(onSpotifyStoreChange);
      window.open("" + closure_7 + ":");
    });
    return promise;
  } else {
    const _Error = Error;
    const error = new Error("protocol is not registered");
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
    const _Error = Error;
    const error = new Error("no active profile");
    return Promise.reject(error);
  } else {
    const socket = activeSocketAndDevice.socket;
    const arg1 = socket;
    if (socket.isPremium) {
      let resolved = Promise.resolve();
    } else {
      const profile = arg1(dependencyMap[8]).getProfile(socket.accountId, socket.accessToken);
      resolved = profile.then(() => {
        if (!socket.isPremium) {
          const _Error = Error;
          const error = new Error("spotify account is not premium");
          return Promise.reject(error);
        }
      });
      const obj = arg1(dependencyMap[8]);
    }
    return resolved;
  }
};
export const getSpotifyMetadataFromActivity = function getSpotifyMetadataFromActivity(arg0, arg1) {
  return _getSpotifyMetadataFromActivity(...arguments);
};
