// Module ID: 16058
// Function ID: 16059
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [558, 16047, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 16058 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 16047 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
};
