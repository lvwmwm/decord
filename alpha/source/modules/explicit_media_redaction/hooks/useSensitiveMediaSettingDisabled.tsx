// Module ID: 15174
// Function ID: 15175
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [15163, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 15174 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 15163 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
};
