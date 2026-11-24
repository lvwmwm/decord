// Module ID: 16877
// Function ID: 16878
// Name: InlineEmojiSuggestionsSetting
// Dependencies: [8712, 1071, 1255, 4738, 11937, 1112, 12826, 2]

// Module 16877 (InlineEmojiSuggestionsSetting)
import intl2 from "intl" /* 1112 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import UserSettings from "UserSettings" /* 4738 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import MobileEmojiSuggestionsExperiment from "MobileEmojiSuggestionsExperiment" /* 12826 */;
import Constants from "Constants" /* 1071 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
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
