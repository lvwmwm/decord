// Module ID: 17082
// Function ID: 17083
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [17070, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 17082 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 17070 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
