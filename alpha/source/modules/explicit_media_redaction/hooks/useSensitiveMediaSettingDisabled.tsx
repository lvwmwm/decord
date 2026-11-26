// Module ID: 16335
// Function ID: 16336
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [16323, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 16335 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 16323 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
