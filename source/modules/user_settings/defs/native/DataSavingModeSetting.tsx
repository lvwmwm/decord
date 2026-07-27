// Module ID: 14359
// Function ID: 109998
// Name: toggle
// Dependencies: [1280, 7697, 566, 14357, 3804, 10059, 1212, 2]

// Module 14359 (toggle)
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
    let obj = require(14357) /* trackSettingsUpdated */;
    obj = { videoUploadQuality: _isNativeReflectConstruct.videoUploadQuality };
    const ViewImageDescriptions = require(3804) /* explicitContentFromProto */.ViewImageDescriptions;
    obj.viewImageDescriptions = ViewImageDescriptions.getSetting();
    obj.lowQualityImageMode = _isNativeReflectConstruct.lowQualityImageMode;
    obj.dataSavingMode = dataSavingMode;
    obj.setDataSavingMode(obj);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/DataSavingModeSetting.tsx");

export default createToggle;
