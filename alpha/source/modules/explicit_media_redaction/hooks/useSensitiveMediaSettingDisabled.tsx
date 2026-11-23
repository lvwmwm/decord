// Module ID: 16130
// Function ID: 16131
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [16118, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 16130 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 16118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
