// Module ID: 14671
// Function ID: 111695
// Name: toggle
// Dependencies: [5775, 7733, 6237, 13835, 10099, 1212, 2]

// Module 14671 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.CyLYKZ);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToSupportQuests3PSettingValue() {
    let tmp;
    const selectedTeenId = require(6237) /* useSelectedTeen */.useSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut = require(13835) /* result */.ParentalControlledQuests3PDataOptedOut;
    if (null != selectedTeenId) {
      tmp = selectedTeenId;
    }
    return !ParentalControlledQuests3PDataOptedOut.useControlledSetting(tmp);
  },
  onValueChange: function onDataToSupportQuests3PSettingValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut = require(13835) /* result */.ParentalControlledQuests3PDataOptedOut;
    let tmp2;
    if (null != selectedTeenId) {
      tmp2 = selectedTeenId;
    }
    const result = ParentalControlledQuests3PDataOptedOut.updateControlledSetting(tmp2, !arg0);
  },
  useIsDisabled: function useDataToSupportQuests3PSettingIsDisabled() {
    let tmp;
    const selectedTeenId = require(6237) /* useSelectedTeen */.useSelectedTeenId();
    const ParentalControlledDropsOptedOut = require(13835) /* result */.ParentalControlledDropsOptedOut;
    if (null != selectedTeenId) {
      tmp = selectedTeenId;
    }
    return ParentalControlledDropsOptedOut.useControlledSetting(tmp);
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("useSelectedTeen").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuests3PSetting.tsx");

export default createToggle;
