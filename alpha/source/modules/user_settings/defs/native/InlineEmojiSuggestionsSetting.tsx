// Module ID: 17099
// Function ID: 17100
// Name: InlineEmojiSuggestionsSetting
// Dependencies: [8365, 1084, 1264, 4832, 11248, 1125, 13295, 2]

// Module 17099 (InlineEmojiSuggestionsSetting)
import intl2 from "intl" /* 1125 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import UserSettings from "UserSettings" /* 4832 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import MobileEmojiSuggestionsExperiment from "MobileEmojiSuggestionsExperiment" /* 13295 */;
import Constants from "Constants" /* 1084 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ AnalyticEvents: c3, AnalyticsSections: closure_4 } = Constants);
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["0sh8CQ"]);
  },
  parent: MobileUserSettings.CHAT,
  useValue: UserSettings.InlineEmojiSuggestionsEnabled.useSetting,
  onValueChange: function onInlineEmojiSuggestionsValueChange(enabled) {
    let obj3;
    const obj2 = { enabled, location: obj3 };
    obj3 = { section: constants2.SETTINGS_TEXT_AND_IMAGES };
    const obj = AnalyticsUtilsDefault;
    obj.track(constants.INLINE_EMOJI_SUGGESTIONS_TOGGLED, obj2);
    const InlineEmojiSuggestionsEnabled = UserSettings.InlineEmojiSuggestionsEnabled;
    InlineEmojiSuggestionsEnabled.updateSetting(enabled);
  },
  usePredicate() {
    const obj = MobileEmojiSuggestionsExperiment;
    return obj.useMobileEmojiSuggestionsConfig({ location: "InlineEmojiSuggestionsSetting" }).enabled;
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InlineEmojiSuggestionsSetting.tsx");

export default toggle;
