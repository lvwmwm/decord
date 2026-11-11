// Module ID: 17240
// Function ID: 17241
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [17228, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 17240 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 17228 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
