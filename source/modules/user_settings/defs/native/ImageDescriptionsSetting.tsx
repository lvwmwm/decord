// Module ID: 15386
// Function ID: 15387
// Name: onImageDescriptionSettingValueChange
// Dependencies: [1303, 7906, 4166, 15387, 11400, 1233, 2]
// Exports: onImageDescriptionSettingValueChange

// Module 15386 (onImageDescriptionSettingValueChange)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import UserSettingsText from "UserSettingsText" /* 15387 */;
import closure_2 from "CHANNEL_SIDEBAR_WIDTH" /* 1303 */;
import createToggle from "createToggle" /* 11400 */;

require = arg1;
function onImageDescriptionSettingValueChange(viewImageDescriptions) {
  let obj = UserSettingsText;
  obj = { videoUploadQuality: closure_2.videoUploadQuality, viewImageDescriptions, lowQualityImageMode: closure_2.lowQualityImageMode, dataSavingMode: closure_2.dataSavingMode };
  obj.setImageDescriptions(obj);
}
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["w8j+yW"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CHAT,
  useValue: function useImageDescriptionSettingValue() {
    const ViewImageDescriptions = explicitContentFromProto.ViewImageDescriptions;
    return ViewImageDescriptions.useSetting();
  },
  onValueChange: onImageDescriptionSettingValueChange
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ImageDescriptionsSetting.tsx");

export default createToggle;
export { onImageDescriptionSettingValueChange };
