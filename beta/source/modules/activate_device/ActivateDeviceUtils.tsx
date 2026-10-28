// Module ID: 15159
// Function ID: 15160
// Name: ActivateDeviceUtils
// Dependencies: [1087, 13557, 2]
// Exports: clientIdToActivateDevicePlatform

// Module 15159 (ActivateDeviceUtils)
import Constants from "Constants" /* 1087 */;
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 13557 */;
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
