// Module ID: 16727
// Function ID: 16728
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [16716, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 16727 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 16716 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
