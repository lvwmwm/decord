// Module ID: 17235
// Function ID: 17236
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [17223, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 17235 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 17223 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
