// Module ID: 16342
// Function ID: 16343
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [16330, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 16342 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 16330 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
