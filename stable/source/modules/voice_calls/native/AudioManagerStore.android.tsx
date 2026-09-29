// Module ID: 9940
// Function ID: 9941
// Name: AudioManagerStore
// Dependencies: [17, 1074, 4813, 9941, 12, 1231, 504, 573, 2]

// Module 9940 (AudioManagerStore)
import _modDef12 from "module_12" /* 12 */;
import _mod17 from "module_17" /* 17 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import Constants2 from "Constants" /* 4813 */;
import NativeAudioManagerModuleDefault from "NativeAudioManagerModule" /* 9941 */;
import size from "module_2" /* 2 */;

const NativeAudioManagerModule_mod = NativeAudioManagerModuleDefault;

const RTCConnectionStates = Constants.RTCConnectionStates;
const MediaEngineContextTypes = Constants2.MediaEngineContextTypes;
const nativeEventEmitter = new _mod17.NativeEventEmitter(NativeAudioManagerModuleDefault);
let global = [];
let NativeAudioManagerModule = NativeAudioManagerModule_mod;
global = NativeAudioManagerModule.getInvalidAndroidDevice();
let NativeAudioManagerModule = NativeAudioManagerModule_mod;
let device = NativeAudioManagerModule.getInvalidAndroidDevice();
let c9 = false;
const Store = initializeDefault.Store;
class AudioManagerStore extends Store {
}
const prototype = AudioManagerStore.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  const audioDevices = NativeAudioManagerModuleDefault.getAudioDevices();
  audioDevices.then((result) => {
    global = result;
    self.emitChange();
    nativeEventEmitter.addListener("android-audio-devices-updated", (devices) => {
      devices = devices.devices;
      self.emitChange();
    });
  });
  const activeAudioDevice = NativeAudioManagerModuleDefault.getActiveAudioDevice();
  activeAudioDevice.then((result) => {
    global = result;
    self.emitChange();
    nativeEventEmitter.addListener("android-active-audio-device-changed", (device) => {
      device = device.device;
      self.emitChange();
    });
  });
  NativeAudioManagerModuleDefault.setSCORetryCount(4);
};
prototype["getAudioDevices"] = function getAudioDevices() {
  return global;
};
prototype["getActiveAudioDevice"] = function getActiveAudioDevice() {
  return global;
};
prototype["getRequestedActiveAudioDevice"] = function getRequestedActiveAudioDevice() {
  return device;
};
AudioManagerStore.displayName = "AudioManagerStore";
const audioManagerStore = new AudioManagerStore(DispatcherDefault, {
  RTC_CONNECTION_STATE: function handleRTCConnectionStateUpdate(context) {
    if (context.context !== MediaEngineContextTypes.DEFAULT) {
      return false;
    } else {
      const state = context.state;
      if (RTCConnectionStates.CONNECTING === state) {
        c9 = true;
        const result = NativeAudioManagerModuleDefault.setCommunicationModeOn(true);
        let tmp8 = global !== device;
        if (tmp8) {
          tmp8 = device.simpleDeviceType !== NativeAudioManagerModule.AudioDeviceType.INVALID;
        }
        if (tmp8) {
          if (tmp4Result.isString(device)) {
            const obj3 = { extra: null };
            const obj4 = { deviceString: tmp10 };
            obj3.extra = obj4;
            tmp4(1231).captureMessage("AudioManagerStore received a string for an android audio device", obj3);
            const tmp4Result3 = tmp4(1231);
          } else {
            tmp4(9941).setActiveAudioDevice(tmp10);
            const tmp4Result4 = tmp4(9941);
          }
          tmp4Result = tmp4(12);
        }
      } else if (tmp13.DISCONNECTED === state) {
        if (!context.willReconnect) {
          c9 = false;
          const result1 = NativeAudioManagerModuleDefault.setCommunicationModeOn(false);
        }
      }
    }
  },
  NATIVE_AUDIO_SET_OUTPUT_DEVICE: function handleSetActiveAudioDevice(device) {
    device = device.device;
    if (c9) {
      if (obj.isString(device)) {
        const obj2 = { extra: null };
        const obj3 = { deviceString: device };
        obj2.extra = obj3;
        tmp(1231).captureMessage("AudioManagerStore received a string for an android audio device", obj2);
        const tmpResult = tmp(1231);
      } else {
        tmp(9941).setActiveAudioDevice(device);
        const tmpResult2 = tmp(9941);
      }
      obj = _modDef12;
    }
  }
});
let result = size.fileFinishedImporting("modules/voice_calls/native/AudioManagerStore.android.tsx");

export default audioManagerStore;
