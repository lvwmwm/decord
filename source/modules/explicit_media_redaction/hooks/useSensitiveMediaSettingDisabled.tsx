// Module ID: 13974
// Function ID: 13975
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [13975, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 13974 (useSensitiveMediaSettingDisabled)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(13975) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};
