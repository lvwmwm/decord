// Module ID: 15597
// Function ID: 15598
// Name: InputModeSetting
// Dependencies: [1992, 8323, 4854, 504, 1115, 11811, 10330, 2]

// Module 15597 (InputModeSetting)
import util from "util" /* 1115 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;

require = fn;
const InputModes = fn(4854).InputModes;
const SettingBuilders = fn(11811);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["pS+K2L"]);
  },
  parent: fn(8323).MobileUserSettings.VOICE,
  useTrailing: function useInputModeSettingTrailing() {
    const items = [MediaEngineStore];
    if (obj.useStateFromStores(items, () => mode.getMode()) === InputModes.PUSH_TO_TALK) {
      const intl2 = tmp(1115).intl;
      let stringResult = intl2.string(tmp(1115).t.Q8gkVL);
    } else {
      const intl = tmp(1115).intl;
      stringResult = intl.string(tmp(1115).t.cHCEOJ);
    }
    return stringResult;
  },
  onPress: fn(10330).handleInputModePress,
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InputModeSetting.tsx");

export default pressable;
