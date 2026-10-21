// Module ID: 18376
// Function ID: 18377
// Name: activityPlatformToConnectedAccountType
// Dependencies: [1087, 2]
// Exports: default

// Module 18376 (activityPlatformToConnectedAccountType)
import Constants from "Constants" /* 1087 */;
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
