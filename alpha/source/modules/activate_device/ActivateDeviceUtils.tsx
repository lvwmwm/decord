// Module ID: 15660
// Function ID: 15661
// Name: ActivateDeviceUtils
// Dependencies: [1072, 14124, 2]
// Exports: clientIdToActivateDevicePlatform

// Module 15660 (ActivateDeviceUtils)
import Constants from "Constants" /* 1072 */;
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 14124 */;
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
