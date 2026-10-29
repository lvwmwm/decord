// Module ID: 13535
// Function ID: 13536
// Name: CustomTypingIndicatorAnalytics
// Dependencies: [1397, 2]
// Exports: getTypingIndicatorStyleAnalytics

// Module 13535 (CustomTypingIndicatorAnalytics)
import user from "user" /* 1397 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorAnalytics.tsx");

export function getTypingIndicatorStyleAnalytics(config) {
  let emojis;
  let emojis1;
  const obj = { emoji_names: emojis.map((name) => name.name), animation_name: user.TypingIndicatorAnimation[config.animation], typing_suggestion: user.TypingSuggestion[config.typingSuggestion], custom_emoji_count: emojis1.filter((id) => null != id.id).length };
  emojis = config.emojis;
  emojis1 = config.emojis;
  return obj;
}
