// Module ID: 13854
// Function ID: 13855
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [13855, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 13854 (useSensitiveMediaSettingDisabled)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(13855) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};
