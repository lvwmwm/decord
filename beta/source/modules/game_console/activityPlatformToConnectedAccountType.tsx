// Module ID: 17554
// Function ID: 17555
// Name: activityPlatformToConnectedAccountType
// Dependencies: [1078, 2]
// Exports: default

// Module 17554 (activityPlatformToConnectedAccountType)
import Constants from "Constants" /* 1078 */;
import size from "module_2" /* 2 */;

({ ActivityGamePlatforms: closure_0, PlatformTypes: closure_1 } = Constants);
const result = size.fileFinishedImporting("modules/game_console/activityPlatformToConnectedAccountType.tsx");

export default function activityPlatformToConnectedAccountType(arg0) {
  if (PS4.PS4 !== arg0) {
    if (tmp.PS5 !== arg0) {
      if (tmp.XBOX === arg0) {
        return constants.XBOX;
      }
    }
  }
  return constants.PLAYSTATION;
};
