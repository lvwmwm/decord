// Module ID: 14398
// Function ID: 108620
// Name: toggle
// Dependencies: [1157627956, 3875536952, 29, 1174405136, 2382364728]

// Module 14398 (toggle)
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
