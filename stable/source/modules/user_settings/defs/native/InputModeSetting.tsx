// Module ID: 15332
// Function ID: 15333
// Name: InputModeSetting
// Dependencies: [1908, 8079, 4661, 504, 1114, 11605, 10112, 2]

// Module 15332 (InputModeSetting)
import util from "util" /* 1114 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

require = fn;
const InputModes = fn(4661).InputModes;
const SettingBuilders = fn(11605);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["pS+K2L"]);
  },
  parent: fn(8079).MobileUserSettings.VOICE,
  useTrailing: function useInputModeSettingTrailing() {
    const items = [MediaEngineStore];
    if (obj.useStateFromStores(items, () => mode.getMode()) === InputModes.PUSH_TO_TALK) {
      const intl2 = tmp(1114).intl;
      let stringResult = intl2.string(tmp(1114).t.Q8gkVL);
    } else {
      const intl = tmp(1114).intl;
      stringResult = intl.string(tmp(1114).t.cHCEOJ);
    }
    return stringResult;
  },
  onPress: fn(10112).handleInputModePress,
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InputModeSetting.tsx");

export default pressable;
