// Module ID: 8738
// Function ID: 8739
// Name: EditCollectiblesActionCreators
// Dependencies: [1072, 7557, 2]
// Exports: navigateToNitroManagement

// Module 8738 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1072 */;
import openUserSettings from "openUserSettings" /* 7557 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export function navigateToNitroManagement() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj2);
}
