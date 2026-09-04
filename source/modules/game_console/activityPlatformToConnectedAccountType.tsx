// Module ID: 17046
// Function ID: 17047
// Name: activityPlatformToConnectedAccountType
// Dependencies: [673, 2]
// Exports: default

// Module 17046 (activityPlatformToConnectedAccountType)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;

({ ActivityGamePlatforms: c0, PlatformTypes: closure_1 } = ME);
const result = set.fileFinishedImporting("modules/game_console/activityPlatformToConnectedAccountType.tsx");

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
