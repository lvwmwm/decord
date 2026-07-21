// Module ID: 14401
// Function ID: 108652
// Name: toggle
// Dependencies: [1207959604, 3892314168, 29, 1224736784, 2382364728, 1711276039, 33554471]

// Module 14401 (toggle)
const _module = require(dependencyMap[4]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[5]).intl;
    return intl.string(require(dependencyMap[5]).t.CyLYKZ);
  },
  parent: require(dependencyMap[0]).MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToSupportQuests3PSettingValue() {
    const Quests3PDataOptedOut = require(dependencyMap[1]).Quests3PDataOptedOut;
    return !Quests3PDataOptedOut.useSetting();
  },
  onValueChange: function onDataToSupportQuests3PSettingValueChange(arg0) {
    const Quests3PDataOptedOut = require(dependencyMap[1]).Quests3PDataOptedOut;
    Quests3PDataOptedOut.updateSetting(!arg0);
  },
  useIsDisabled: function useDataToSupportQuests3PSettingIsDisabled() {
    let adPersonalizationTogglesDisabled = require(dependencyMap[2]).useAdPersonalizationTogglesDisabled();
    const DropsOptedOut = require(dependencyMap[1]).DropsOptedOut;
    const setting = DropsOptedOut.useSetting();
    const obj = require(dependencyMap[2]);
    const isParentallyControlled = require(dependencyMap[3]).useIsParentallyControlled();
    if (!adPersonalizationTogglesDisabled) {
      adPersonalizationTogglesDisabled = setting;
    }
    if (!adPersonalizationTogglesDisabled) {
      adPersonalizationTogglesDisabled = isParentallyControlled;
    }
    return adPersonalizationTogglesDisabled;
  }
});
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/UseDataForQuests3PSetting.tsx");

export default toggle;
