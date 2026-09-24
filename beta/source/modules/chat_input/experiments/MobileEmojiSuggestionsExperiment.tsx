// Module ID: 12129
// Function ID: 12130
// Name: MobileEmojiSuggestionsExperiment
// Dependencies: [1438, 558, 568, 2]
// Exports: getIsMobileEmojiSuggestionsConfig

// Module 12129 (MobileEmojiSuggestionsExperiment)
import c from "c" /* 568 */;
import ApexExperiment from "ApexExperiment" /* 1438 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-07-mobile-emoji-suggestions", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true, style: "large" }, 2: { enabled: true, style: "small" } } });
const result = size.fileFinishedImporting("modules/chat_input/experiments/MobileEmojiSuggestionsExperiment.tsx");

export const useMobileEmojiSuggestionsConfig = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(2);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2);
}) : ((location) => closure_2.useConfig({ location: location.location }));
export const getIsMobileEmojiSuggestionsConfig = function getIsMobileEmojiSuggestionsConfig(location) {
  return closure_2.getConfig({ location: location.location });
};
