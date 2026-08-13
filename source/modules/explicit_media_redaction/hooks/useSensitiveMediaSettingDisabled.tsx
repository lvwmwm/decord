// Module ID: 14144
// Function ID: 14145
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14145, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14144 (useSensitiveMediaSettingDisabled)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(14145) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};
