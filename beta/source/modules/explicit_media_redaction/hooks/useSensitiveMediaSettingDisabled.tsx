// Module ID: 16138
// Function ID: 16139
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [16126, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 16138 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 16126 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
