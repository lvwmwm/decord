// Module ID: 14296
// Function ID: 109537
// Name: radio
// Dependencies: [1280, 7662, 566, 14295, 3803, 1212, 10095, 2]

// Module 14296 (radio)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { VideoQualitySettings } from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.PXq9f1);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: function useVideoUploadQualitySettingValue() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.videoUploadQuality);
  },
  onValueChange: function onVideoUploadQualitySettingValueChange(videoUploadQuality) {
    let obj = require(14295) /* trackSettingsUpdated */;
    obj = { videoUploadQuality };
    const ViewImageDescriptions = require(3803) /* explicitContentFromProto */.ViewImageDescriptions;
    obj.viewImageDescriptions = ViewImageDescriptions.getSetting();
    ({ lowQualityImageMode: obj2.lowQualityImageMode, dataSavingMode: obj2.dataSavingMode } = _isNativeReflectConstruct);
    const result = obj.setVideoUploadQuality(obj);
  },
  useOptions: function useVideoUploadQualitySettingOptions() {
    let obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.label = intl.string(require(1212) /* getSystemLocale */.t.cWGW5d);
    obj.value = VideoQualitySettings.BEST;
    const items = [obj, , ];
    obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl2.string(require(1212) /* getSystemLocale */.t["5hKnyC"]);
    obj.value = VideoQualitySettings.STANDARD;
    items[1] = obj;
    obj = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl3.string(require(1212) /* getSystemLocale */.t.y5k4ZJ);
    obj.value = VideoQualitySettings.DATA_SAVER;
    items[2] = obj;
    return items;
  }
};
createToggle = createToggle.createRadio(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/VideoUploadQualitySetting.tsx");

export default createToggle;
