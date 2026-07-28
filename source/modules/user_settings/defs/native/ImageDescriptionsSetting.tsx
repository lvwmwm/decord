// Module ID: 14400
// Function ID: 110143
// Name: onImageDescriptionSettingValueChange
// Dependencies: [1280, 7733, 3838, 14401, 10099, 1212, 2]
// Exports: onImageDescriptionSettingValueChange

// Module 14400 (onImageDescriptionSettingValueChange)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
function onImageDescriptionSettingValueChange(viewImageDescriptions) {
  let obj = require(14401) /* trackSettingsUpdated */;
  obj = { videoUploadQuality: _isNativeReflectConstruct.videoUploadQuality, viewImageDescriptions, lowQualityImageMode: _isNativeReflectConstruct.lowQualityImageMode, dataSavingMode: _isNativeReflectConstruct.dataSavingMode };
  obj.setImageDescriptions(obj);
}
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["w8j+yW"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: function useImageDescriptionSettingValue() {
    const ViewImageDescriptions = require(3838) /* explicitContentFromProto */.ViewImageDescriptions;
    return ViewImageDescriptions.useSetting();
  },
  onValueChange: onImageDescriptionSettingValueChange
};
createToggle = createToggle.createToggle(createToggle);
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/ImageDescriptionsSetting.tsx");

export default createToggle;
export { onImageDescriptionSettingValueChange };
