// Module ID: 14148
// Function ID: 14149
// Name: ActivateDeviceUtils
// Dependencies: [1078, 9358, 2]
// Exports: clientIdToActivateDevicePlatform

// Module 14148 (ActivateDeviceUtils)
import Constants from "Constants" /* 1078 */;
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 9358 */;
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
