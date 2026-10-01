// Module ID: 16948
// Function ID: 16949
// Name: activityPlatformToConnectedAccountType
// Dependencies: [1074, 2]
// Exports: default

// Module 16948 (activityPlatformToConnectedAccountType)
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ ActivityGamePlatforms: _window, PlatformTypes: map } = Constants);
const result = size.fileFinishedImporting("modules/game_console/activityPlatformToConnectedAccountType.tsx");

export default function activityPlatformToConnectedAccountType(arg0) {
  if (_window.PS4 !== arg0) {
    if (_window.PS5 !== arg0) {
      if (_window.XBOX === arg0) {
        return map.XBOX;
      }
    }
  }
  return map.PLAYSTATION;
};
