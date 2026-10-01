// Module ID: 12093
// Function ID: 12094
// Name: GamePlatformBadges
// Dependencies: [12092, 1115, 2, 12094]
// Exports: getGamePlatformAvailabilityLabel

// Module 12093 (GamePlatformBadges)
import GamePlatformAvailability from "GamePlatformAvailability" /* 12092 */;
import GamePlatformAvailabilityUtils from "GamePlatformAvailabilityUtils" /* 12094 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/games/GamePlatformBadges.tsx");

export const GAME_PLATFORM_AVAILABILITY_ORDER = GamePlatformAvailabilityUtils.GAME_PLATFORM_AVAILABILITY_ORDER;
export const sortGamePlatformAvailability = GamePlatformAvailabilityUtils.getOrderedGamePlatforms;
export const getGamePlatformAvailabilityLabel = function getGamePlatformAvailabilityLabel(item) {
  if (GamePlatformAvailability.GamePlatformAvailability.DESKTOP === item) {
    const intl3 = tmp(1115).intl;
    return intl3.string(tmp(1115).t.KT6uCJ);
  } else if (tmp(12092).GamePlatformAvailability.MOBILE === item) {
    const intl2 = tmp(1115).intl;
    return intl2.string(tmp(1115).t["0DvssQ"]);
  } else if (tmp(12092).GamePlatformAvailability.CONSOLE === item) {
    const intl = tmp(1115).intl;
    return intl.string(tmp(1115).t.RT9Ccb);
  }
};
