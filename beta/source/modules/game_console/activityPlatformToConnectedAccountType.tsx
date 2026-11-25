// Module ID: 19271
// Function ID: 19272
// Name: activityPlatformToConnectedAccountType
// Dependencies: [1071, 7074, 2]
// Exports: default

// Module 19271 (activityPlatformToConnectedAccountType)
import Constants from "Constants" /* 1071 */;
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 7074 */;
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
