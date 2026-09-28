// Module ID: 11880
// Function ID: 11881
// Name: GamePlatformBadges
// Dependencies: [11879, 1115, 2]
// Exports: getGamePlatformAvailabilityLabel, sortGamePlatformAvailability

// Module 11880 (GamePlatformBadges)
import GamePlatformAvailability from "GamePlatformAvailability" /* 11879 */;
import size from "module_2" /* 2 */;

const items = [GamePlatformAvailability.GamePlatformAvailability.DESKTOP, GamePlatformAvailability.GamePlatformAvailability.MOBILE, GamePlatformAvailability.GamePlatformAvailability.CONSOLE];
const result = size.fileFinishedImporting("modules/games/GamePlatformBadges.tsx");

export const GAME_PLATFORM_AVAILABILITY_ORDER = items;
export const getGamePlatformAvailabilityLabel = function getGamePlatformAvailabilityLabel(item) {
  if (GamePlatformAvailability.GamePlatformAvailability.DESKTOP === item) {
    const intl3 = tmp(1115).intl;
    return intl3.string(tmp(1115).t.KT6uCJ);
  } else if (tmp(11879).GamePlatformAvailability.MOBILE === item) {
    const intl2 = tmp(1115).intl;
    return intl2.string(tmp(1115).t["0DvssQ"]);
  } else if (tmp(11879).GamePlatformAvailability.CONSOLE === item) {
    const intl = tmp(1115).intl;
    return intl.string(tmp(1115).t.RT9Ccb);
  }
};
export const sortGamePlatformAvailability = function sortGamePlatformAvailability(platforms) {
  if (null != platforms) {
    if (0 !== platforms.length) {
      const _Set = Set;
      const set = new Set(platforms);
      return items.filter((item) => set.has(item));
    }
  }
  return [];
};
