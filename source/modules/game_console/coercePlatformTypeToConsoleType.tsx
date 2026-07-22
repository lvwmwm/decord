// Module ID: 10729
// Function ID: 83440
// Name: coercePlatformTypeToConsoleType
// Dependencies: []
// Exports: coerceConsoleTypeToPlatformType, coercePlatformTypeToConsoleType

// Module 10729 (coercePlatformTypeToConsoleType)
const GameConsoleTypes = require(dependencyMap[0]).GameConsoleTypes;
const PlatformTypes = require(dependencyMap[1]).PlatformTypes;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/game_console/coercePlatformTypeToConsoleType.tsx");

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
export const coerceConsoleTypeToPlatformType = function coerceConsoleTypeToPlatformType(stateFromStores1, arr) {
  if (GameConsoleTypes.XBOX === stateFromStores1) {
    return PlatformTypes.XBOX;
  } else if (GameConsoleTypes.PLAYSTATION === stateFromStores1) {
    if (!arr.some((type) => type.type === constants.PLAYSTATION && type.twoWayLink)) {
      if (someResult) {
        let PLAYSTATION = PlatformTypes.PLAYSTATION_STAGING;
      }
      return PLAYSTATION;
    }
    PLAYSTATION = PlatformTypes.PLAYSTATION;
    const someResult = arr.some((type) => type.type === constants.PLAYSTATION_STAGING && type.twoWayLink);
  } else {
    return null;
  }
};
