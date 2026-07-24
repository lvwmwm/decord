// Module ID: 13777
// Function ID: 105600
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [13778, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 13777 (useSensitiveMediaSettingDisabled)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(13778) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};
