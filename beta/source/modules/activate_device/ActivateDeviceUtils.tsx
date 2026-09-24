// Module ID: 14185
// Function ID: 14186
// Name: ActivateDeviceUtils
// Dependencies: [1078, 9390, 2]
// Exports: clientIdToActivateDevicePlatform

// Module 14185 (ActivateDeviceUtils)
import Constants from "Constants" /* 1078 */;
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 9390 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/activate_device/ActivateDeviceUtils.tsx");

export const clientIdToActivateDevicePlatform = function clientIdToActivateDevicePlatform(clientId) {
  if (clientId === ConsoleOAuthApplications.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID) {
    let PLAYSTATION = PlatformTypes.PLAYSTATION;
  } else {
    PLAYSTATION = null;
    if (clientId === ConsoleOAuthApplications.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID) {
      PLAYSTATION = PlatformTypes.PLAYSTATION_STAGING;
    }
  }
  return PLAYSTATION;
};
