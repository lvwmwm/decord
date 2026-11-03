// Module ID: 12554
// Function ID: 12555
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [4966, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 12554 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 4966 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
}
