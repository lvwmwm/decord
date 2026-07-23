// Module ID: 4205
// Function ID: 36453
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4177, 1849, 4191, 4206, 4214, 566, 22, 686, 2]

// Module 4205 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "DesktopSources";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import DesktopSources from "DesktopSources";
import importDefaultResult from "DEFAULT_FRECENCY";
import importDefaultResult1 from "DEFAULT_FRECENCY";
import importDefaultResult2 from "DEFAULT_FRECENCY";

let closure_10;
let closure_11;
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
const DeviceTypes = DesktopSources.DeviceTypes;
({ MediaEngineContextTypes: closure_10, SpeakingFlags: closure_11 } = DesktopSources);
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
const stopWatch = new require("sleep").StopWatch();
obj[DeviceTypes.AUDIO_INPUT] = stopWatch;
const stopWatch1 = new require("sleep").StopWatch();
obj[DeviceTypes.AUDIO_OUTPUT] = stopWatch1;
const stopWatch2 = new require("sleep").StopWatch();
obj[DeviceTypes.VIDEO_INPUT] = stopWatch2;
let closure_14 = { [DeviceTypes.AUDIO_INPUT]: {}, [DeviceTypes.AUDIO_OUTPUT]: {}, [DeviceTypes.VIDEO_INPUT]: {} };
obj = {};
importDefaultResult = new importDefaultResult(obj);
obj[DeviceTypes.AUDIO_INPUT] = importDefaultResult;
importDefaultResult1 = new importDefaultResult1(obj);
obj[DeviceTypes.AUDIO_OUTPUT] = importDefaultResult1;
importDefaultResult2 = new importDefaultResult2(obj);
obj[DeviceTypes.VIDEO_INPUT] = importDefaultResult2;
let tmp12 = ((PersistedStore) => {
  class DeviceFrecencyStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, DeviceFrecencyStore);
      obj = outer1_5(DeviceFrecencyStore);
      tmp2 = outer1_4;
      if (outer1_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(DeviceFrecencyStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let closure_0 = arg0;
      this.waitFor(outer1_7, outer1_8);
      const items = [, , ];
      ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1], VIDEO_INPUT: arr[2] } = outer1_9);
      const item = items.forEach((arg0) => {
        let tmp;
        if (null != dependencyMap) {
          tmp = dependencyMap[arg0];
        }
        if (null != tmp) {
          outer2_15[arg0].overwriteHistory(dependencyMap[arg0]);
          const obj = outer2_15[arg0];
        }
        outer2_13[arg0].reset();
      });
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "reset",
    value() {
      const items = [, , ];
      ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1], VIDEO_INPUT: arr[2] } = outer1_9);
      const item = items.forEach((arg0) => {
        outer2_13[arg0].reset();
        outer2_14[arg0] = {};
      });
    }
  };
  items[1] = obj;
  obj = {
    key: "track",
    value(arg0, arg1, usesSinceLastTrack) {
      if (null == outer1_14[arg0][arg1]) {
        outer1_14[arg0][arg1] = 0;
      }
      outer1_14[arg0][arg1] = outer1_14[arg0][arg1] + usesSinceLastTrack;
      let obj = outer1_15[arg0];
      obj = { usesSinceLastTrack };
      obj.track(arg1, obj);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isSampling",
    value(arg0) {
      return outer1_13[arg0].isRunning();
    }
  };
  items[4] = {
    key: "startSampling",
    value(arg0) {
      outer1_13[arg0].start();
    }
  };
  items[5] = {
    key: "stopSampling",
    value(arg0, arg1) {
      let currentDeviceId = arg1;
      const self = this;
      outer1_13[arg0].stop();
      const asMillisecondsResult = outer1_13[arg0].elapsed().asMilliseconds();
      if (asMillisecondsResult > 0) {
        if (null == currentDeviceId) {
          currentDeviceId = (function getConfigForDeviceType(arg0) {
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
            return { [outer2_9.AUDIO_INPUT]: obj, [outer2_9.AUDIO_OUTPUT]: obj, [outer2_9.VIDEO_INPUT]: obj }[arg0];
          })(arg0).getCurrentDeviceId(outer1_7);
          const obj3 = (function getConfigForDeviceType(arg0) {
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
            return { [outer2_9.AUDIO_INPUT]: obj, [outer2_9.AUDIO_OUTPUT]: obj, [outer2_9.VIDEO_INPUT]: obj }[arg0];
          })(arg0);
        }
        self.track(arg0, currentDeviceId, asMillisecondsResult);
      }
      outer1_13[arg0].reset();
    }
  };
  items[6] = {
    key: "getState",
    value() {
      return { [outer1_9.AUDIO_INPUT]: outer1_15[outer1_9.AUDIO_INPUT].usageHistory, [outer1_9.AUDIO_OUTPUT]: outer1_15[outer1_9.AUDIO_OUTPUT].usageHistory, [outer1_9.VIDEO_INPUT]: outer1_15[outer1_9.VIDEO_INPUT].usageHistory };
    }
  };
  items[7] = {
    key: "getDeviceIdsSortedByFrecency",
    value(arg0) {
      return outer1_15[arg0].frequently;
    }
  };
  items[8] = {
    key: "getUsageStats",
    value() {
      const self = this;
      let obj = { [outer1_9.AUDIO_INPUT]: [], [outer1_9.AUDIO_OUTPUT]: [], [outer1_9.VIDEO_INPUT]: [] };
      const items = [, ];
      ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1] } = outer1_9);
      const item = items.forEach((arg0) => {
        if (self.isSampling(arg0)) {
          self.stopSampling(arg0);
          self.startSampling(arg0);
        }
        obj[arg0] = Object.entries(outer2_14[arg0]);
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
})(require("initialize").PersistedStore);
tmp12.displayName = "DeviceFrecencyStore";
tmp12.persistKey = "DeviceFrecencyStore";
let items = [(arg0) => importDefault(22).mapKeys(arg0, (arg0, arg1) => outer1_12[arg1])];
tmp12.migrations = items;
tmp12 = new tmp12(require("dispatcher"), {
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
      currentUser = currentUser.getCurrentUser();
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
let closure_16 = tmp12;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/media_engine/DeviceFrecencyStore.tsx");

export default tmp12;
