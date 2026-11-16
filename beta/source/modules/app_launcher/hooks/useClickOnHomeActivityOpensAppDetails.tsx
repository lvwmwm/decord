// Module ID: 13420
// Function ID: 13421
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [5131, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 13420 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
}
