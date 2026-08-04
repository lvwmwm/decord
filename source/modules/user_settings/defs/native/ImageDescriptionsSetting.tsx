// Module ID: 14542
// Function ID: 14543
// Name: onImageDescriptionSettingValueChange
// Dependencies: [1304, 7892, 3958, 14543, 10361, 1236, 2]
// Exports: onImageDescriptionSettingValueChange

// Module 14542 (onImageDescriptionSettingValueChange)
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import createToggle from "createToggle";

const require = arg1;
function onImageDescriptionSettingValueChange(viewImageDescriptions) {
  let obj = require(14543) /* UserSettingsText */;
  obj = { videoUploadQuality: CHANNEL_SIDEBAR_WIDTH.videoUploadQuality, viewImageDescriptions, lowQualityImageMode: CHANNEL_SIDEBAR_WIDTH.lowQualityImageMode, dataSavingMode: CHANNEL_SIDEBAR_WIDTH.dataSavingMode };
  obj.setImageDescriptions(obj);
}
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["w8j+yW"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: function useImageDescriptionSettingValue() {
    const ViewImageDescriptions = require(3958) /* explicitContentFromProto */.ViewImageDescriptions;
    return ViewImageDescriptions.useSetting();
  },
  onValueChange: onImageDescriptionSettingValueChange
};
createToggle = createToggle.createToggle(createToggle);
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/ImageDescriptionsSetting.tsx");

export default createToggle;
export { onImageDescriptionSettingValueChange };
