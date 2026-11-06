// Module ID: 16991
// Function ID: 16992
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [16979, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 16991 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 16979 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
