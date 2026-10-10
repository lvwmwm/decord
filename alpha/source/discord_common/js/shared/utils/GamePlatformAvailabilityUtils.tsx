// Module ID: 12099
// Function ID: 12100
// Name: GamePlatformAvailabilityUtils
// Dependencies: [12097, 2]
// Exports: getOrderedGamePlatforms

// Module 12099 (GamePlatformAvailabilityUtils)
import GamePlatformAvailability from "GamePlatformAvailability" /* 12097 */;
import size from "module_2" /* 2 */;

let set;

const items = [GamePlatformAvailability.GamePlatformAvailability.DESKTOP, GamePlatformAvailability.GamePlatformAvailability.MOBILE, GamePlatformAvailability.GamePlatformAvailability.CONSOLE];
const result = size.fileFinishedImporting("../discord_common/js/shared/utils/GamePlatformAvailabilityUtils.tsx");

export const GAME_PLATFORM_AVAILABILITY_ORDER = items;
export const getOrderedGamePlatforms = function getOrderedGamePlatforms(items) {
  if (null != items) {
    if (0 !== items.length) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(items);
      return items.filter((item) => set.has(item));
    }
  }
  return [];
};
