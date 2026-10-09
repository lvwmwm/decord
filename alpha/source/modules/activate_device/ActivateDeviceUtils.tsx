// Module ID: 14026
// Function ID: 14027
// Name: ActivateDeviceUtils
// Dependencies: [1085, 12294, 2]
// Exports: clientIdToActivateDevicePlatform

// Module 14026 (ActivateDeviceUtils)
import Constants from "Constants" /* 1085 */;
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 12294 */;
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
