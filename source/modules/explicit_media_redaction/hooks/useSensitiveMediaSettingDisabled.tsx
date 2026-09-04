// Module ID: 14748
// Function ID: 14749
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14749, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14748 (useSensitiveMediaSettingDisabled)
import set from "set" /* 2 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14749 */;

const result = set.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlledExplicitContentSettings.useIsParentallyControlled();
};
