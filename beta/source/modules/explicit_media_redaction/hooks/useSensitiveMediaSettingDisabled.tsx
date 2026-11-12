// Module ID: 17081
// Function ID: 17082
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [17069, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 17081 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 17069 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
