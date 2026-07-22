// Module ID: 14450
// Function ID: 108910
// Name: toggle
// Dependencies: []

// Module 14450 (toggle)
let closure_3 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[5]);
obj = {
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(importDefault(dependencyMap[4]).ZhaNu8);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToSupportQuestsSettingValue() {
    const selectedTeenId = store.getSelectedTeenId();
    let tmp2;
    const ParentalControlledDropsOptedOut = arg1(dependencyMap[2]).ParentalControlledDropsOptedOut;
    if (null != selectedTeenId) {
      tmp2 = selectedTeenId;
    }
    return !ParentalControlledDropsOptedOut.useControlledSetting(tmp2);
  },
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const selectedTeenId = store.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = arg1(dependencyMap[2]).ParentalControlledDropsOptedOut;
    let tmp2;
    if (null != selectedTeenId) {
      tmp2 = selectedTeenId;
    }
    const result = ParentalControlledDropsOptedOut.updateControlledSetting(tmp2, !arg0);
  },
  unsearchable: true
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx");

export default toggle;
