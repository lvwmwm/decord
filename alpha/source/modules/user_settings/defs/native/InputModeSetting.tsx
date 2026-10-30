// Module ID: 17169
// Function ID: 17170
// Name: InputModeSetting
// Dependencies: [2007, 8424, 5763, 504, 1114, 11505, 11907, 2]

// Module 17169 (InputModeSetting)
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1114 */;
import Constants from "Constants" /* 5763 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import UserSettingsVoiceInputOptions from "UserSettingsVoiceInputOptions" /* 11907 */;
import MediaEngineStore from "MediaEngineStore" /* 2007 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const InputModes = Constants.InputModes;
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t["pS+K2L"]);
  },
  parent: MobileUserSettings.VOICE,
  useTrailing: function useInputModeSettingTrailing() {
    let mode;
    let stringResult;
    const items = [MediaEngineStore];
    const obj = get_initialized;
    if (obj.useStateFromStores(items, () => mode.getMode()) === InputModes.PUSH_TO_TALK) {
      const intl2 = tmp(1114).intl;
      stringResult = intl2.string(tmp(1114).t.Q8gkVL);
    } else {
      const intl = tmp(1114).intl;
      stringResult = intl.string(tmp(1114).t.cHCEOJ);
    }
    return stringResult;
  },
  onPress: UserSettingsVoiceInputOptions.handleInputModePress,
  useSearchTerms() {
    const intl = intl3.intl;
    const items = [intl.string(intl3.t.nuFtHH)];
    return items;
  }
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InputModeSetting.tsx");

export default pressable;
