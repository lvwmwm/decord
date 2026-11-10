// Module ID: 17077
// Function ID: 17078
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [17065, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 17077 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 17065 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
