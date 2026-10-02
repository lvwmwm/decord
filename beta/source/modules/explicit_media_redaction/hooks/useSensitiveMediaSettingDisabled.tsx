// Module ID: 14352
// Function ID: 14353
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [558, 14341, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14352 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 14341 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = () => {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
};
