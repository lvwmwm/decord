// Module ID: 13712
// Function ID: 13713
// Name: MobileEmojiSuggestionsExperiment
// Dependencies: [1447, 2]
// Exports: trackMobileEmojiSuggestionsExposure, useMobileEmojiSuggestionsConfig

// Module 13712 (MobileEmojiSuggestionsExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-07-mobile-emoji-suggestions", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true, style: "large", searchDebounceMs: 500 }, 2: { enabled: true, style: "small" }, 3: { enabled: true, style: "button" } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/chat_input/experiments/MobileEmojiSuggestionsExperiment.tsx");

export function useMobileEmojiSuggestionsConfig(location) {
  const obj = { location: location.location };
  return closure_0.useConfig(obj);
}
export function trackMobileEmojiSuggestionsExposure(location) {
  const obj = { location: location.location };
  const config = closure_0.getConfig(obj);
}
