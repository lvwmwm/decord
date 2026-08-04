// Module ID: 13973
// Function ID: 13974
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [13974, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 13973 (useSensitiveMediaSettingDisabled)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(13974) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};
