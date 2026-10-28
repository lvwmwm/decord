// Module ID: 15386
// Function ID: 15387
// Name: ActivateDeviceUtils
// Dependencies: [1084, 13759, 2]
// Exports: clientIdToActivateDevicePlatform

// Module 15386 (ActivateDeviceUtils)
import Constants from "Constants" /* 1084 */;
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 13759 */;
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
