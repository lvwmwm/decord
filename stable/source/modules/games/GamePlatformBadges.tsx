// Module ID: 11774
// Function ID: 11775
// Name: GamePlatformBadges
// Dependencies: [11773, 1127, 2]
// Exports: getGamePlatformAvailabilityLabel, sortGamePlatformAvailability

// Module 11774 (GamePlatformBadges)
import intl4 from "intl" /* 1127 */;
import GamePlatformAvailability from "GamePlatformAvailability" /* 11773 */;
import size from "module_2" /* 2 */;

let set;

const items = [GamePlatformAvailability.GamePlatformAvailability.DESKTOP, GamePlatformAvailability.GamePlatformAvailability.MOBILE, GamePlatformAvailability.GamePlatformAvailability.CONSOLE];
const result = size.fileFinishedImporting("modules/games/GamePlatformBadges.tsx");

export const GAME_PLATFORM_AVAILABILITY_ORDER = items;
export const getGamePlatformAvailabilityLabel = function getGamePlatformAvailabilityLabel(item) {
  if (GamePlatformAvailability.GamePlatformAvailability.DESKTOP === item) {
    const intl3 = tmp(1127).intl;
    return intl3.string(intl4.t.KT6uCJ);
  } else if (GamePlatformAvailability.GamePlatformAvailability.MOBILE === item) {
    const intl2 = tmp(1127).intl;
    return intl2.string(intl4.t["0DvssQ"]);
  } else if (GamePlatformAvailability.GamePlatformAvailability.CONSOLE === item) {
    const intl = tmp(1127).intl;
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
