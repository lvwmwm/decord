// Module ID: 13866
// Function ID: 13867
// Name: toggle
// Dependencies: [7753, 5706, 4403, 5707, 4405, 500, 6744, 6746, 3862, 10116, 1236, 2]

// Module 13866 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.VGWIAo);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["J4zza/"]);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useViewNsfwDmCommandsSettingValue() {
    return require(5706) /* resolveNsfwTogglesWithDefaults */.useViewNsfwCommandsOrDefault();
  },
  onValueChange: function handleValueChange(arg0) {
    let obj = require(4403) /* shouldShowAgeGateForVoiceChannel */;
    if (obj.shouldAgeVerifyForSettingsToggles()) {
      if (arg0) {
        obj = { entryPoint: null };
        obj[0] = tmp(6746).AgeVerificationModalEntryPoint.AGE_RESTRICTED_DM_COMMANDS_SETTINGS;
        const result = importDefault(6744).showAgeVerificationGetStartedModal(obj);
        const obj2 = importDefault(6744);
      }
    }
    const ViewNsfwCommands = tmp(3862).ViewNsfwCommands;
    ViewNsfwCommands.updateSetting(arg0);
  },
  usePredicate() {
    let shouldAgeVerifyForSettingsToggles = require(4403) /* shouldShowAgeGateForVoiceChannel */.useShouldAgeVerifyForSettingsToggles();
    const obj = require(4403) /* shouldShowAgeGateForVoiceChannel */;
    let flag = require(5707) /* useNSFWAllowed */.useNSFWAllowed();
    if (flag == null) {
      flag = true;
    }
    let tmpResult = tmp(4405);
    if (shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = !tmpResult.useIsVerifiedTeen();
    }
    if (!shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = flag;
    }
    if (shouldAgeVerifyForSettingsToggles) {
      tmpResult = tmp(500);
      shouldAgeVerifyForSettingsToggles = tmpResult.isAndroid();
    }
    return shouldAgeVerifyForSettingsToggles;
  }
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.VGWIAo);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["J4zza/"]);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useViewNsfwDmCommandsSettingValue() {
    return require(5706) /* resolveNsfwTogglesWithDefaults */.useViewNsfwCommandsOrDefault();
  },
  onValueChange: function handleValueChange(arg0) {
    let obj = require(4403) /* shouldShowAgeGateForVoiceChannel */;
    if (obj.shouldAgeVerifyForSettingsToggles()) {
      if (arg0) {
        obj = { entryPoint: null };
        obj[0] = tmp(6746).AgeVerificationModalEntryPoint.AGE_RESTRICTED_DM_COMMANDS_SETTINGS;
        const result = importDefault(6744).showAgeVerificationGetStartedModal(obj);
        const obj2 = importDefault(6744);
      }
    }
    const ViewNsfwCommands = tmp(3862).ViewNsfwCommands;
    ViewNsfwCommands.updateSetting(arg0);
  },
  usePredicate() {
    let shouldAgeVerifyForSettingsToggles = require(4403) /* shouldShowAgeGateForVoiceChannel */.useShouldAgeVerifyForSettingsToggles();
    const obj = require(4403) /* shouldShowAgeGateForVoiceChannel */;
    let flag = require(5707) /* useNSFWAllowed */.useNSFWAllowed();
    if (flag == null) {
      flag = true;
    }
    let tmpResult = tmp(4405);
    if (shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = !tmpResult.useIsVerifiedTeen();
    }
    if (!shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = flag;
    }
    if (shouldAgeVerifyForSettingsToggles) {
      tmpResult = tmp(500);
      shouldAgeVerifyForSettingsToggles = tmpResult.isAndroid();
    }
    return shouldAgeVerifyForSettingsToggles;
  }
};
let result = require("shouldShowAgeGateForVoiceChannel").fileFinishedImporting("modules/user_settings/defs/native/AndroidViewNsfwDmCommandsSetting.tsx");

export default toggle;
export const AndroidViewNsfwDmCommandsSettingV2 = toggle;
