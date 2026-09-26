// Module ID: 14365
// Function ID: 14366
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14354, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14365 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 14354 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
};
