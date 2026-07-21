// Module ID: 7851
// Function ID: 62579
// Name: navigateToNitroManagement
// Dependencies: []
// Exports: navigateToNitroManagement

// Module 7851 (navigateToNitroManagement)
const UserSettingsSections = require(dependencyMap[0]).UserSettingsSections;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = require(dependencyMap[1]);
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};
