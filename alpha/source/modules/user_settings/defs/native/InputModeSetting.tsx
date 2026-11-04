// Module ID: 17485
// Function ID: 17486
// Name: InputModeSetting
// Dependencies: [2135, 8573, 5902, 504, 1113, 11729, 12143, 2]

// Module 17485 (InputModeSetting)
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1113 */;
import Constants from "Constants" /* 5902 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import UserSettingsVoiceInputOptions from "UserSettingsVoiceInputOptions" /* 12143 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
      const intl2 = tmp(1113).intl;
      stringResult = intl2.string(tmp(1113).t.Q8gkVL);
    } else {
      const intl = tmp(1113).intl;
      stringResult = intl.string(tmp(1113).t.cHCEOJ);
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
