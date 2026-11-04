// Module ID: 8887
// Function ID: 8888
// Name: EditCollectiblesActionCreators
// Dependencies: [1072, 7703, 2]
// Exports: navigateToNitroManagement

// Module 8887 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1072 */;
import openUserSettings from "openUserSettings" /* 7703 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export function navigateToNitroManagement() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj2);
}
