// Module ID: 13947
// Function ID: 13948
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [13948, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 13947 (useSensitiveMediaSettingDisabled)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(13948) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};
