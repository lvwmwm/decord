// Module ID: 12770
// Function ID: 97892
// Name: clientIdToActivateDevicePlatform
// Dependencies: [0, 0, 0]
// Exports: clientIdToActivateDevicePlatform

// Module 12770 (clientIdToActivateDevicePlatform)
import { PlatformTypes } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/activate_device/ActivateDeviceUtils.tsx");

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
