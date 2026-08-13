// Module ID: 14135
// Function ID: 14136
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14136, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14135 (useSensitiveMediaSettingDisabled)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(14136) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};
