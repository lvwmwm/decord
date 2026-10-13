// Module ID: 15428
// Function ID: 15429
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [558, 15417, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 15428 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 15417 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
};
