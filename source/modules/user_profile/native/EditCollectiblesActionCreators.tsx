// Module ID: 7895
// Function ID: 62935
// Name: navigateToNitroManagement
// Dependencies: [653, 6554, 2]
// Exports: navigateToNitroManagement

// Module 7895 (navigateToNitroManagement)
import { UserSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = require(6554) /* openUserSettings */;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};
