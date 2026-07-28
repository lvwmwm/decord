// Module ID: 7931
// Function ID: 63027
// Name: navigateToNitroManagement
// Dependencies: [653, 6590, 2]
// Exports: navigateToNitroManagement

// Module 7931 (navigateToNitroManagement)
import { UserSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = require(6590) /* openUserSettings */;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};
