// Module ID: 14987
// Function ID: 14988
// Name: toggle
// Dependencies: [7038, 8123, 7379, 14137, 10493, 1236, 2]

// Module 14987 (toggle)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.CyLYKZ);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToSupportQuests3PSettingValue() {
    const selectedTeenId = require(7379) /* useSelectedTeen */.useSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut = require(14137) /* result */.ParentalControlledQuests3PDataOptedOut;
    return !ParentalControlledQuests3PDataOptedOut.useControlledSetting(selectedTeenId);
  },
  onValueChange: function onDataToSupportQuests3PSettingValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut = require(14137) /* result */.ParentalControlledQuests3PDataOptedOut;
    const result = ParentalControlledQuests3PDataOptedOut.updateControlledSetting(selectedTeenId, !arg0);
  },
  useIsDisabled: function useDataToSupportQuests3PSettingIsDisabled() {
    const selectedTeenId = require(7379) /* useSelectedTeen */.useSelectedTeenId();
    const ParentalControlledDropsOptedOut = require(14137) /* result */.ParentalControlledDropsOptedOut;
    return ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("useSelectedTeen").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuests3PSetting.tsx");

export default createToggle;
