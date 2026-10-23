// Module ID: 13027
// Function ID: 13028
// Name: CustomTypingIndicatorAnalytics
// Dependencies: [1400, 2]
// Exports: getTypingIndicatorStyleAnalytics

// Module 13027 (CustomTypingIndicatorAnalytics)
import user from "user" /* 1400 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorAnalytics.tsx");

export const getTypingIndicatorStyleAnalytics = function getTypingIndicatorStyleAnalytics(config) {
  let emojis;
  let emojis1;
  const obj = { emoji_names: emojis.map((name) => name.name), animation_name: user.TypingIndicatorAnimation[config.animation], typing_suggestion: user.TypingSuggestion[config.typingSuggestion], custom_emoji_count: emojis1.filter((id) => null != id.id).length };
  emojis = config.emojis;
  emojis1 = config.emojis;
  return obj;
};
