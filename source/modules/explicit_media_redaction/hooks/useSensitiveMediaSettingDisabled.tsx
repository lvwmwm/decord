// Module ID: 13849
// Function ID: 13850
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [13850, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 13849 (useSensitiveMediaSettingDisabled)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(13850) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};
