// Module ID: 11972
// Function ID: 11973
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [558, 4800, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11972 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 4800 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
};
