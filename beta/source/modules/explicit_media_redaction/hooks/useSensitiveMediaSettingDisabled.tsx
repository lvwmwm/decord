// Module ID: 15090
// Function ID: 15091
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [558, 15091, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 15090 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 15091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = () => useParentalControlSettings.useIsParentallyControlled();
