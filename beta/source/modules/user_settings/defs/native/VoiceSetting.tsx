// Module ID: 15516
// Function ID: 15517
// Name: VoiceSetting
// Dependencies: [1992, 1074, 504, 1115, 11725, 10262, 15517, 2]

// Module 15516 (VoiceSetting)
import util from "util" /* 1115 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;

require = fn;
const Constants = fn(1074);
({ InputModes: c3, UserSettingsSections } = Constants);
const SettingBuilders = fn(11725);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.K3lovD);
  },
  parent: null,
  IconComponent: fn(10262).MicrophoneIcon,
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
