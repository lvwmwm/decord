// Module ID: 14078
// Function ID: 14079
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14079, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14078 (useSensitiveMediaSettingDisabled)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(14079) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};
