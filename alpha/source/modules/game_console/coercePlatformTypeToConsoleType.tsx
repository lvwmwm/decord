// Module ID: 11938
// Function ID: 11939
// Name: coercePlatformTypeToConsoleType
// Dependencies: [9717, 1072, 2]
// Exports: coerceConsoleTypeToPlatformType, coercePlatformTypeToConsoleType

// Module 11938 (coercePlatformTypeToConsoleType)
import Constants from "Constants" /* 1072 */;
import GameConsoleConstants from "GameConsoleConstants" /* 9717 */;
import size from "module_2" /* 2 */;

const GameConsoleTypes = GameConsoleConstants.GameConsoleTypes;
const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/game_console/coercePlatformTypeToConsoleType.tsx");

export function coercePlatformTypeToConsoleType(type) {
  if (PlatformTypes.XBOX === type) {
    return GameConsoleTypes.XBOX;
  } else {
    if (PlatformTypes.PLAYSTATION !== type) {
      if (PlatformTypes.PLAYSTATION_STAGING !== type) {
        return null;
      }
    }
    return GameConsoleTypes.PLAYSTATION;
  }
}
export function coerceConsoleTypeToPlatformType(arg0, arr) {
  if (GameConsoleTypes.XBOX === arg0) {
    return PlatformTypes.XBOX;
  } else if (tmp.PLAYSTATION === arg0) {
    const someResult = arr.some((type) => type.type === constants.PLAYSTATION_STAGING && type.twoWayLink);
    if (!arr.some((type) => type.type === constants.PLAYSTATION && type.twoWayLink)) {
      let PLAYSTATION;
      if (someResult) {
        PLAYSTATION = PlatformTypes.PLAYSTATION_STAGING;
      }
      return PLAYSTATION;
    }
    PLAYSTATION = PlatformTypes.PLAYSTATION;
  } else {
    return null;
  }
}
