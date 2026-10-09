// Module ID: 11596
// Function ID: 11597
// Name: CustomTypingIndicatorAnalytics
// Dependencies: [1398, 2]
// Exports: getTypingIndicatorStyleAnalytics

// Module 11596 (CustomTypingIndicatorAnalytics)
import user from "user" /* 1398 */;
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
