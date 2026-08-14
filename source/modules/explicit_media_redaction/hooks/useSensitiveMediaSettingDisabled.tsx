// Module ID: 14148
// Function ID: 14149
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14149, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14148 (useSensitiveMediaSettingDisabled)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(14149) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};
