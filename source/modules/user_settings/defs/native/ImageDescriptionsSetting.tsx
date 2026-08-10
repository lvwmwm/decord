// Module ID: 14648
// Function ID: 14649
// Name: onImageDescriptionSettingValueChange
// Dependencies: [1304, 8082, 3974, 14649, 10447, 1236, 2]
// Exports: onImageDescriptionSettingValueChange

// Module 14648 (onImageDescriptionSettingValueChange)
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import createToggle from "createToggle";

const require = arg1;
function onImageDescriptionSettingValueChange(viewImageDescriptions) {
  let obj = require(14649) /* UserSettingsText */;
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
    const ViewImageDescriptions = require(3974) /* explicitContentFromProto */.ViewImageDescriptions;
    return ViewImageDescriptions.useSetting();
  },
  onValueChange: onImageDescriptionSettingValueChange
};
createToggle = createToggle.createToggle(createToggle);
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/ImageDescriptionsSetting.tsx");

export default createToggle;
export { onImageDescriptionSettingValueChange };
