// Module ID: 9308
// Function ID: 9309
// Name: AudioManagerStore
// Dependencies: [5, 17, 5045, 1072, 5899, 9309, 3, 12, 1242, 504, 572, 2]

// Module 9308 (AudioManagerStore)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import Constants2 from "Constants" /* 5899 */;
import NativeAudioManagerModuleDefault from "NativeAudioManagerModule" /* 9309 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5045 */;
import size from "module_2" /* 2 */;

const NativeAudioManagerModule_mod = NativeAudioManagerModuleDefault;
let c5, c6, closure_10, closure_3, deviceString, devices;

function syncCommunicationMode() {
  const tmp = c12 && null == SelectedChannelStore.getVoiceChannelId();
  if (tmp) {
    c12 = false;
    setCommunicationModeOn(false);
  }
  return false;
}
function setCommunicationModeOn() {
  return obj(...arguments);
}
let obj = function _setCommunicationModeOn() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        let closure_1;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            closure_1 = tmp4;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: obj2.setCommunicationModeOn(closure_0), done: false };
            obj2 = NativeAudioManagerModuleDefault;
            return obj5;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            closure_1 = closure_3;
            let str = "off";
            const error = closure_130_8.error;
            if (closure_0) {
              str = "on";
            }
            error("Failed to turn communication mode " + str, closure_1);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c4 = 0;
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp17) {
        closure_3 = tmp17;
        if (0 === c4) {
          c6 = 3;
          throw tmp17;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function setActiveAudioDevice() {
  return obj(...arguments);
}
obj = function _setActiveAudioDevice() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let obj5;
    let tmp29Result2;
    deviceString = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        let closure_1;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            closure_1 = tmp4;
            const obj9 = _modDef12;
            if (obj9.isString(deviceString)) {
              const obj4 = { extra: obj5 };
              obj5 = { deviceString };
              const tmp29Result = SentryUtilsDefault;
              tmp29Result.captureMessage("AudioManagerStore received a string for an android audio device", obj4);
            } else {
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj6 = { value: tmp29Result2.setActiveAudioDevice(deviceString), done: false };
              tmp29Result2 = NativeAudioManagerModuleDefault;
              return obj6;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_1 = closure_3;
          const _HermesInternal2 = HermesInternal;
          closure_130_8.error("Failed to set audio device " + deviceString.deviceId + " (" + deviceString.simpleDeviceType + ")", closure_1);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          if (!value) {
            const _HermesInternal = HermesInternal;
            closure_130_8.warn("Audio device " + deviceString.deviceId + " (" + deviceString.simpleDeviceType + ") was not applied");
          }
          c4 = 0;
        }
        c6 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp21) {
        closure_3 = tmp21;
        if (0 === c4) {
          c6 = 3;
          throw tmp21;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const NativeEventEmitter = react_native.NativeEventEmitter;
const RTCConnectionStates = Constants.RTCConnectionStates;
const MediaEngineContextTypes = Constants2.MediaEngineContextTypes;
const nativeEventEmitter = new NativeEventEmitter(NativeAudioManagerModuleDefault);
const tmp3 = new LoggerDefault("AudioManagerStore");
let closure_8 = tmp3;
let closure_9 = [];
let NativeAudioManagerModule = NativeAudioManagerModule_mod;
const invalidAndroidDevice = NativeAudioManagerModule.getInvalidAndroidDevice();
NativeAudioManagerModule = NativeAudioManagerModule_mod;
let device = NativeAudioManagerModule.getInvalidAndroidDevice();
let c12 = false;
const Store = get_initializedDefault.Store;
class AudioManagerStore extends Store {
  initialize() {
    const self = this;
    const items = [SelectedChannelStore];
    this.syncWith(items, syncCommunicationMode);
    obj = NativeAudioManagerModuleDefault;
    const audioDevices = obj.getAudioDevices();
    audioDevices.then((result) => {
      closure_9 = result;
      self.emitChange();
      nativeEventEmitter.addListener("android-audio-devices-updated", (devices) => {
        devices = devices.devices;
        self.emitChange();
      });
    });
    const obj2 = NativeAudioManagerModuleDefault;
    const activeAudioDevice = obj2.getActiveAudioDevice();
    activeAudioDevice.then((result) => {
      closure_10 = result;
      self.emitChange();
      nativeEventEmitter.addListener("android-active-audio-device-changed", (device) => {
        device = device.device;
        self.emitChange();
      });
    });
    const obj3 = NativeAudioManagerModuleDefault;
    obj3.setSCORetryCount(4);
  }
  getAudioDevices() {
    return closure_9;
  }
  getActiveAudioDevice() {
    return closure_10;
  }
  getRequestedActiveAudioDevice() {
    return device;
  }
}
const prototype = AudioManagerStore.prototype;
AudioManagerStore.displayName = "AudioManagerStore";
obj = {
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    const tmp = null == channelId.channelId || c12;
    if (!tmp) {
      c12 = true;
      setCommunicationModeOn(true);
    }
    return false;
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionStateUpdate(context) {
    if (context.context !== MediaEngineContextTypes.DEFAULT) {
      return false;
    } else {
      if (context.state === RTCConnectionStates.CONNECTING) {
        c12 = true;
        setCommunicationModeOn(true);
        const tmp5 = closure_10 !== device && device.simpleDeviceType !== NativeAudioManagerModule.AudioDeviceType.INVALID;
        if (tmp5) {
          setActiveAudioDevice(device);
        }
      }
      return false;
    }
  },
  NATIVE_AUDIO_SET_OUTPUT_DEVICE: function handleSetActiveAudioDevice(device) {
    device = device.device;
    const tmp = c12;
    if (tmp) {
      setActiveAudioDevice(device);
    }
  }
};
const audioManagerStore = new AudioManagerStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/voice_calls/native/AudioManagerStore.android.tsx");

export default audioManagerStore;
