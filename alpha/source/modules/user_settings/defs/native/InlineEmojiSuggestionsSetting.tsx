// Module ID: 15571
// Function ID: 15572
// Name: InlineEmojiSuggestionsSetting
// Dependencies: [7966, 11262, 1126, 2040, 11653, 2]

// Module 15571 (InlineEmojiSuggestionsSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2040 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import MobileEmojiSuggestionsExperiment from "MobileEmojiSuggestionsExperiment" /* 11653 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["0sh8CQ"]);
  },
  parent: MobileUserSettings.CHAT,
  useValue: UserSettings.InlineEmojiSuggestionsEnabled.useSetting,
  onValueChange: UserSettings.InlineEmojiSuggestionsEnabled.updateSetting,
  usePredicate() {
    const obj = MobileEmojiSuggestionsExperiment;
    return obj.useMobileEmojiSuggestionsConfig({ location: "InlineEmojiSuggestionsSetting" }).enabled;
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InlineEmojiSuggestionsSetting.tsx");

export default toggle;
