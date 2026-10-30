// Module ID: 16677
// Function ID: 16678
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [16666, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 16677 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 16666 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
