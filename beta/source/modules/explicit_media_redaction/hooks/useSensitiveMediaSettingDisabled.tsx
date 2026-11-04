// Module ID: 16732
// Function ID: 16733
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [16721, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 16732 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 16721 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
