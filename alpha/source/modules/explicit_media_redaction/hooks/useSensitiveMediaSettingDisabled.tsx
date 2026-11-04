// Module ID: 16979
// Function ID: 16980
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [16968, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 16979 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 16968 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
