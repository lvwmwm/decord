// Module ID: 13805
// Function ID: 105848
// Name: toggle
// Dependencies: [7697, 5678, 4346, 5679, 4348, 477, 6690, 6692, 3804, 10059, 1212, 2]

// Module 13805 (toggle)
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
    return require(5678) /* resolveNsfwTogglesWithDefaults */.useViewNsfwCommandsOrDefault();
  },
  onValueChange: function handleValueChange(addFlagResult) {
    let obj = require(4346) /* shouldAgeVerifyForAgeGate */;
    if (obj.shouldAgeVerifyForSettingsToggles()) {
      if (addFlagResult) {
        obj = { entryPoint: require(6692) /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.AGE_RESTRICTED_DM_COMMANDS_SETTINGS };
        const result = importDefault(6690).showAgeVerificationGetStartedModal(obj);
        const obj2 = importDefault(6690);
      }
    }
    const ViewNsfwCommands = require(3804) /* explicitContentFromProto */.ViewNsfwCommands;
    ViewNsfwCommands.updateSetting(addFlagResult);
  },
  usePredicate() {
    let shouldAgeVerifyForSettingsToggles = require(4346) /* shouldAgeVerifyForAgeGate */.useShouldAgeVerifyForSettingsToggles();
    const obj = require(4346) /* shouldAgeVerifyForAgeGate */;
    const nSFWAllowed = require(5679) /* useNSFWAllowed */.useNSFWAllowed();
    const obj2 = require(5679) /* useNSFWAllowed */;
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
    return require(5678) /* resolveNsfwTogglesWithDefaults */.useViewNsfwCommandsOrDefault();
  },
  onValueChange: function handleValueChange(addFlagResult) {
    let obj = require(4346) /* shouldAgeVerifyForAgeGate */;
    if (obj.shouldAgeVerifyForSettingsToggles()) {
      if (addFlagResult) {
        obj = { entryPoint: require(6692) /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.AGE_RESTRICTED_DM_COMMANDS_SETTINGS };
        const result = importDefault(6690).showAgeVerificationGetStartedModal(obj);
        const obj2 = importDefault(6690);
      }
    }
    const ViewNsfwCommands = require(3804) /* explicitContentFromProto */.ViewNsfwCommands;
    ViewNsfwCommands.updateSetting(addFlagResult);
  },
  usePredicate() {
    let shouldAgeVerifyForSettingsToggles = require(4346) /* shouldAgeVerifyForAgeGate */.useShouldAgeVerifyForSettingsToggles();
    const obj = require(4346) /* shouldAgeVerifyForAgeGate */;
    const nSFWAllowed = require(5679) /* useNSFWAllowed */.useNSFWAllowed();
    const obj2 = require(5679) /* useNSFWAllowed */;
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
