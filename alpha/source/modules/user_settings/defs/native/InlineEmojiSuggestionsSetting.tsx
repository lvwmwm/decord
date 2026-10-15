// Module ID: 16417
// Function ID: 16418
// Name: InlineEmojiSuggestionsSetting
// Dependencies: [8210, 1085, 1265, 2041, 10991, 1126, 12712, 2]

// Module 16417 (InlineEmojiSuggestionsSetting)
import intl2 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import UserSettings from "UserSettings" /* 2041 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import MobileEmojiSuggestionsExperiment from "MobileEmojiSuggestionsExperiment" /* 12712 */;
import Constants from "Constants" /* 1085 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
