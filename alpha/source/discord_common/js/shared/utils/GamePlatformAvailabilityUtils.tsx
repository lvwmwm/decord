// Module ID: 14082
// Function ID: 14083
// Name: GamePlatformAvailabilityUtils
// Dependencies: [14080, 2]
// Exports: getOrderedGamePlatforms

// Module 14082 (GamePlatformAvailabilityUtils)
import GamePlatformAvailability from "GamePlatformAvailability" /* 14080 */;
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
