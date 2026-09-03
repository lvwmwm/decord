// Module ID: 14667
// Function ID: 14668
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14668, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14667 (useSensitiveMediaSettingDisabled)
import set from "set" /* 2 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14668 */;

const result = set.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlledExplicitContentSettings.useIsParentallyControlled();
};
