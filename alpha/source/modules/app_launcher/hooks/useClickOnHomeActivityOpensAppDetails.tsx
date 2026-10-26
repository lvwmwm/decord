// Module ID: 12080
// Function ID: 12081
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [558, 4799, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 12080 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 4799 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
};
