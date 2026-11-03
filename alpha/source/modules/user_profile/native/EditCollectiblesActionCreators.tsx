// Module ID: 8870
// Function ID: 8871
// Name: EditCollectiblesActionCreators
// Dependencies: [1072, 7687, 2]
// Exports: navigateToNitroManagement

// Module 8870 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1072 */;
import openUserSettings from "openUserSettings" /* 7687 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export function navigateToNitroManagement() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj2);
}
