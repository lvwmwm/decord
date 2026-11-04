// Module ID: 16967
// Function ID: 16968
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [16956, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 16967 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 16956 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
