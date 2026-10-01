// Module ID: 12809
// Function ID: 12810
// Name: useJoinFromSupportedPlatformsIconKeys
// Dependencies: [19, 1074, 2]
// Exports: useJoinFromSupportedPlatformsIconKeys

// Module 12809 (useJoinFromSupportedPlatformsIconKeys)
import Constants from "Constants" /* 1074 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

function getJoinFromSupportedPlatformsIconKeys(isGameLaunchable) {
  let currentPlatform;
  let platforms;
  let tmp15;
  ({ platforms, currentPlatform } = isGameLaunchable);
  isGameLaunchable = isGameLaunchable.isGameLaunchable;
  set = new Set(platforms);
  if (null != platforms) {
    if (0 !== platforms.length) {
      if (null != currentPlatform) {
        if (set.has(currentPlatform)) {
          return tmp15;
        }
      }
      const items = [];
      if (set.has(ActivityGamePlatforms.ANDROID)) {
        if (set.has(ActivityGamePlatforms.IOS)) {
          items.push(obj.MOBILE);
        }
        const tmp8 = set.has(ActivityGamePlatforms.PS4) || set.has(ActivityGamePlatforms.PS5);
        if (tmp8) {
          items.push(obj.PLAYSTATION);
        }
        if (set.has(ActivityGamePlatforms.XBOX)) {
          items.push(obj.XBOX);
        }
        if (set.has(ActivityGamePlatforms.DESKTOP)) {
          items.push(obj.DESKTOP);
        }
        tmp15 = items;
        if (set.has(ActivityGamePlatforms.META_QUEST)) {
          items.push(obj.VR);
          tmp15 = items;
        }
      }
      if (set.has(ActivityGamePlatforms.ANDROID)) {
        items.push(obj.ANDROID);
      } else if (set.has(ActivityGamePlatforms.IOS)) {
        items.push(obj.IOS);
      }
    }
  }
  tmp15 = closure_3;
}
const ActivityGamePlatforms = Constants.ActivityGamePlatforms;
const IconKey = { DESKTOP: "desktop", MOBILE: "mobile", ANDROID: "android", IOS: "ios", PLAYSTATION: "playstation", XBOX: "xbox", VR: "vr" };
let closure_3 = [];
const obj2 = { [ActivityGamePlatforms.DESKTOP]: IconKey.DESKTOP, [ActivityGamePlatforms.ANDROID]: IconKey.ANDROID, [ActivityGamePlatforms.IOS]: IconKey.IOS, [ActivityGamePlatforms.XBOX]: IconKey.XBOX, [ActivityGamePlatforms.PS4]: IconKey.PLAYSTATION, [ActivityGamePlatforms.PS5]: IconKey.PLAYSTATION, [ActivityGamePlatforms.SAMSUNG]: null, [ActivityGamePlatforms.EMBEDDED]: null, [ActivityGamePlatforms.META_QUEST]: IconKey.VR };
const result = size.fileFinishedImporting("modules/activities/utils/useJoinFromSupportedPlatformsIconKeys.tsx");

export { IconKey };
export const ACTIVITY_GAME_PLATFORM_TO_ICON_KEY = obj2;
export { getJoinFromSupportedPlatformsIconKeys };
export const useJoinFromSupportedPlatformsIconKeys = function useJoinFromSupportedPlatformsIconKeys(platforms) {
  platforms = platforms.platforms;
  const currentPlatform = platforms.currentPlatform;
  const isGameLaunchable = platforms.isGameLaunchable;
  const items = [currentPlatform, platforms, isGameLaunchable];
  return platforms.useMemo(() => {
    const obj = { platforms, currentPlatform, isGameLaunchable };
    return getJoinFromSupportedPlatformsIconKeys(obj);
  }, items);
};
