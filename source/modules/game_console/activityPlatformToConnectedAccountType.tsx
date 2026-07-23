// Module ID: 15806
// Function ID: 122029
// Name: activityPlatformToConnectedAccountType
// Dependencies: [653, 2]
// Exports: default

// Module 15806 (activityPlatformToConnectedAccountType)
import ME from "ME";

({ ActivityGamePlatforms: closure_0, PlatformTypes: closure_1 } = ME);
const result = require("set").fileFinishedImporting("modules/game_console/activityPlatformToConnectedAccountType.tsx");

export default function activityPlatformToConnectedAccountType(arg0) {
  if (closure_0.PS4 !== arg0) {
    if (closure_0.PS5 !== arg0) {
      if (closure_0.XBOX === arg0) {
        return closure_1.XBOX;
      }
    }
  }
  return closure_1.PLAYSTATION;
};
