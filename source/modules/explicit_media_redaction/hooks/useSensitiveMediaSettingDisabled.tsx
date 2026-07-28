// Module ID: 13833
// Function ID: 105905
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [13834, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 13833 (useSensitiveMediaSettingDisabled)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(13834) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};
