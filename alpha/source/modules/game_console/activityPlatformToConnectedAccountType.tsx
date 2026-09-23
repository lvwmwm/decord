// Module ID: 17669
// Function ID: 17670
// Name: activityPlatformToConnectedAccountType
// Dependencies: [1074, 2]
// Exports: default

// Module 17669 (activityPlatformToConnectedAccountType)
import Constants from "Constants" /* 1074 */;
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
