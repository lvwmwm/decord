// Module ID: 9469
// Function ID: 9470
// Name: coercePlatformTypeToConsoleType
// Dependencies: [8545, 1074, 2]
// Exports: coerceConsoleTypeToPlatformType, coercePlatformTypeToConsoleType

// Module 9469 (coercePlatformTypeToConsoleType)
import Constants from "Constants" /* 1074 */;
import GameConsoleConstants from "GameConsoleConstants" /* 8545 */;
import size from "module_2" /* 2 */;

const GameConsoleTypes = GameConsoleConstants.GameConsoleTypes;
const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/game_console/coercePlatformTypeToConsoleType.tsx");

export const coercePlatformTypeToConsoleType = function coercePlatformTypeToConsoleType(type) {
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
};
export const coerceConsoleTypeToPlatformType = function coerceConsoleTypeToPlatformType(arg0, arr) {
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
};
