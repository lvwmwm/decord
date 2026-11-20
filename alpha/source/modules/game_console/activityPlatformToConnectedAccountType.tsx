// Module ID: 19133
// Function ID: 19134
// Name: activityPlatformToConnectedAccountType
// Dependencies: [1071, 6954, 2]
// Exports: default

// Module 19133 (activityPlatformToConnectedAccountType)
import Constants from "Constants" /* 1071 */;
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 6954 */;
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
