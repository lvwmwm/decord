// Module ID: 11445
// Function ID: 11446
// Name: MobileEmojiSuggestionsExperiment
// Dependencies: [1435, 2]
// Exports: getIsMobileEmojiSuggestionsConfig, useMobileEmojiSuggestionsConfig

// Module 11445 (MobileEmojiSuggestionsExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-07-mobile-emoji-suggestions", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true, style: "large" }, 2: { enabled: true, style: "small" } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/chat_input/experiments/MobileEmojiSuggestionsExperiment.tsx");

export const useMobileEmojiSuggestionsConfig = function useMobileEmojiSuggestionsConfig(location) {
  const obj = { location: location.location };
  return closure_0.useConfig(obj);
};
export const getIsMobileEmojiSuggestionsConfig = function getIsMobileEmojiSuggestionsConfig(location) {
  const obj = { location: location.location };
  return closure_0.getConfig(obj);
};
