// Module ID: 7947
// Function ID: 62958
// Name: navigateToNitroManagement
// Dependencies: [653, 5796, 2]
// Exports: navigateToNitroManagement

// Module 7947 (navigateToNitroManagement)
import { UserSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = require(5796) /* openUserSettings */;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};
