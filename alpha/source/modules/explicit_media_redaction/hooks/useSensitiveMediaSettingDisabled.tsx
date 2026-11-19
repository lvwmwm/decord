// Module ID: 16043
// Function ID: 16044
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [16031, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 16043 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 16031 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
