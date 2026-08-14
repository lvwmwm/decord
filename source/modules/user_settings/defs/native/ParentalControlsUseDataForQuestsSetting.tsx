// Module ID: 15000
// Function ID: 15001
// Name: toggle
// Dependencies: [7066, 8148, 14150, 1236, 2303, 10421, 2]

// Module 15000 (toggle)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2303).ZhaNu8);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToSupportQuestsSettingValue() {
    const selectedTeenId = store.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = require(14150) /* result */.ParentalControlledDropsOptedOut;
    return !ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
  },
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const selectedTeenId = store.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = require(14150) /* result */.ParentalControlledDropsOptedOut;
    const result = ParentalControlledDropsOptedOut.updateControlledSetting(selectedTeenId, !arg0);
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("result").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx");

export default createToggle;
