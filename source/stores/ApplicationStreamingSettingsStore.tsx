// Module ID: 4220
// Function ID: 36832
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4185, 4191, 566, 686, 2]

// Module 4220 (_isNativeReflectConstruct)
import DesktopSources from "DesktopSources";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import makeButton from "makeButton";
import { MediaEngineContextTypes } from "DesktopSources";

let ApplicationStreamFPS;
let ApplicationStreamResolutions;
function _isNativeReflectConstruct() {
  let DesktopSources = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return DesktopSources;
  }
  const result = _isNativeReflectConstruct();
}
const ApplicationStreamPresets = makeButton.ApplicationStreamPresets;
({ ApplicationStreamResolutions, ApplicationStreamFPS } = makeButton);
let PRESET_VIDEO = ApplicationStreamPresets.PRESET_VIDEO;
const RESOLUTION_720 = ApplicationStreamResolutions.RESOLUTION_720;
const FPS_30 = ApplicationStreamFPS.FPS_30;
let c10 = true;
let tmp3 = ((PersistedStore) => {
  class ApplicationStreamingSettingsStore {
    constructor() {
      self = this;
      tmp = ApplicationStreamingSettingsStore(this, ApplicationStreamingSettingsStore);
      obj = outer1_3(ApplicationStreamingSettingsStore);
      tmp2 = outer1_2;
      if (outer1_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ApplicationStreamingSettingsStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(preset) {
      let outer1_8;
      let outer1_9;
      let soundshareEnabled;
      if (null != preset) {
        let PRESET_VIDEO = preset.preset;
        if (null == PRESET_VIDEO) {
          PRESET_VIDEO = outer1_5.PRESET_VIDEO;
        }
        const outer1_7 = PRESET_VIDEO;
        ({ resolution: outer1_8, fps: outer1_9, soundshareEnabled } = preset);
        const outer1_10 = null == soundshareEnabled || soundshareEnabled;
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "getState",
    value() {
      return { preset: outer1_7, resolution: outer1_8, fps: outer1_9, soundshareEnabled: outer1_10 };
    }
  };
  items[1] = obj;
  return callback(ApplicationStreamingSettingsStore, items);
})(require("initialize").PersistedStore);
tmp3.displayName = "ApplicationStreamingSettingsStore";
tmp3.persistKey = "ApplicationStreamingSettingStore";
tmp3 = new tmp3(require("dispatcher"), {
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
        if (preset !== settings.qualityOptions.preset) {
          preset = settings.qualityOptions.preset;
          flag = true;
        }
        if (resolution !== settings.qualityOptions.resolution) {
          resolution = settings.qualityOptions.resolution;
          flag = true;
        }
        if (frameRate !== settings.qualityOptions.frameRate) {
          frameRate = settings.qualityOptions.frameRate;
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
      tmp = preset !== preset;
    }
    let flag = false;
    if (tmp) {
      flag = true;
    }
    let tmp3 = null != resolution;
    if (tmp3) {
      tmp3 = resolution !== resolution;
    }
    if (tmp3) {
      flag = true;
    }
    let tmp5 = null != frameRate;
    if (tmp5) {
      tmp5 = frameRate !== frameRate;
    }
    if (tmp5) {
      flag = true;
    }
    let tmp7 = null != soundshareEnabled;
    if (tmp7) {
      tmp7 = soundshareEnabled !== soundshareEnabled;
    }
    if (tmp7) {
      flag = true;
    }
    return flag;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/ApplicationStreamingSettingsStore.tsx");

export default tmp3;
