// Module ID: 16284
// Function ID: 16285
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [16272, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 16284 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 16272 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
