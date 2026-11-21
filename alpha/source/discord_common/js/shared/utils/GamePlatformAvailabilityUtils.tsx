// Module ID: 10211
// Function ID: 10212
// Name: GamePlatformAvailabilityUtils
// Dependencies: [10209, 2]
// Exports: getOrderedGamePlatforms

// Module 10211 (GamePlatformAvailabilityUtils)
import GamePlatformAvailability from "GamePlatformAvailability" /* 10209 */;
import size from "module_2" /* 2 */;

let set;

const items = [GamePlatformAvailability.GamePlatformAvailability.DESKTOP, GamePlatformAvailability.GamePlatformAvailability.MOBILE, GamePlatformAvailability.GamePlatformAvailability.CONSOLE, GamePlatformAvailability.GamePlatformAvailability.ROBLOX];
const result = size.fileFinishedImporting("../discord_common/js/shared/utils/GamePlatformAvailabilityUtils.tsx");

export const GAME_PLATFORM_AVAILABILITY_ORDER = items;
export function getOrderedGamePlatforms(items) {
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
}
