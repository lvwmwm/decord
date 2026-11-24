// Module ID: 16163
// Function ID: 16164
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [16151, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 16163 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 16151 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
