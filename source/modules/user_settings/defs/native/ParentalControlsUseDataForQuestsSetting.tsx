// Module ID: 14695
// Function ID: 14696
// Name: toggle
// Dependencies: [5793, 7756, 13856, 1236, 2223, 10120, 2]

// Module 14695 (toggle)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2223).ZhaNu8);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToSupportQuestsSettingValue() {
    const selectedTeenId = store.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = require(13856) /* result */.ParentalControlledDropsOptedOut;
    return !ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
  },
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const selectedTeenId = store.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = require(13856) /* result */.ParentalControlledDropsOptedOut;
    const result = ParentalControlledDropsOptedOut.updateControlledSetting(selectedTeenId, !arg0);
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("result").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx");

export default createToggle;
