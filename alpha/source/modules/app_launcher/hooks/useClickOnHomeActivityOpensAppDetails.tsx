// Module ID: 12240
// Function ID: 12241
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [4834, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 12240 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 4834 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
}
