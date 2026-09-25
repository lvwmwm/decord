// Module ID: 14340
// Function ID: 14341
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14329, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14340 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 14329 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
};
