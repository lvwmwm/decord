// Module ID: 17050
// Function ID: 17051
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [17038, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 17050 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 17038 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
