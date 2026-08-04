// Module ID: 8089
// Function ID: 8090
// Name: navigateToNitroManagement
// Dependencies: [676, 5925, 2]
// Exports: navigateToNitroManagement

// Module 8089 (navigateToNitroManagement)
import { UserSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = require(5925) /* openUserSettings */;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};
