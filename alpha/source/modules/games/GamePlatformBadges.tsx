// Module ID: 12979
// Function ID: 12980
// Name: GamePlatformBadges
// Dependencies: [12978, 1128, 2, 12980]
// Exports: getGamePlatformAvailabilityLabel

// Module 12979 (GamePlatformBadges)
import intl5 from "intl" /* 1128 */;
import GamePlatformAvailability from "GamePlatformAvailability" /* 12978 */;
import GamePlatformAvailabilityUtils from "GamePlatformAvailabilityUtils" /* 12980 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/games/GamePlatformBadges.tsx");

export const GAME_PLATFORM_AVAILABILITY_ORDER = GamePlatformAvailabilityUtils.GAME_PLATFORM_AVAILABILITY_ORDER;
export const sortGamePlatformAvailability = GamePlatformAvailabilityUtils.getOrderedGamePlatforms;
export const getGamePlatformAvailabilityLabel = function getGamePlatformAvailabilityLabel(item) {
  if (GamePlatformAvailability.GamePlatformAvailability.DESKTOP === item) {
    const intl4 = tmp(1128).intl;
    return intl4.string(intl5.t.KT6uCJ);
  } else if (GamePlatformAvailability.GamePlatformAvailability.MOBILE === item) {
    const intl3 = tmp(1128).intl;
    return intl3.string(intl5.t["0DvssQ"]);
  } else if (GamePlatformAvailability.GamePlatformAvailability.CONSOLE === item) {
    const intl2 = tmp(1128).intl;
    return intl2.string(intl5.t.RT9Ccb);
  } else if (GamePlatformAvailability.GamePlatformAvailability.ROBLOX === item) {
    const intl = tmp(1128).intl;
    return intl.string(intl5.t.MPURhG);
  }
};
