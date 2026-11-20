// Module ID: 16007
// Function ID: 16008
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [15995, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 16007 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 15995 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
