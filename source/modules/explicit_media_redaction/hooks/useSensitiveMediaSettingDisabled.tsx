// Module ID: 14429
// Function ID: 14430
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14430, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14429 (useSensitiveMediaSettingDisabled)
import set from "set" /* 2 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14430 */;

const result = set.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlledExplicitContentSettings.useIsParentallyControlled();
};
