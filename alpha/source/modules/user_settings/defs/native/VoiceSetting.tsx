// Module ID: 16864
// Function ID: 16865
// Name: VoiceSetting
// Dependencies: [2132, 1071, 504, 1112, 11970, 10505, 16865, 2]

// Module 16864 (VoiceSetting)
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1112 */;
import MicrophoneIcon from "MicrophoneIcon" /* 10505 */;
import MediaEngineStore from "MediaEngineStore" /* 2132 */;
import Constants from "Constants" /* 1071 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
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
      const intl2 = tmp(1112).intl;
      stringResult = intl2.string(tmp(1112).t.Q8gkVL);
    } else {
      const intl = tmp(1112).intl;
      stringResult = intl.string(tmp(1112).t.cHCEOJ);
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
