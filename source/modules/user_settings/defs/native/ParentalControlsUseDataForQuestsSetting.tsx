// Module ID: 14625
// Function ID: 111513
// Name: toggle
// Dependencies: [5765, 7697, 13790, 1212, 2199, 10059, 2]

// Module 14625 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2199).ZhaNu8);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToSupportQuestsSettingValue() {
    const selectedTeenId = store.getSelectedTeenId();
    let tmp2;
    const ParentalControlledDropsOptedOut = require(13790) /* result */.ParentalControlledDropsOptedOut;
    if (null != selectedTeenId) {
      tmp2 = selectedTeenId;
    }
    return !ParentalControlledDropsOptedOut.useControlledSetting(tmp2);
  },
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const selectedTeenId = store.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = require(13790) /* result */.ParentalControlledDropsOptedOut;
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
