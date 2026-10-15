// Module ID: 15761
// Function ID: 15762
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [558, 15750, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 15761 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 15750 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
};
