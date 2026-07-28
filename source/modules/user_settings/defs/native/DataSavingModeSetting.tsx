// Module ID: 14403
// Function ID: 110171
// Name: toggle
// Dependencies: [1280, 7733, 566, 14401, 3838, 10099, 1212, 2]

// Module 14403 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.ix8XIj);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: function useDataSavingModeSettingValue() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.dataSavingMode);
  },
  onValueChange: function onDataSavingModeSettingValueChange(dataSavingMode) {
    let obj = require(14401) /* trackSettingsUpdated */;
    obj = { videoUploadQuality: _isNativeReflectConstruct.videoUploadQuality };
    const ViewImageDescriptions = require(3838) /* explicitContentFromProto */.ViewImageDescriptions;
    obj.viewImageDescriptions = ViewImageDescriptions.getSetting();
    obj.lowQualityImageMode = _isNativeReflectConstruct.lowQualityImageMode;
    obj.dataSavingMode = dataSavingMode;
    obj.setDataSavingMode(obj);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/DataSavingModeSetting.tsx");

export default createToggle;
