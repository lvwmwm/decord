// Module ID: 17084
// Function ID: 17085
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [17072, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 17084 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 17072 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
