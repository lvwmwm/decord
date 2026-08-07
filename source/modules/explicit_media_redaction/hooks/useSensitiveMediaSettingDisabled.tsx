// Module ID: 13998
// Function ID: 13999
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [13999, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 13998 (useSensitiveMediaSettingDisabled)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(13999) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};
