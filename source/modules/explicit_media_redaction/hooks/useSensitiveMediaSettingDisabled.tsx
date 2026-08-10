// Module ID: 14070
// Function ID: 14071
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14071, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14070 (useSensitiveMediaSettingDisabled)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(14071) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};
