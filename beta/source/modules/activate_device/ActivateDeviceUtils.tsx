// Module ID: 13421
// Function ID: 13422
// Name: ActivateDeviceUtils
// Dependencies: [1074, 8547, 2]
// Exports: clientIdToActivateDevicePlatform

// Module 13421 (ActivateDeviceUtils)
import Constants from "Constants" /* 1074 */;
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 8547 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/activate_device/ActivateDeviceUtils.tsx");

export const clientIdToActivateDevicePlatform = function clientIdToActivateDevicePlatform(clientId) {
  let PLAYSTATION;
  if (clientId === ConsoleOAuthApplications.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID) {
    PLAYSTATION = PlatformTypes.PLAYSTATION;
  } else {
    PLAYSTATION = null;
    if (clientId === ConsoleOAuthApplications.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID) {
      PLAYSTATION = PlatformTypes.PLAYSTATION_STAGING;
    }
  }
  return PLAYSTATION;
};
