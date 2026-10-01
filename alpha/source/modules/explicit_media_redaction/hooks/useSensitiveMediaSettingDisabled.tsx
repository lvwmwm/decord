// Module ID: 14576
// Function ID: 14577
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14565, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14576 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 14565 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
};
