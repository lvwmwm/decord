// Module ID: 13873
// Function ID: 13874
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [13874, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 13873 (useSensitiveMediaSettingDisabled)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(13874) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};
