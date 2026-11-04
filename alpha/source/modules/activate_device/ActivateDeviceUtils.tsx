// Module ID: 15936
// Function ID: 15937
// Name: ActivateDeviceUtils
// Dependencies: [1072, 14392, 2]
// Exports: clientIdToActivateDevicePlatform

// Module 15936 (ActivateDeviceUtils)
import Constants from "Constants" /* 1072 */;
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 14392 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/activate_device/ActivateDeviceUtils.tsx");

export function clientIdToActivateDevicePlatform(clientId) {
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
}
