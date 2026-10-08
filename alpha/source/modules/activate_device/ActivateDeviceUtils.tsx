// Module ID: 13929
// Function ID: 13930
// Name: ActivateDeviceUtils
// Dependencies: [1085, 9156, 2]
// Exports: clientIdToActivateDevicePlatform

// Module 13929 (ActivateDeviceUtils)
import Constants from "Constants" /* 1085 */;
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 9156 */;
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
