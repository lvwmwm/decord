// Module ID: 17380
// Function ID: 17381
// Name: VoiceSetting
// Dependencies: [2135, 1072, 504, 1113, 11677, 12109, 17381, 2]

// Module 17380 (VoiceSetting)
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1113 */;
import MicrophoneIcon from "MicrophoneIcon" /* 12109 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;
import Constants from "Constants" /* 1072 */;
import SettingBuilders from "SettingBuilders" /* 11677 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let UserSettingsSections;
let c3;
({ InputModes: c3, UserSettingsSections } = Constants);
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t.B1fFpf);
  },
  parent: null,
  IconComponent: MicrophoneIcon.MicrophoneIcon,
  useTrailing: function useVoiceSettingTrailing() {
    let mode;
    let stringResult;
    const items = [MediaEngineStore];
    const obj = get_initialized;
    if (obj.useStateFromStores(items, () => mode.getMode()) === constants.PUSH_TO_TALK) {
      const intl2 = tmp(1113).intl;
      stringResult = intl2.string(tmp(1113).t.Q8gkVL);
    } else {
      const intl = tmp(1113).intl;
      stringResult = intl.string(tmp(1113).t.cHCEOJ);
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
    const intl = intl3.intl;
    const items = [intl.string(intl3.t.nuFtHH)];
    return items;
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/VoiceSetting.tsx");

export default route;
