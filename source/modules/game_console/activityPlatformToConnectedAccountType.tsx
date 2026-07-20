// Module ID: 15671
// Function ID: 119750
// Name: activityPlatformToConnectedAccountType
// Dependencies: []
// Exports: default

// Module 15671 (activityPlatformToConnectedAccountType)
const _module = require(dependencyMap[0]);
({ ActivityGamePlatforms: closure_0, PlatformTypes: closure_1 } = _module);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/game_console/activityPlatformToConnectedAccountType.tsx");

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
