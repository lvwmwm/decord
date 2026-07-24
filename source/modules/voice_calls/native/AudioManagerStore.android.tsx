// Module ID: 8879
// Function ID: 69923
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 27, 653, 4191, 8880, 22, 1184, 566, 686, 2]

// Module 8879 (_isNativeReflectConstruct)
import ME from "ME";
import DesktopSources from "DesktopSources";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { RTCConnectionStates } from "ME";
import { MediaEngineContextTypes } from "DesktopSources";
import enforcing from "enforcing";
import enforcing from "enforcing";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function setActiveAudioDevice(device) {
  let obj = importDefault(22);
  if (obj.isString(device)) {
    let tmpResult = tmp(1184);
    obj = {};
    obj = { deviceString: device };
    obj.extra = obj;
    tmpResult.captureMessage("AudioManagerStore received a string for an android audio device", obj);
  } else {
    tmpResult = tmp(8880);
    tmpResult.setActiveAudioDevice(device);
  }
}
const nativeEventEmitter = new require("get ActivityIndicator").NativeEventEmitter(require("enforcing"));
let closure_11 = [];
enforcing = enforcing.getInvalidAndroidDevice();
enforcing = enforcing.getInvalidAndroidDevice();
let c14 = false;
let tmp3 = ((Store) => {
  class AudioManagerStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, AudioManagerStore);
      obj = outer1_6(AudioManagerStore);
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
  callback2(AudioManagerStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const self = this;
      const audioDevices = outer1_1(outer1_2[8]).getAudioDevices();
      audioDevices.then((arg0) => {
        const outer2_11 = arg0;
        self.emitChange();
        outer2_10.addListener("android-audio-devices-updated", (devices) => {
          const outer3_11 = devices.devices;
          outer1_0.emitChange();
        });
      });
      const obj = outer1_1(outer1_2[8]);
      const activeAudioDevice = outer1_1(outer1_2[8]).getActiveAudioDevice();
      activeAudioDevice.then((arg0) => {
        const outer2_12 = arg0;
        self.emitChange();
        outer2_10.addListener("android-active-audio-device-changed", (device) => {
          const outer3_12 = device.device;
          outer1_0.emitChange();
        });
      });
      const obj2 = outer1_1(outer1_2[8]);
      outer1_1(outer1_2[8]).setSCORetryCount(4);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getAudioDevices",
    value() {
      return outer1_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "getActiveAudioDevice",
    value() {
      return outer1_12;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getRequestedActiveAudioDevice",
    value() {
      return outer1_13;
    }
  };
  return callback(AudioManagerStore, items);
})(require("initialize").Store);
tmp3.displayName = "AudioManagerStore";
enforcing = {
  RTC_CONNECTION_STATE: function handleRTCConnectionStateUpdate(context) {
    if (context.context !== MediaEngineContextTypes.DEFAULT) {
      return false;
    } else {
      const state = context.state;
      if (RTCConnectionStates.CONNECTING === state) {
        let c14 = true;
        const result = importDefault(8880).setCommunicationModeOn(true);
        let tmp10 = enforcing !== enforcing;
        if (tmp10) {
          tmp10 = enforcing.simpleDeviceType !== require(8880) /* enforcing */.AudioDeviceType.INVALID;
        }
        if (tmp10) {
          setActiveAudioDevice(enforcing);
        }
        const obj2 = importDefault(8880);
      } else if (RTCConnectionStates.DISCONNECTED === state) {
        if (!context.willReconnect) {
          c14 = false;
          const result1 = importDefault(8880).setCommunicationModeOn(false);
          const obj = importDefault(8880);
        }
      }
    }
  },
  NATIVE_AUDIO_SET_OUTPUT_DEVICE: function handleSetActiveAudioDevice(device) {
    device = device.device;
    if (c14) {
      setActiveAudioDevice(device);
    }
  }
};
tmp3 = new tmp3(require("dispatcher"), enforcing);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/voice_calls/native/AudioManagerStore.android.tsx");

export default tmp3;
