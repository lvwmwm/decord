// Module ID: 16128
// Function ID: 16129
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [16116, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 16128 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 16116 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
