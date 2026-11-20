// Module ID: 14969
// Function ID: 14970
// Name: ActivateDeviceUtils
// Dependencies: [1071, 6959, 2]
// Exports: clientIdToActivateDevicePlatform

// Module 14969 (ActivateDeviceUtils)
import Constants from "Constants" /* 1071 */;
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 6959 */;
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
