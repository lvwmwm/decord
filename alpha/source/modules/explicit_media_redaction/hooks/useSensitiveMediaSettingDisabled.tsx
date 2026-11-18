// Module ID: 16052
// Function ID: 16053
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [16040, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 16052 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 16040 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
