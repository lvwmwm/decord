// Module ID: 13613
// Function ID: 103163
// Name: toggle
// Dependencies: []

// Module 13613 (toggle)
const _module = require(dependencyMap[9]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[10]).intl;
    return intl.string(require(dependencyMap[10]).t.VGWIAo);
  },
  useDescription() {
    const intl = require(dependencyMap[10]).intl;
    return intl.string(require(dependencyMap[10]).t.J4zza/);
  },
  parent: require(dependencyMap[0]).MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useViewNsfwDmCommandsSettingValue() {
    return require(dependencyMap[1]).useViewNsfwCommandsOrDefault();
  },
  onValueChange: function handleValueChange(addFlagResult) {
    let obj = require(dependencyMap[2]);
    if (obj.shouldAgeVerifyForSettingsToggles()) {
      if (addFlagResult) {
        obj = { entryPoint: require(dependencyMap[7]).AgeVerificationModalEntryPoint.AGE_RESTRICTED_DM_COMMANDS_SETTINGS };
        const result = importDefault(dependencyMap[6]).showAgeVerificationGetStartedModal(obj);
        const obj2 = importDefault(dependencyMap[6]);
      }
    }
    const ViewNsfwCommands = require(dependencyMap[8]).ViewNsfwCommands;
    ViewNsfwCommands.updateSetting(addFlagResult);
  },
  usePredicate() {
    let shouldAgeVerifyForSettingsToggles = require(dependencyMap[2]).useShouldAgeVerifyForSettingsToggles();
    const obj = require(dependencyMap[2]);
    const nSFWAllowed = require(dependencyMap[3]).useNSFWAllowed();
    const obj2 = require(dependencyMap[3]);
    const tmp3 = null == nSFWAllowed || nSFWAllowed;
    if (shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = !obj3.useIsVerifiedTeen();
    }
    if (!shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = tmp3;
    }
    if (shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = require(dependencyMap[5]).isAndroid();
      const obj4 = require(dependencyMap[5]);
    }
    return shouldAgeVerifyForSettingsToggles;
  }
});
const _module1 = require(dependencyMap[11]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AndroidViewNsfwDmCommandsSetting.tsx");

export default toggle;
export const AndroidViewNsfwDmCommandsSettingV2 = toggle;
