// Module ID: 12643
// Function ID: 12644
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [4968, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 12643 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 4968 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
}
