// Module ID: 12754
// Function ID: 97814
// Name: clientIdToActivateDevicePlatform
// Dependencies: []
// Exports: clientIdToActivateDevicePlatform

// Module 12754 (clientIdToActivateDevicePlatform)
const PlatformTypes = require(dependencyMap[0]).PlatformTypes;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/activate_device/ActivateDeviceUtils.tsx");

export const clientIdToActivateDevicePlatform = function clientIdToActivateDevicePlatform(clientId) {
  if (clientId === require(dependencyMap[1]).ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID) {
    let PLAYSTATION = PlatformTypes.PLAYSTATION;
  } else {
    PLAYSTATION = null;
    if (clientId === require(dependencyMap[1]).ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID) {
      PLAYSTATION = PlatformTypes.PLAYSTATION_STAGING;
    }
  }
  return PLAYSTATION;
};
