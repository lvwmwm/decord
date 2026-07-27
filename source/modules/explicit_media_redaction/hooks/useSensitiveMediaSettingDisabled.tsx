// Module ID: 13789
// Function ID: 105732
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [13790, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 13789 (useSensitiveMediaSettingDisabled)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(13790) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};
