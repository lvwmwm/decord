// Module ID: 14096
// Function ID: 107035
// Name: toggle
// Dependencies: []

// Module 14096 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.cSb1ub);
  },
  parent: require(dependencyMap[0]).MobileSetting.APPEARANCE,
  useValue: require(dependencyMap[3]).HappeningNowCardsDisabled.useSetting,
  onValueChange: require(dependencyMap[3]).HappeningNowCardsDisabled.updateSetting
});
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/DmsHappeningNowCardsSetting.tsx");

export default toggle;
