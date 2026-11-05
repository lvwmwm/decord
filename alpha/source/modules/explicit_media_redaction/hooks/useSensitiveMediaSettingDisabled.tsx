// Module ID: 17003
// Function ID: 17004
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [16991, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 17003 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 16991 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
