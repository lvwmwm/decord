// Module ID: 5784
// Function ID: 5785
// Name: AudioRouteStore
// Dependencies: [17, 5764, 5785, 5786, 504, 572, 2]

// Module 5784 (AudioRouteStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import VoiceCallTypes from "VoiceCallTypes" /* 5785 */;
import react_nativeDefault from "react-native" /* 5786 */;
import react_native from "react-native" /* 17 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5764 */;
import size from "module_2" /* 2 */;

let AudioRoutePicker, _null;

let NativeEventEmitter;
let c3;
function handleAudioRouteChanged(arr) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_6;
  }
  if (null != arr) {
    if ("" !== arr) {
      if (arr.includes("Bluetooth")) {
        UNKNOWN = VoiceCallTypes.RouteTypes.BLUETOOTH;
      } else if (arr.includes("Speaker")) {
        UNKNOWN = VoiceCallTypes.RouteTypes.SPEAKER;
      } else if (arr.includes("Receiver")) {
        UNKNOWN = VoiceCallTypes.RouteTypes.RECEIVER;
      } else {
        const hasItem = arr.includes("Headphones");
        const RouteTypes = VoiceCallTypes.RouteTypes;
        UNKNOWN = hasItem ? RouteTypes.WIRED : RouteTypes.UNKNOWN;
      }
    }
    closure_6 = tmp;
  }
  UNKNOWN = VoiceCallTypes.RouteTypes.UNKNOWN;
}
({ NativeModules: c3, NativeEventEmitter } = react_native);
let UNKNOWN = VoiceCallTypes.RouteTypes.UNKNOWN;
let closure_6 = false;
let c7 = null;
const nativeEventEmitter = new NativeEventEmitter(react_nativeDefault);
const Store = get_initializedDefault.Store;
class AudioRouteStoreClass extends Store {
  initialize() {
    this.waitFor(RTCConnectionStore);
  }
  getCurrentRouteType() {
    return UNKNOWN;
  }
  getMultipleRoutesAvailable() {
    return closure_6;
  }
}
const prototype = AudioRouteStoreClass.prototype;
AudioRouteStoreClass.displayName = "AudioRouteStore";
let obj = {
  RTC_CONNECTION_STATE: function handleConnectionStatusChanged() {
    const isConnectedResult = RTCConnectionStore.isConnected();
    const tmp2 = _null;
    if (null === _null) {
      if (isConnectedResult) {
        UNKNOWN = VoiceCallTypes.RouteTypes.UNKNOWN;
        let obj = nativeEventEmitter;
        let addListenerResult;
        if (nativeEventEmitter != null) {
          addListenerResult = obj.addListener("audio-route-changed", (routeType) => {
            handleAudioRouteChanged(routeType.routeType, routeType.multipleRoutesAvailable);
            audioRouteStoreClass.emitChange();
          });
        }
        _null = addListenerResult;
        const obj2 = react_nativeDefault;
        const currentRoute = obj2.getCurrentRoute();
        const nextPromise = currentRoute.then((routeType) => {
          handleAudioRouteChanged(routeType.routeType, routeType.multipleRoutesAvailable);
        });
        const nextPromise1 = nextPromise.then(() => {
          let emitChangeResult;
          const obj = audioRouteStoreClass;
          if (audioRouteStoreClass != null) {
            emitChangeResult = obj.emitChange();
          }
          return emitChangeResult;
        });
        nextPromise1.catch(() => {

        });
      }
      return false;
    }
    const tmp3 = null == tmp2 || isConnectedResult;
    if (!tmp3) {
      AudioRoutePicker = AudioRoutePicker.AudioRoutePicker;
      if (AudioRoutePicker != null) {
        AudioRoutePicker.resetPortOverride();
      }
      UNKNOWN = VoiceCallTypes.RouteTypes.UNKNOWN;
      _null.remove();
      _null = null;
    }
  }
};
const audioRouteStoreClass = new AudioRouteStoreClass(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/voice_calls/AudioRouteStore.native.tsx");

export default audioRouteStoreClass;
