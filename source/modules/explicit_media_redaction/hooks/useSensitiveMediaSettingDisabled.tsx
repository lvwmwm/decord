// Module ID: 13726
// Function ID: 105276
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [13727, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 13726 (useSensitiveMediaSettingDisabled)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(13727) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};
