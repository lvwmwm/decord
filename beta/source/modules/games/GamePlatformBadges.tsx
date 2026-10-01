// Module ID: 11880
// Function ID: 11881
// Name: GamePlatformBadges
// Dependencies: [11879, 1115, 2]
// Exports: getGamePlatformAvailabilityLabel, sortGamePlatformAvailability

// Module 11880 (GamePlatformBadges)
import intl4 from "intl" /* 1115 */;
import GamePlatformAvailability from "GamePlatformAvailability" /* 11879 */;
import size from "module_2" /* 2 */;

let set;

const items = [GamePlatformAvailability.GamePlatformAvailability.DESKTOP, GamePlatformAvailability.GamePlatformAvailability.MOBILE, GamePlatformAvailability.GamePlatformAvailability.CONSOLE];
const result = size.fileFinishedImporting("modules/games/GamePlatformBadges.tsx");

export const GAME_PLATFORM_AVAILABILITY_ORDER = items;
export const getGamePlatformAvailabilityLabel = function getGamePlatformAvailabilityLabel(item) {
  if (GamePlatformAvailability.GamePlatformAvailability.DESKTOP === item) {
    const intl3 = tmp(1115).intl;
    return intl3.string(intl4.t.KT6uCJ);
  } else if (GamePlatformAvailability.GamePlatformAvailability.MOBILE === item) {
    const intl2 = tmp(1115).intl;
    return intl2.string(intl4.t["0DvssQ"]);
  } else if (GamePlatformAvailability.GamePlatformAvailability.CONSOLE === item) {
    const intl = tmp(1115).intl;
    return intl.string(intl4.t.RT9Ccb);
  }
};
export const sortGamePlatformAvailability = function sortGamePlatformAvailability(platforms) {
  if (null != platforms) {
    if (0 !== platforms.length) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(platforms);
      return items.filter((item) => set.has(item));
    }
  }
  return [];
};
