// Module ID: 12936
// Function ID: 100371
// Name: clientIdToActivateDevicePlatform
// Dependencies: [653, 9018, 2]
// Exports: clientIdToActivateDevicePlatform

// Module 12936 (clientIdToActivateDevicePlatform)
import { PlatformTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/activate_device/ActivateDeviceUtils.tsx");

export const clientIdToActivateDevicePlatform = function clientIdToActivateDevicePlatform(clientId) {
  if (clientId === require(9018) /* set */.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID) {
    let PLAYSTATION = PlatformTypes.PLAYSTATION;
  } else {
    PLAYSTATION = null;
    if (clientId === require(9018) /* set */.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID) {
      PLAYSTATION = PlatformTypes.PLAYSTATION_STAGING;
    }
  }
  return PLAYSTATION;
};
