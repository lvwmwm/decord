// Module ID: 15108
// Function ID: 15109
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [15109, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 15108 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 15109 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
};
