// Module ID: 19513
// Function ID: 19514
// Name: activityPlatformToConnectedAccountType
// Dependencies: [1072, 9888, 2]
// Exports: default

// Module 19513 (activityPlatformToConnectedAccountType)
import Constants from "Constants" /* 1072 */;
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 9888 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/game_console/activityPlatformToConnectedAccountType.tsx");

export default function activityPlatformToConnectedAccountType(arg0) {
  if (ActivityGamePlatforms.ActivityGamePlatforms.PLAYSTATION_4 !== arg0) {
    if (ActivityGamePlatforms.ActivityGamePlatforms.PLAYSTATION_5 !== arg0) {
      if (ActivityGamePlatforms.ActivityGamePlatforms.XBOX === arg0) {
        return PlatformTypes.XBOX;
      }
    }
  }
  return PlatformTypes.PLAYSTATION;
};
