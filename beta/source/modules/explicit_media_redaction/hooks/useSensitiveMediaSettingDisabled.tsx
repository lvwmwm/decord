// Module ID: 17358
// Function ID: 17359
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [17346, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 17358 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 17346 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
