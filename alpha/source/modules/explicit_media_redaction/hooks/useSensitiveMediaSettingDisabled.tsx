// Module ID: 15165
// Function ID: 15166
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [15154, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 15165 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 15154 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
};
