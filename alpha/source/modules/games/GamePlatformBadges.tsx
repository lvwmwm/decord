// Module ID: 10210
// Function ID: 10211
// Name: GamePlatformBadges
// Dependencies: [10209, 1112, 2, 10211]
// Exports: getGamePlatformAvailabilityLabel

// Module 10210 (GamePlatformBadges)
import intl5 from "intl" /* 1112 */;
import GamePlatformAvailability from "GamePlatformAvailability" /* 10209 */;
import GamePlatformAvailabilityUtils from "GamePlatformAvailabilityUtils" /* 10211 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/games/GamePlatformBadges.tsx");

export const GAME_PLATFORM_AVAILABILITY_ORDER = GamePlatformAvailabilityUtils.GAME_PLATFORM_AVAILABILITY_ORDER;
export const sortGamePlatformAvailability = GamePlatformAvailabilityUtils.getOrderedGamePlatforms;
export function getGamePlatformAvailabilityLabel(item) {
  if (GamePlatformAvailability.GamePlatformAvailability.DESKTOP === item) {
    const intl4 = tmp(1112).intl;
    return intl4.string(intl5.t.KT6uCJ);
  } else if (GamePlatformAvailability.GamePlatformAvailability.MOBILE === item) {
    const intl3 = tmp(1112).intl;
    return intl3.string(intl5.t["0DvssQ"]);
  } else if (GamePlatformAvailability.GamePlatformAvailability.CONSOLE === item) {
    const intl2 = tmp(1112).intl;
    return intl2.string(intl5.t.RT9Ccb);
  } else if (GamePlatformAvailability.GamePlatformAvailability.ROBLOX === item) {
    const intl = tmp(1112).intl;
    return intl.string(intl5.t.MPURhG);
  }
}
