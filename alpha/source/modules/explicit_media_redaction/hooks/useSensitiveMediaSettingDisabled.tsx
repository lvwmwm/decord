// Module ID: 16875
// Function ID: 16876
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [16864, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 16875 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 16864 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
