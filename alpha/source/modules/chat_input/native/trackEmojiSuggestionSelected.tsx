// Module ID: 9905
// Function ID: 9906
// Name: trackEmojiSuggestionSelected
// Dependencies: [1084, 5712, 2]
// Exports: default

// Module 9905 (trackEmojiSuggestionSelected)
import Constants from "Constants" /* 1084 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5712 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/chat_input/native/trackEmojiSuggestionSelected.tsx");

export default function trackEmojiSuggestionSelected(arg0) {
  let displayedSuggestions;
  let emoji;
  let name;
  ({ emoji, displayedSuggestions } = arg0);
  const obj = { expression_id: emoji.id, expression_name: name, expression_guild_id: emoji.guildId, is_custom: null != emoji.id, is_animated: emoji.animated, emoji_position: displayedSuggestions.indexOf(emoji) };
  name = emoji.uniqueName;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const EMOJI_SUGGESTION_SELECTED = AnalyticEvents.EMOJI_SUGGESTION_SELECTED;
  AppAnalyticsUtilsDefault;
  if (name == null) {
    name = emoji.name;
  }
  trackWithMetadata(EMOJI_SUGGESTION_SELECTED, obj);
};
