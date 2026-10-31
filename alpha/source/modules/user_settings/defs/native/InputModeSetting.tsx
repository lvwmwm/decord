// Module ID: 17226
// Function ID: 17227
// Name: InputModeSetting
// Dependencies: [2006, 8432, 5768, 504, 1113, 11539, 11945, 2]

// Module 17226 (InputModeSetting)
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1113 */;
import Constants from "Constants" /* 5768 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import UserSettingsVoiceInputOptions from "UserSettingsVoiceInputOptions" /* 11945 */;
import MediaEngineStore from "MediaEngineStore" /* 2006 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
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
