// Module ID: 8832
// Function ID: 69655
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8832 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function setActiveAudioDevice(closure_13) {
  let obj = importDefault(dependencyMap[9]);
  if (obj.isString(closure_13)) {
    let tmpResult = tmp(tmp2[10]);
    obj = {};
    obj = { deviceString: closure_13 };
    obj.extra = obj;
    tmpResult.captureMessage("AudioManagerStore received a string for an android audio device", obj);
  } else {
    tmpResult = tmp(tmp2[8]);
    tmpResult.setActiveAudioDevice(closure_13);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const RTCConnectionStates = arg1(dependencyMap[6]).RTCConnectionStates;
const MediaEngineContextTypes = arg1(dependencyMap[7]).MediaEngineContextTypes;
const nativeEventEmitter = new arg1(dependencyMap[5]).NativeEventEmitter(importDefault(dependencyMap[8]));
let closure_11 = [];
let obj = arg1(dependencyMap[8]);
const invalidAndroidDevice = obj.getInvalidAndroidDevice();
const invalidAndroidDevice2 = arg1(dependencyMap[8]).getInvalidAndroidDevice();
let closure_14 = false;
let tmp3 = (Store) => {
  class AudioManagerStore {
    constructor() {
      self = this;
      tmp = closure_3(this, AudioManagerStore);
      obj = closure_6(AudioManagerStore);
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
  const arg1 = AudioManagerStore;
  callback2(AudioManagerStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const AudioManagerStore = this;
      const audioDevices = callback(closure_2[8]).getAudioDevices();
      audioDevices.then((arg0) => {
        self.emitChange();
        closure_10.addListener("android-audio-devices-updated", (devices) => {
          devices = devices.devices;
          closure_0.emitChange();
        });
      });
      const obj = callback(closure_2[8]);
      const activeAudioDevice = callback(closure_2[8]).getActiveAudioDevice();
      activeAudioDevice.then((arg0) => {
        self.emitChange();
        closure_10.addListener("android-active-audio-device-changed", (device) => {
          device = device.device;
          closure_0.emitChange();
        });
      });
      const obj2 = callback(closure_2[8]);
      callback(closure_2[8]).setSCORetryCount(4);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getAudioDevices",
    value() {
      return closure_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "getActiveAudioDevice",
    value() {
      return closure_12;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getRequestedActiveAudioDevice",
    value() {
      return closure_13;
    }
  };
  return callback(AudioManagerStore, items);
}(importDefault(dependencyMap[11]).Store);
tmp3.displayName = "AudioManagerStore";
obj = {
  RTC_CONNECTION_STATE: function handleRTCConnectionStateUpdate(context) {
    if (context.context !== MediaEngineContextTypes.DEFAULT) {
      return false;
    } else {
      const state = context.state;
      if (RTCConnectionStates.CONNECTING === state) {
        let closure_14 = true;
        const result = importDefault(dependencyMap[8]).setCommunicationModeOn(true);
        let tmp10 = closure_12 !== simpleDeviceType;
        if (tmp10) {
          tmp10 = simpleDeviceType.simpleDeviceType !== arg1(dependencyMap[8]).AudioDeviceType.INVALID;
        }
        if (tmp10) {
          setActiveAudioDevice(simpleDeviceType);
        }
        const obj2 = importDefault(dependencyMap[8]);
      } else if (RTCConnectionStates.DISCONNECTED === state) {
        if (!context.willReconnect) {
          closure_14 = false;
          const result1 = importDefault(dependencyMap[8]).setCommunicationModeOn(false);
          const obj = importDefault(dependencyMap[8]);
        }
      }
    }
  },
  NATIVE_AUDIO_SET_OUTPUT_DEVICE: function handleSetActiveAudioDevice(device) {
    device = device.device;
    let closure_13 = device;
    if (closure_14) {
      setActiveAudioDevice(device);
    }
  }
};
tmp3 = new tmp3(importDefault(dependencyMap[12]), obj);
const obj2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/voice_calls/native/AudioManagerStore.android.tsx");

export default tmp3;
