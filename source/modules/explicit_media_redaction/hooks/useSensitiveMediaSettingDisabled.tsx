// Module ID: 14068
// Function ID: 14069
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14069, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14068 (useSensitiveMediaSettingDisabled)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(14069) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};
