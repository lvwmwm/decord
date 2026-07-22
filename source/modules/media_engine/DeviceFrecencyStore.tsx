// Module ID: 4201
// Function ID: 36421
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4201 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleSetDevice(AUDIO_INPUT, oldId) {
  if (tmp12.isSampling(AUDIO_INPUT)) {
    tmp12.stopSampling(AUDIO_INPUT, oldId.oldId);
    tmp12.startSampling(AUDIO_INPUT);
  } else {
    return false;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[7]);
const DeviceTypes = tmp2.DeviceTypes;
({ MediaEngineContextTypes: closure_10, SpeakingFlags: closure_11 } = tmp2);
let closure_12 = { inputDeviceFrecency: DeviceTypes.AUDIO_INPUT, outputDeviceFrecency: DeviceTypes.AUDIO_OUTPUT, videoDeviceFrecency: DeviceTypes.VIDEO_INPUT };
let obj = {
  afterCompute() {

  },
  computeBonus() {
    return 100;
  },
  lookupKey(arg0) {
    return arg0;
  },
  maxSamples: 256,
  numFrequentlyItems: Infinity
};
obj = {};
const stopWatch = new arg1(dependencyMap[8]).StopWatch();
obj[DeviceTypes.AUDIO_INPUT] = stopWatch;
const stopWatch1 = new arg1(dependencyMap[8]).StopWatch();
obj[DeviceTypes.AUDIO_OUTPUT] = stopWatch1;
const stopWatch2 = new arg1(dependencyMap[8]).StopWatch();
obj[DeviceTypes.VIDEO_INPUT] = stopWatch2;
let closure_14 = { [DeviceTypes.AUDIO_INPUT]: {}, [DeviceTypes.AUDIO_OUTPUT]: {}, [DeviceTypes.VIDEO_INPUT]: {} };
obj = {};
let importDefaultResult = importDefault(dependencyMap[9]);
importDefaultResult = new importDefaultResult(obj);
obj[DeviceTypes.AUDIO_INPUT] = importDefaultResult;
let importDefaultResult1 = importDefault(dependencyMap[9]);
importDefaultResult1 = new importDefaultResult1(obj);
obj[DeviceTypes.AUDIO_OUTPUT] = importDefaultResult1;
let importDefaultResult2 = importDefault(dependencyMap[9]);
importDefaultResult2 = new importDefaultResult2(obj);
obj[DeviceTypes.VIDEO_INPUT] = importDefaultResult2;
let tmp12 = (PersistedStore) => {
  class DeviceFrecencyStore {
    constructor() {
      self = this;
      tmp = closure_2(this, DeviceFrecencyStore);
      obj = closure_5(DeviceFrecencyStore);
      tmp2 = closure_4;
      if (closure_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = DeviceFrecencyStore;
  callback2(DeviceFrecencyStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const DeviceFrecencyStore = arg0;
      this.waitFor(closure_7, closure_8);
      const items = [, , ];
      ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1], VIDEO_INPUT: arr[2] } = closure_9);
      const item = items.forEach((arg0) => {
        let tmp;
        if (null != arg0) {
          tmp = arg0[arg0];
        }
        if (null != tmp) {
          closure_15[arg0].overwriteHistory(arg0[arg0]);
          const obj = closure_15[arg0];
        }
        closure_13[arg0].reset();
      });
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "reset",
    value() {
      const items = [, , ];
      ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1], VIDEO_INPUT: arr[2] } = closure_9);
      const item = items.forEach((arg0) => {
        closure_13[arg0].reset();
        closure_14[arg0] = {};
      });
    }
  };
  items[1] = obj;
  obj = {
    key: "track",
    value(arg0, arg1, usesSinceLastTrack) {
      if (null == closure_14[arg0][arg1]) {
        closure_14[arg0][arg1] = 0;
      }
      closure_14[arg0][arg1] = closure_14[arg0][arg1] + usesSinceLastTrack;
      let obj = closure_15[arg0];
      obj = { usesSinceLastTrack };
      obj.track(arg1, obj);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isSampling",
    value(arg0) {
      return closure_13[arg0].isRunning();
    }
  };
  items[4] = {
    key: "startSampling",
    value(arg0) {
      closure_13[arg0].start();
    }
  };
  items[5] = {
    key: "stopSampling",
    value(arg0, arg1) {
      let currentDeviceId = arg1;
      const self = this;
      closure_13[arg0].stop();
      const asMillisecondsResult = closure_13[arg0].elapsed().asMilliseconds();
      if (asMillisecondsResult > 0) {
        if (null == currentDeviceId) {
          currentDeviceId = function getConfigForDeviceType(arg0) {
            let obj = {
              getCurrentDeviceId(getInputDeviceId) {
                return getInputDeviceId.getInputDeviceId();
              }
            };
            obj = {
              getCurrentDeviceId(getOutputDeviceId) {
                return getOutputDeviceId.getOutputDeviceId();
              }
            };
            obj = {
              getCurrentDeviceId(getVideoDeviceId) {
                return getVideoDeviceId.getVideoDeviceId();
              }
            };
            return { [closure_9.AUDIO_INPUT]: obj, [closure_9.AUDIO_OUTPUT]: obj, [closure_9.VIDEO_INPUT]: obj }[arg0];
          }(arg0).getCurrentDeviceId(closure_7);
          const obj3 = function getConfigForDeviceType(arg0) {
            let obj = {
              getCurrentDeviceId(getInputDeviceId) {
                return getInputDeviceId.getInputDeviceId();
              }
            };
            obj = {
              getCurrentDeviceId(getOutputDeviceId) {
                return getOutputDeviceId.getOutputDeviceId();
              }
            };
            obj = {
              getCurrentDeviceId(getVideoDeviceId) {
                return getVideoDeviceId.getVideoDeviceId();
              }
            };
            return { [closure_9.AUDIO_INPUT]: obj, [closure_9.AUDIO_OUTPUT]: obj, [closure_9.VIDEO_INPUT]: obj }[arg0];
          }(arg0);
        }
        self.track(arg0, currentDeviceId, asMillisecondsResult);
      }
      closure_13[arg0].reset();
    }
  };
  items[6] = {
    key: "getState",
    value() {
      return { [closure_9.AUDIO_INPUT]: closure_15[closure_9.AUDIO_INPUT].usageHistory, [closure_9.AUDIO_OUTPUT]: closure_15[closure_9.AUDIO_OUTPUT].usageHistory, [closure_9.VIDEO_INPUT]: closure_15[closure_9.VIDEO_INPUT].usageHistory };
    }
  };
  items[7] = {
    key: "getDeviceIdsSortedByFrecency",
    value(arg0) {
      return closure_15[arg0].frequently;
    }
  };
  items[8] = {
    key: "getUsageStats",
    value() {
      const DeviceFrecencyStore = this;
      let obj = { [closure_9.AUDIO_INPUT]: [], [closure_9.AUDIO_OUTPUT]: [], [closure_9.VIDEO_INPUT]: [] };
      const items = [, ];
      ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1] } = closure_9);
      const item = items.forEach((arg0) => {
        if (self.isSampling(arg0)) {
          self.stopSampling(arg0);
          self.startSampling(arg0);
        }
        obj[arg0] = Object.entries(closure_14[arg0]);
      });
      obj = {
        duration_input_device_used_ids: arr2.map((arg0) => {
          let tmp;
          [tmp, ] = arg0;
          return tmp;
        }),
        duration_input_device_used_ms: arr3.map((arg0) => {
          let tmp;
          [, tmp] = arg0;
          return tmp;
        }),
        duration_output_device_used_ids: arr4.map((arg0) => {
          let tmp;
          [tmp, ] = arg0;
          return tmp;
        }),
        duration_output_device_used_ms: arr5.map((arg0) => {
          let tmp;
          [, tmp] = arg0;
          return tmp;
        })
      };
      return obj;
    }
  };
  return callback(DeviceFrecencyStore, items);
}(importDefault(dependencyMap[10]).PersistedStore);
tmp12.displayName = "DeviceFrecencyStore";
tmp12.persistKey = "DeviceFrecencyStore";
const items = [(arg0) => importDefault(dependencyMap[11]).mapKeys(arg0, (arg0, arg1) => closure_12[arg1])];
tmp12.migrations = items;
tmp12 = new tmp12(importDefault(dependencyMap[12]), {
  AUDIO_SET_INPUT_DEVICE(oldId) {
    return handleSetDevice(DeviceTypes.AUDIO_INPUT, oldId);
  },
  AUDIO_SET_OUTPUT_DEVICE(oldId) {
    return handleSetDevice(DeviceTypes.AUDIO_OUTPUT, oldId);
  },
  MEDIA_ENGINE_SET_VIDEO_DEVICE(oldId) {
    return handleSetDevice(DeviceTypes.VIDEO_INPUT, oldId);
  },
  SPEAKING: function handleSpeaking(speakingFlags) {
    speakingFlags = speakingFlags.speakingFlags;
    if (speakingFlags.context !== constants.DEFAULT) {
      return false;
    } else {
      const currentUser = currentUser.getCurrentUser();
      let id;
      if (null != currentUser) {
        id = currentUser.id;
      }
      if (null == id) {
        return false;
      } else {
        if (tmp === id) {
          let AUDIO_OUTPUT = DeviceTypes.AUDIO_INPUT;
        } else {
          AUDIO_OUTPUT = DeviceTypes.AUDIO_OUTPUT;
        }
        if (speakingFlags === constants2.NONE) {
          if (tmp12.isSampling(AUDIO_OUTPUT)) {
            tmp12.stopSampling(AUDIO_OUTPUT);
          }
        }
        if (speakingFlags !== constants2.NONE) {
          if (!tmp12.isSampling(AUDIO_OUTPUT)) {
            tmp12.startSampling(AUDIO_OUTPUT);
          }
        }
        return false;
      }
    }
  },
  RTC_CONNECTION_CLIENT_CONNECT: function handleConnect() {
    tmp12.reset();
  }
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/media_engine/DeviceFrecencyStore.tsx");

export default tmp12;
