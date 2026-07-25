// Module ID: 13788
// Function ID: 105727
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [13789, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 13788 (useSensitiveMediaSettingDisabled)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(13789) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};
