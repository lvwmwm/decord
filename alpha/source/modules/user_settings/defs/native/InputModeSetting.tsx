// Module ID: 16706
// Function ID: 16707
// Name: InputModeSetting
// Dependencies: [2133, 8593, 5537, 504, 1113, 11875, 10906, 2]

// Module 16706 (InputModeSetting)
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1113 */;
import Constants from "Constants" /* 5537 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import UserSettingsVoiceInputOptions from "UserSettingsVoiceInputOptions" /* 10906 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
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
