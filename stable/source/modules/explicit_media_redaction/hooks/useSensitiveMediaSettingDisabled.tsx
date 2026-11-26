// Module ID: 17360
// Function ID: 17361
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [17348, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 17360 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 17348 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
