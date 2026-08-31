// Module ID: 14396
// Function ID: 14397
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14397, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14396 (useSensitiveMediaSettingDisabled)
import set from "set" /* 2 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14397 */;

const result = set.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlledExplicitContentSettings.useIsParentallyControlled();
};
