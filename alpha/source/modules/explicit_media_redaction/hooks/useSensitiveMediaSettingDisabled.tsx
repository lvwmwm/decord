// Module ID: 17039
// Function ID: 17040
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [17027, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 17039 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 17027 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
