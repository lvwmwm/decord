// Module ID: 8061
// Function ID: 8062
// Name: navigateToNitroManagement
// Dependencies: [676, 5910, 2]
// Exports: navigateToNitroManagement

// Module 8061 (navigateToNitroManagement)
import { UserSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = require(5910) /* openUserSettings */;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};
