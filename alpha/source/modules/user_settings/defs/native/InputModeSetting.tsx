// Module ID: 16530
// Function ID: 16531
// Name: InputModeSetting
// Dependencies: [2131, 8592, 5539, 504, 1112, 11817, 10848, 2]

// Module 16530 (InputModeSetting)
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1112 */;
import Constants from "Constants" /* 5539 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import UserSettingsVoiceInputOptions from "UserSettingsVoiceInputOptions" /* 10848 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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
