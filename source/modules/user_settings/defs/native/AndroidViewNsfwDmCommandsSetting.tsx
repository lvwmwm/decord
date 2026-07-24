// Module ID: 13794
// Function ID: 105721
// Name: toggle
// Dependencies: [7751, 8013, 4345, 8014, 4347, 477, 7581, 7583, 3803, 10127, 1212, 2]

// Module 13794 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.VGWIAo);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["J4zza/"]);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useViewNsfwDmCommandsSettingValue() {
    return require(8013) /* resolveNsfwTogglesWithDefaults */.useViewNsfwCommandsOrDefault();
  },
  onValueChange: function handleValueChange(addFlagResult) {
    let obj = require(4345) /* shouldAgeVerifyForAgeGate */;
    if (obj.shouldAgeVerifyForSettingsToggles()) {
      if (addFlagResult) {
        obj = { entryPoint: require(7583) /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.AGE_RESTRICTED_DM_COMMANDS_SETTINGS };
        const result = importDefault(7581).showAgeVerificationGetStartedModal(obj);
        const obj2 = importDefault(7581);
      }
    }
    const ViewNsfwCommands = require(3803) /* explicitContentFromProto */.ViewNsfwCommands;
    ViewNsfwCommands.updateSetting(addFlagResult);
  },
  usePredicate() {
    let shouldAgeVerifyForSettingsToggles = require(4345) /* shouldAgeVerifyForAgeGate */.useShouldAgeVerifyForSettingsToggles();
    const obj = require(4345) /* shouldAgeVerifyForAgeGate */;
    const nSFWAllowed = require(8014) /* useNSFWAllowed */.useNSFWAllowed();
    const obj2 = require(8014) /* useNSFWAllowed */;
    const tmp3 = null == nSFWAllowed || nSFWAllowed;
    if (shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = !obj3.useIsVerifiedTeen();
    }
    if (!shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = tmp3;
    }
    if (shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = require(477) /* set */.isAndroid();
      const obj4 = require(477) /* set */;
    }
    return shouldAgeVerifyForSettingsToggles;
  }
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.VGWIAo);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["J4zza/"]);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useViewNsfwDmCommandsSettingValue() {
    return require(8013) /* resolveNsfwTogglesWithDefaults */.useViewNsfwCommandsOrDefault();
  },
  onValueChange: function handleValueChange(addFlagResult) {
    let obj = require(4345) /* shouldAgeVerifyForAgeGate */;
    if (obj.shouldAgeVerifyForSettingsToggles()) {
      if (addFlagResult) {
        obj = { entryPoint: require(7583) /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.AGE_RESTRICTED_DM_COMMANDS_SETTINGS };
        const result = importDefault(7581).showAgeVerificationGetStartedModal(obj);
        const obj2 = importDefault(7581);
      }
    }
    const ViewNsfwCommands = require(3803) /* explicitContentFromProto */.ViewNsfwCommands;
    ViewNsfwCommands.updateSetting(addFlagResult);
  },
  usePredicate() {
    let shouldAgeVerifyForSettingsToggles = require(4345) /* shouldAgeVerifyForAgeGate */.useShouldAgeVerifyForSettingsToggles();
    const obj = require(4345) /* shouldAgeVerifyForAgeGate */;
    const nSFWAllowed = require(8014) /* useNSFWAllowed */.useNSFWAllowed();
    const obj2 = require(8014) /* useNSFWAllowed */;
    const tmp3 = null == nSFWAllowed || nSFWAllowed;
    if (shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = !obj3.useIsVerifiedTeen();
    }
    if (!shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = tmp3;
    }
    if (shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = require(477) /* set */.isAndroid();
      const obj4 = require(477) /* set */;
    }
    return shouldAgeVerifyForSettingsToggles;
  }
};
let result = require("shouldAgeVerifyForAgeGate").fileFinishedImporting("modules/user_settings/defs/native/AndroidViewNsfwDmCommandsSetting.tsx");

export default toggle;
export const AndroidViewNsfwDmCommandsSettingV2 = toggle;
