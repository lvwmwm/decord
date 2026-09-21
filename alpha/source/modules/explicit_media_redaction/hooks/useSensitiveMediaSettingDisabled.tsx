// Module ID: 15101
// Function ID: 15102
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [15102, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 15101 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 15102 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
};
