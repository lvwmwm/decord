// Module ID: 13984
// Function ID: 13985
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [13985, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 13984 (useSensitiveMediaSettingDisabled)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(13985) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};
