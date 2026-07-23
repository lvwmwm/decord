// Module ID: 12884
// Function ID: 100048
// Name: clientIdToActivateDevicePlatform
// Dependencies: [653, 8979, 2]
// Exports: clientIdToActivateDevicePlatform

// Module 12884 (clientIdToActivateDevicePlatform)
import { PlatformTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/activate_device/ActivateDeviceUtils.tsx");

export const clientIdToActivateDevicePlatform = function clientIdToActivateDevicePlatform(clientId) {
  if (clientId === require(8979) /* set */.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID) {
    let PLAYSTATION = PlatformTypes.PLAYSTATION;
  } else {
    PLAYSTATION = null;
    if (clientId === require(8979) /* set */.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID) {
      PLAYSTATION = PlatformTypes.PLAYSTATION_STAGING;
    }
  }
  return PLAYSTATION;
};
