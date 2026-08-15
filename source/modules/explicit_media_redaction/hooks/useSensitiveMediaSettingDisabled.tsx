// Module ID: 14180
// Function ID: 14181
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14181, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14180 (useSensitiveMediaSettingDisabled)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(14181) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};
