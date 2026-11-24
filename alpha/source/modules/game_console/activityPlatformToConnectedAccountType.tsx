// Module ID: 19304
// Function ID: 19305
// Name: activityPlatformToConnectedAccountType
// Dependencies: [1071, 7635, 2]
// Exports: default

// Module 19304 (activityPlatformToConnectedAccountType)
import Constants from "Constants" /* 1071 */;
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 7635 */;
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
