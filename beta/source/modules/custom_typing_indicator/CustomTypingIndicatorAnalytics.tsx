// Module ID: 12837
// Function ID: 12838
// Name: CustomTypingIndicatorAnalytics
// Dependencies: [1399, 2]
// Exports: getTypingIndicatorStyleAnalytics

// Module 12837 (CustomTypingIndicatorAnalytics)
import user from "user" /* 1399 */;
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
