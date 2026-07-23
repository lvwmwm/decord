// Module ID: 12311
// Function ID: 95893
// Name: getJoinFromSupportedPlatformsIconKeys
// Dependencies: [31, 653, 2]
// Exports: useJoinFromSupportedPlatformsIconKeys

// Module 12311 (getJoinFromSupportedPlatformsIconKeys)
import result from "result";
import { ActivityGamePlatforms } from "ME";

function getJoinFromSupportedPlatformsIconKeys(isGameLaunchable) {
  let currentPlatform;
  let platforms;
  ({ platforms, currentPlatform } = isGameLaunchable);
  const set = new Set(platforms);
  const items = [];
  if (null != platforms) {
    if (0 !== platforms.length) {
      if (null != currentPlatform) {
        if (set.has(currentPlatform)) {
          return tmp23;
        }
      }
      if (set.has(ActivityGamePlatforms.ANDROID)) {
        if (set.has(ActivityGamePlatforms.IOS)) {
          items.push(obj.MOBILE);
        }
        let hasItem = set.has(ActivityGamePlatforms.PS4);
        if (!hasItem) {
          hasItem = set.has(ActivityGamePlatforms.PS5);
        }
        if (hasItem) {
          items.push(obj.PLAYSTATION);
        }
        if (set.has(ActivityGamePlatforms.XBOX)) {
          items.push(obj.XBOX);
        }
        if (set.has(ActivityGamePlatforms.DESKTOP)) {
          items.push(obj.DESKTOP);
        }
        tmp23 = items;
        if (set.has(ActivityGamePlatforms.META_QUEST)) {
          items.push(obj.VR);
          tmp23 = items;
        }
      }
      if (set.has(ActivityGamePlatforms.ANDROID)) {
        items.push(obj.ANDROID);
      } else if (set.has(ActivityGamePlatforms.IOS)) {
        items.push(obj.IOS);
      }
    }
  }
  tmp23 = closure_3;
}
let obj = { DESKTOP: "desktop", MOBILE: "mobile", ANDROID: "android", IOS: "ios", PLAYSTATION: "playstation", XBOX: "xbox", VR: "vr" };
obj = { [ActivityGamePlatforms.DESKTOP]: obj.DESKTOP, [ActivityGamePlatforms.ANDROID]: obj.ANDROID, [ActivityGamePlatforms.IOS]: obj.IOS, [ActivityGamePlatforms.XBOX]: obj.XBOX, [ActivityGamePlatforms.PS4]: obj.PLAYSTATION, [ActivityGamePlatforms.PS5]: obj.PLAYSTATION, [ActivityGamePlatforms.SAMSUNG]: null, [ActivityGamePlatforms.EMBEDDED]: null, [ActivityGamePlatforms.META_QUEST]: obj.VR };
let closure_3 = [];
const result = require("set").fileFinishedImporting("modules/activities/utils/useJoinFromSupportedPlatformsIconKeys.tsx");

export const IconKey = obj;
export const ACTIVITY_GAME_PLATFORM_TO_ICON_KEY = obj;
export { getJoinFromSupportedPlatformsIconKeys };
export const useJoinFromSupportedPlatformsIconKeys = function useJoinFromSupportedPlatformsIconKeys(platforms) {
  platforms = platforms.platforms;
  const currentPlatform = platforms.currentPlatform;
  const isGameLaunchable = platforms.isGameLaunchable;
  const items = [currentPlatform, platforms, isGameLaunchable];
  return platforms.useMemo(() => outer1_4({ platforms, currentPlatform, isGameLaunchable }), items);
};
