// Module ID: 8279
// Function ID: 8280
// Name: navigateToNitroManagement
// Dependencies: [676, 6016, 2]
// Exports: navigateToNitroManagement

// Module 8279 (navigateToNitroManagement)
import { UserSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = require(6016) /* openUserSettings */;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};
