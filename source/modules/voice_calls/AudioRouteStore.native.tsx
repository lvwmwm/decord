// Module ID: 8876
// Function ID: 69905
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 27, 4202, 8877, 477, 8878, 566, 686, 2]

// Module 8876 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import RouteTypes from "RouteTypes";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_9 from "_isNativeReflectConstruct";

const require = arg1;
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
    tmp = c11;
  }
  if (null != arr) {
    if ("" !== arr) {
      if (arr.includes("Bluetooth")) {
        let UNKNOWN = require(8877) /* RouteTypes */.RouteTypes.BLUETOOTH;
      } else if (arr.includes("Speaker")) {
        UNKNOWN = require(8877) /* RouteTypes */.RouteTypes.SPEAKER;
      } else {
        const hasItem = arr.includes("Receiver");
        const RouteTypes = require(8877) /* RouteTypes */.RouteTypes;
        UNKNOWN = hasItem ? RouteTypes.RECEIVER : RouteTypes.UNKNOWN;
      }
    }
    c11 = tmp;
  }
  UNKNOWN = require(8877) /* RouteTypes */.RouteTypes.UNKNOWN;
}
function resetState() {
  const UNKNOWN = require(8877) /* RouteTypes */.RouteTypes.UNKNOWN;
}
const NativeModules = get_ActivityIndicator.NativeModules;
let UNKNOWN = require("RouteTypes").RouteTypes.UNKNOWN;
let c11 = false;
let c12 = null;
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(NativeModules.AudioRouteEmitter);
let tmp4 = ((Store) => {
  class AudioRouteStoreClass {
    constructor() {
      self = this;
      tmp = outer1_3(this, AudioRouteStoreClass);
      obj = outer1_6(AudioRouteStoreClass);
      tmp2 = outer1_5;
      if (outer1_15()) {
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
  callback2(AudioRouteStoreClass, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getCurrentRouteType",
    value() {
      return outer1_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMultipleRoutesAvailable",
    value() {
      return outer1_11;
    }
  };
  items[2] = obj;
  return callback(AudioRouteStoreClass, items);
})(require("initialize").Store);
tmp4.displayName = "AudioRouteStore";
tmp4 = new tmp4(require("dispatcher"), {
  RTC_CONNECTION_STATE: function handleConnectionStatusChanged() {
    const isConnectedResult = connected.isConnected();
    let tmp2 = null;
    if (null === _null) {
      if (isConnectedResult) {
        resetState();
        let addListenerResult;
        if (tmp2 != nativeEventEmitter) {
          addListenerResult = nativeEventEmitter.addListener("audio-route-changed", (routeType) => {
            outer1_16(routeType.routeType, routeType.multipleRoutesAvailable);
            outer1_14.emitChange();
          });
        }
        _null = addListenerResult;
        if (obj.isAndroid()) {
          tmp2 = tmp2 == importDefault(8878);
          let currentRoute;
          if (!tmp2) {
            tmp2 = importDefault(8878);
            currentRoute = tmp2.getCurrentRoute();
          }
          let currentRoute1 = currentRoute;
        } else {
          const AudioRouteEmitter = NativeModules.AudioRouteEmitter;
          currentRoute1 = AudioRouteEmitter.getCurrentRoute();
        }
        obj = require(477) /* set */;
        const nextPromise = currentRoute1.then((routeType) => {
          outer1_16(routeType.routeType, routeType.multipleRoutesAvailable);
        });
        currentRoute1.then((routeType) => {
          outer1_16(routeType.routeType, routeType.multipleRoutesAvailable);
        }).then(() => {
          let emitChangeResult;
          if (null != outer1_14) {
            emitChangeResult = outer1_14.emitChange();
          }
          return emitChangeResult;
        }).catch(() => {

        });
        const nextPromise1 = currentRoute1.then((routeType) => {
          outer1_16(routeType.routeType, routeType.multipleRoutesAvailable);
        }).then(() => {
          let emitChangeResult;
          if (null != outer1_14) {
            emitChangeResult = outer1_14.emitChange();
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
let closure_14 = tmp4;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/voice_calls/AudioRouteStore.native.tsx");

export default tmp4;
