// Module ID: 12044
// Function ID: 12045
// Name: GamePlatformBadges
// Dependencies: [12043, 1126, 2, 12045]
// Exports: getGamePlatformAvailabilityLabel

// Module 12044 (GamePlatformBadges)
import intl4 from "intl" /* 1126 */;
import GamePlatformAvailability from "GamePlatformAvailability" /* 12043 */;
import GamePlatformAvailabilityUtils from "GamePlatformAvailabilityUtils" /* 12045 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/games/GamePlatformBadges.tsx");

export const GAME_PLATFORM_AVAILABILITY_ORDER = GamePlatformAvailabilityUtils.GAME_PLATFORM_AVAILABILITY_ORDER;
export const sortGamePlatformAvailability = GamePlatformAvailabilityUtils.getOrderedGamePlatforms;
export const getGamePlatformAvailabilityLabel = function getGamePlatformAvailabilityLabel(item) {
  if (GamePlatformAvailability.GamePlatformAvailability.DESKTOP === item) {
    const intl3 = tmp(1126).intl;
    return intl3.string(intl4.t.KT6uCJ);
  } else if (GamePlatformAvailability.GamePlatformAvailability.MOBILE === item) {
    const intl2 = tmp(1126).intl;
    return intl2.string(intl4.t["0DvssQ"]);
  } else if (GamePlatformAvailability.GamePlatformAvailability.CONSOLE === item) {
    const intl = tmp(1126).intl;
    return intl.string(intl4.t.RT9Ccb);
  }
};
