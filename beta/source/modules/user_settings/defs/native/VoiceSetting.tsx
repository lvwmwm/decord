// Module ID: 14791
// Function ID: 14792
// Name: VoiceSetting
// Dependencies: [1993, 1074, 504, 1115, 11006, 9465, 14792, 2]

// Module 14791 (VoiceSetting)
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1115 */;
import MicrophoneIcon from "MicrophoneIcon" /* 9465 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import Constants from "Constants" /* 1074 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
      const intl2 = tmp(1115).intl;
      stringResult = intl2.string(tmp(1115).t.Q8gkVL);
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
    const intl = intl3.intl;
    const items = [intl.string(intl3.t.nuFtHH)];
    return items;
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/VoiceSetting.tsx");

export default route;
