// Module ID: 13292
// Function ID: 13293
// Name: clientIdToActivateDevicePlatform
// Dependencies: [676, 10505, 2]
// Exports: clientIdToActivateDevicePlatform

// Module 13292 (clientIdToActivateDevicePlatform)
import { PlatformTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/activate_device/ActivateDeviceUtils.tsx");

export const clientIdToActivateDevicePlatform = function clientIdToActivateDevicePlatform(clientId) {
  if (clientId === require(10505) /* set */.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID) {
    let PLAYSTATION = PlatformTypes.PLAYSTATION;
  } else {
    PLAYSTATION = null;
    if (clientId === require(10505) /* set */.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID) {
      PLAYSTATION = PlatformTypes.PLAYSTATION_STAGING;
    }
  }
  return PLAYSTATION;
};
