// Module ID: 14765
// Function ID: 14766
// Name: VoiceSetting
// Dependencies: [1992, 1074, 504, 1115, 10993, 9454, 14766, 2]

// Module 14765 (VoiceSetting)
import util from "util" /* 1115 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;

require = fn;
const Constants = fn(1074);
({ InputModes: c3, UserSettingsSections } = Constants);
const SettingBuilders = fn(10993);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.B1fFpf);
  },
  parent: null,
  IconComponent: fn(9454).MicrophoneIcon,
  useTrailing: function useVoiceSettingTrailing() {
    const items = [MediaEngineStore];
    if (obj.useStateFromStores(items, () => mode.getMode()) === constants.PUSH_TO_TALK) {
      const intl2 = tmp(1115).intl;
      let stringResult = intl2.string(tmp(1115).t.Q8gkVL);
    } else {
      const intl = tmp(1115).intl;
      stringResult = intl.string(tmp(1115).t.cHCEOJ);
    }
    return stringResult;
  },
  screen: {
    route: UserSettingsSections.VOICE,
    getComponent() {
      return require("SettingsVoiceScreen").default;
    }
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/VoiceSetting.tsx");

export default route;
