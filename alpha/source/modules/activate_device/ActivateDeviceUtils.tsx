// Module ID: 15161
// Function ID: 15162
// Name: ActivateDeviceUtils
// Dependencies: [1084, 13541, 2]
// Exports: clientIdToActivateDevicePlatform

// Module 15161 (ActivateDeviceUtils)
import Constants from "Constants" /* 1084 */;
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 13541 */;
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
