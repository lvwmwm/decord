// Module ID: 8349
// Function ID: 8350
// Name: navigateToNitroManagement
// Dependencies: [676, 6080, 2]
// Exports: navigateToNitroManagement

// Module 8349 (navigateToNitroManagement)
import { UserSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = require(6080) /* openUserSettings */;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};
