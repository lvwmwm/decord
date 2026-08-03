// Module ID: 13940
// Function ID: 13941
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [13941, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 13940 (useSensitiveMediaSettingDisabled)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(13941) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};
