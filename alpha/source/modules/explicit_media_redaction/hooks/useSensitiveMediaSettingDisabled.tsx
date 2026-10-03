// Module ID: 14632
// Function ID: 14633
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [558, 14621, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14632 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 14621 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = () => {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
};
