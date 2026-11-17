// Module ID: 17395
// Function ID: 17396
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [17383, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 17395 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 17383 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
