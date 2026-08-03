// Module ID: 8077
// Function ID: 8078
// Name: navigateToNitroManagement
// Dependencies: [676, 5915, 2]
// Exports: navigateToNitroManagement

// Module 8077 (navigateToNitroManagement)
import { UserSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = require(5915) /* openUserSettings */;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};
