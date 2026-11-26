// Module ID: 16142
// Function ID: 16143
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [16130, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 16142 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 16130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
