// Module ID: 4212
// Function ID: 36737
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4212 (_isNativeReflectConstruct)
let ApplicationStreamFPS;
let ApplicationStreamResolutions;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[5]);
const ApplicationStreamPresets = tmp2.ApplicationStreamPresets;
({ ApplicationStreamResolutions, ApplicationStreamFPS } = tmp2);
const MediaEngineContextTypes = arg1(dependencyMap[6]).MediaEngineContextTypes;
const PRESET_VIDEO = ApplicationStreamPresets.PRESET_VIDEO;
const RESOLUTION_720 = ApplicationStreamResolutions.RESOLUTION_720;
const FPS_30 = ApplicationStreamFPS.FPS_30;
let closure_10 = true;
let tmp3 = (PersistedStore) => {
  class ApplicationStreamingSettingsStore {
    constructor() {
      self = this;
      tmp = ApplicationStreamingSettingsStore(this, ApplicationStreamingSettingsStore);
      obj = closure_3(ApplicationStreamingSettingsStore);
      tmp2 = closure_2;
      if (closure_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = ApplicationStreamingSettingsStore;
  callback2(ApplicationStreamingSettingsStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(preset) {
      let soundshareEnabled;
      if (null != preset) {
        let PRESET_VIDEO = preset.preset;
        if (null == PRESET_VIDEO) {
          PRESET_VIDEO = constants.PRESET_VIDEO;
        }
        ({ resolution: closure_8, fps: closure_9, soundshareEnabled } = preset);
        let closure_10 = null == soundshareEnabled || soundshareEnabled;
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "getState",
    value() {
      return { preset: closure_7, resolution: closure_8, fps: closure_9, soundshareEnabled: closure_10 };
    }
  };
  items[1] = obj;
  return callback(ApplicationStreamingSettingsStore, items);
}(importDefault(dependencyMap[7]).PersistedStore);
tmp3.displayName = "ApplicationStreamingSettingsStore";
tmp3.persistKey = "ApplicationStreamingSettingStore";
tmp3 = new tmp3(importDefault(dependencyMap[8]), {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function handleSetGoLiveSource(settings) {
    settings = settings.settings;
    let context;
    if (null != settings) {
      context = settings.context;
    }
    if (context === MediaEngineContextTypes.STREAM) {
      let qualityOptions;
      if (null != settings) {
        qualityOptions = settings.qualityOptions;
      }
      if (null != qualityOptions) {
        let flag = false;
        if (PRESET_VIDEO !== settings.qualityOptions.preset) {
          const PRESET_VIDEO = settings.qualityOptions.preset;
          flag = true;
        }
        if (RESOLUTION_720 !== settings.qualityOptions.resolution) {
          const RESOLUTION_720 = settings.qualityOptions.resolution;
          flag = true;
        }
        if (FPS_30 !== settings.qualityOptions.frameRate) {
          const FPS_30 = settings.qualityOptions.frameRate;
          flag = true;
        }
        return flag;
      }
    }
    return false;
  },
  STREAM_UPDATE_SETTINGS: function handleUpdateSettings(arg0) {
    let frameRate;
    let preset;
    let resolution;
    let soundshareEnabled;
    ({ preset, resolution, frameRate, soundshareEnabled } = arg0);
    let tmp = null != preset;
    if (tmp) {
      tmp = preset !== PRESET_VIDEO;
    }
    let flag = false;
    if (tmp) {
      const PRESET_VIDEO = preset;
      flag = true;
    }
    let tmp3 = null != resolution;
    if (tmp3) {
      tmp3 = resolution !== RESOLUTION_720;
    }
    if (tmp3) {
      const RESOLUTION_720 = resolution;
      flag = true;
    }
    let tmp5 = null != frameRate;
    if (tmp5) {
      tmp5 = frameRate !== FPS_30;
    }
    if (tmp5) {
      const FPS_30 = frameRate;
      flag = true;
    }
    let tmp7 = null != soundshareEnabled;
    if (tmp7) {
      tmp7 = soundshareEnabled !== closure_10;
    }
    if (tmp7) {
      closure_10 = soundshareEnabled;
      flag = true;
    }
    return flag;
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("stores/ApplicationStreamingSettingsStore.tsx");

export default tmp3;
