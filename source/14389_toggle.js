// Module ID: 14389
// Function ID: 108589
// Name: toggle
// Dependencies: []

// Module 14389 (toggle)
const _module = require(dependencyMap[4]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[5]).intl;
    return intl.string(require(dependencyMap[5]).t.sJYh5t);
  },
  parent: require(dependencyMap[0]).MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToSupportQuestsSettingValue() {
    const DropsOptedOut = require(dependencyMap[3]).DropsOptedOut;
    return !DropsOptedOut.useSetting();
  },
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const DropsOptedOut = require(dependencyMap[3]).DropsOptedOut;
    DropsOptedOut.updateSetting(!arg0);
  },
  useIsDisabled() {
    let adPersonalizationTogglesDisabled = require(dependencyMap[1]).useAdPersonalizationTogglesDisabled();
    const obj = require(dependencyMap[1]);
    if (!adPersonalizationTogglesDisabled) {
      adPersonalizationTogglesDisabled = obj2.useIsParentallyControlled();
    }
    return adPersonalizationTogglesDisabled;
  }
});
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/UseDataForQuestsSetting.tsx");

export default toggle;
