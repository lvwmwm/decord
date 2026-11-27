// Module ID: 16866
// Function ID: 16867
// Name: InputModeSetting
// Dependencies: [2132, 9556, 5855, 504, 1112, 11970, 10395, 2]

// Module 16866 (InputModeSetting)
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1112 */;
import Constants from "Constants" /* 5855 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import UserSettingsVoiceInputOptions from "UserSettingsVoiceInputOptions" /* 10395 */;
import MediaEngineStore from "MediaEngineStore" /* 2132 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
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
      const intl2 = tmp(1112).intl;
      stringResult = intl2.string(tmp(1112).t.Q8gkVL);
    } else {
      const intl = tmp(1112).intl;
      stringResult = intl.string(tmp(1112).t.cHCEOJ);
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
