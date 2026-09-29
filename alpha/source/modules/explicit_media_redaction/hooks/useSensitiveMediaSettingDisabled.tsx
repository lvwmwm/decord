// Module ID: 14539
// Function ID: 14540
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14528, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14539 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 14528 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
};
