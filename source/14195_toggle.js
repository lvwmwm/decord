// Module ID: 14195
// Function ID: 107417
// Name: toggle
// Dependencies: []

// Module 14195 (toggle)
let setInAppMessageSoundsEnabled;
let useInAppMessageSoundsEnabled;
const _module = require(dependencyMap[0]);
({ setInAppMessageSoundsEnabled, useInAppMessageSoundsEnabled } = _module);
const _module1 = require(dependencyMap[2]);
const toggle = _module1.createToggle({
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.jLCRyj);
  },
  useDescription() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.wls+Ax);
  },
  parent: require(dependencyMap[1]).MobileSetting.NOTIFICATIONS,
  useValue: useInAppMessageSoundsEnabled,
  onValueChange: setInAppMessageSoundsEnabled,
  usePredicate: require(dependencyMap[4]).isMetaQuest
});
const _module2 = require(dependencyMap[5]);
const result = _module2.fileFinishedImporting("modules/user_settings/defs/native/InAppMessageSoundsSetting.tsx");

export default toggle;
