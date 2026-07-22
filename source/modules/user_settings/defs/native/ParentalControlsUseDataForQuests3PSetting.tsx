// Module ID: 14451
// Function ID: 108914
// Name: toggle
// Dependencies: []

// Module 14451 (toggle)
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[4]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.CyLYKZ);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToSupportQuests3PSettingValue() {
    let tmp;
    const selectedTeenId = arg1(dependencyMap[2]).useSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut = arg1(dependencyMap[3]).ParentalControlledQuests3PDataOptedOut;
    if (null != selectedTeenId) {
      tmp = selectedTeenId;
    }
    return !ParentalControlledQuests3PDataOptedOut.useControlledSetting(tmp);
  },
  onValueChange: function onDataToSupportQuests3PSettingValueChange(arg0) {
    const selectedTeenId = selectedTeenId.getSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut = arg1(dependencyMap[3]).ParentalControlledQuests3PDataOptedOut;
    let tmp2;
    if (null != selectedTeenId) {
      tmp2 = selectedTeenId;
    }
    const result = ParentalControlledQuests3PDataOptedOut.updateControlledSetting(tmp2, !arg0);
  },
  useIsDisabled: function useDataToSupportQuests3PSettingIsDisabled() {
    let tmp;
    const selectedTeenId = arg1(dependencyMap[2]).useSelectedTeenId();
    const ParentalControlledDropsOptedOut = arg1(dependencyMap[3]).ParentalControlledDropsOptedOut;
    if (null != selectedTeenId) {
      tmp = selectedTeenId;
    }
    return ParentalControlledDropsOptedOut.useControlledSetting(tmp);
  },
  unsearchable: true
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuests3PSetting.tsx");

export default toggle;
