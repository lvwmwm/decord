// Module ID: 8829
// Function ID: 69637
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8829 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleAudioRouteChanged(arr) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_11;
  }
  if (null != arr) {
    if ("" !== arr) {
      if (arr.includes("Bluetooth")) {
        let UNKNOWN = arg1(dependencyMap[7]).RouteTypes.BLUETOOTH;
      } else if (arr.includes("Speaker")) {
        UNKNOWN = arg1(dependencyMap[7]).RouteTypes.SPEAKER;
      } else {
        const hasItem = arr.includes("Receiver");
        const RouteTypes = arg1(dependencyMap[7]).RouteTypes;
        UNKNOWN = hasItem ? RouteTypes.RECEIVER : RouteTypes.UNKNOWN;
      }
    }
    closure_11 = tmp;
  }
  UNKNOWN = arg1(dependencyMap[7]).RouteTypes.UNKNOWN;
}
function resetState() {
  const UNKNOWN = arg1(dependencyMap[7]).RouteTypes.UNKNOWN;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[5]);
const NativeModules = tmp2.NativeModules;
let closure_9 = importDefault(dependencyMap[6]);
const UNKNOWN = arg1(dependencyMap[7]).RouteTypes.UNKNOWN;
let closure_11 = false;
let closure_12 = null;
const nativeEventEmitter = new tmp2.NativeEventEmitter(NativeModules.AudioRouteEmitter);
let tmp4 = (Store) => {
  class AudioRouteStoreClass {
    constructor() {
      self = this;
      tmp = closure_3(this, AudioRouteStoreClass);
      obj = closure_6(AudioRouteStoreClass);
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
  const arg1 = AudioRouteStoreClass;
  callback2(AudioRouteStoreClass, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getCurrentRouteType",
    value() {
      return closure_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMultipleRoutesAvailable",
    value() {
      return closure_11;
    }
  };
  items[2] = obj;
  return callback(AudioRouteStoreClass, items);
}(importDefault(dependencyMap[10]).Store);
tmp4.displayName = "AudioRouteStore";
tmp4 = new tmp4(importDefault(dependencyMap[11]), {
  RTC_CONNECTION_STATE: function handleConnectionStatusChanged() {
    const isConnectedResult = connected.isConnected();
    let tmp2 = null;
    if (null === _null) {
      if (isConnectedResult) {
        resetState();
        let addListenerResult;
        if (tmp2 != nativeEventEmitter) {
          addListenerResult = nativeEventEmitter.addListener("audio-route-changed", (routeType) => {
            callback(routeType.routeType, routeType.multipleRoutesAvailable);
            closure_14.emitChange();
          });
        }
        let _null = addListenerResult;
        if (obj.isAndroid()) {
          tmp2 = tmp2 == importDefault(dependencyMap[9]);
          let currentRoute;
          if (!tmp2) {
            tmp2 = importDefault(dependencyMap[9]);
            currentRoute = tmp2.getCurrentRoute();
          }
          let currentRoute1 = currentRoute;
        } else {
          const AudioRouteEmitter = NativeModules.AudioRouteEmitter;
          currentRoute1 = AudioRouteEmitter.getCurrentRoute();
        }
        const obj = arg1(dependencyMap[8]);
        const nextPromise = currentRoute1.then((routeType) => {
          callback(routeType.routeType, routeType.multipleRoutesAvailable);
        });
        currentRoute1.then((routeType) => {
          callback(routeType.routeType, routeType.multipleRoutesAvailable);
        }).then(() => {
          let emitChangeResult;
          if (null != closure_14) {
            emitChangeResult = closure_14.emitChange();
          }
          return emitChangeResult;
        }).catch(() => {

        });
        const nextPromise1 = currentRoute1.then((routeType) => {
          callback(routeType.routeType, routeType.multipleRoutesAvailable);
        }).then(() => {
          let emitChangeResult;
          if (null != closure_14) {
            emitChangeResult = closure_14.emitChange();
          }
          return emitChangeResult;
        });
      }
    }
    if (tmp2 != _null) {
      if (!isConnectedResult) {
        const AudioRoutePicker = NativeModules.AudioRoutePicker;
        if (tmp2 != AudioRoutePicker) {
          AudioRoutePicker.resetPortOverride();
        }
        resetState();
        _null.remove();
        _null = tmp2;
      }
    }
    return false;
  }
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/voice_calls/AudioRouteStore.native.tsx");

export default tmp4;
