// Module ID: 14614
// Function ID: 111386
// Name: toggle
// Dependencies: [6769, 7751, 13779, 1212, 2198, 10127, 2]

// Module 14614 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2198).ZhaNu8);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToSupportQuestsSettingValue() {
    const selectedTeenId = store.getSelectedTeenId();
    let tmp2;
    const ParentalControlledDropsOptedOut = require(13779) /* result */.ParentalControlledDropsOptedOut;
    if (null != selectedTeenId) {
      tmp2 = selectedTeenId;
    }
    return !ParentalControlledDropsOptedOut.useControlledSetting(tmp2);
  },
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const selectedTeenId = store.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = require(13779) /* result */.ParentalControlledDropsOptedOut;
    let tmp2;
    if (null != selectedTeenId) {
      tmp2 = selectedTeenId;
    }
    const result = ParentalControlledDropsOptedOut.updateControlledSetting(tmp2, !arg0);
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("result").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx");

export default createToggle;
