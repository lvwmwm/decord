// Module ID: 10739
// Function ID: 83489
// Name: coercePlatformTypeToConsoleType
// Dependencies: [8950, 653, 2]
// Exports: coerceConsoleTypeToPlatformType, coercePlatformTypeToConsoleType

// Module 10739 (coercePlatformTypeToConsoleType)
import { GameConsoleTypes } from "XBOX_URL_BASE";
import { PlatformTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/game_console/coercePlatformTypeToConsoleType.tsx");

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
export const coerceConsoleTypeToPlatformType = function coerceConsoleTypeToPlatformType(stateFromStores1, closure_3) {
  if (GameConsoleTypes.XBOX === stateFromStores1) {
    return PlatformTypes.XBOX;
  } else if (GameConsoleTypes.PLAYSTATION === stateFromStores1) {
    if (!closure_3.some((type) => type.type === outer1_1.PLAYSTATION && type.twoWayLink)) {
      if (someResult) {
        let PLAYSTATION = PlatformTypes.PLAYSTATION_STAGING;
      }
      return PLAYSTATION;
    }
    PLAYSTATION = PlatformTypes.PLAYSTATION;
    someResult = closure_3.some((type) => type.type === outer1_1.PLAYSTATION_STAGING && type.twoWayLink);
  } else {
    return null;
  }
};
