// Module ID: 11918
// Function ID: 11919
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [558, 2044, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11918 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 2044 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
};
