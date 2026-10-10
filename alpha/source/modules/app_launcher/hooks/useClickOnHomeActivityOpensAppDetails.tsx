// Module ID: 11775
// Function ID: 11776
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [558, 2041, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11775 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 2041 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
};
