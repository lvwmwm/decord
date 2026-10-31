// Module ID: 16719
// Function ID: 16720
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [16708, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 16719 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 16708 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
