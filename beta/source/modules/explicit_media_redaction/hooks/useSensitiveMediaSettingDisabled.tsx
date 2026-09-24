// Module ID: 15105
// Function ID: 15106
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [558, 15094, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 15105 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 15094 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = () => useParentalControlSettings.useIsParentallyControlled();
