// Module ID: 15138
// Function ID: 15139
// Name: useJoinFromSupportedPlatformsIconKeys
// Dependencies: [19, 9738, 2]
// Exports: useJoinFromSupportedPlatformsIconKeys

// Module 15138 (useJoinFromSupportedPlatformsIconKeys)
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 9738 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

function getJoinFromSupportedPlatformsIconKeys(isGameLaunchable) {
  let currentPlatform;
  let platforms;
  let tmp16;
  ({ platforms, currentPlatform } = isGameLaunchable);
  isGameLaunchable = isGameLaunchable.isGameLaunchable;
  set = new Set(platforms);
  if (null != platforms) {
    if (0 !== platforms.length) {
      if (null != currentPlatform) {
        if (set.has(currentPlatform)) {
          return tmp16;
        }
      }
      const items = [];
      if (set.has(ActivityGamePlatforms.ActivityGamePlatforms.ANDROID)) {
        if (set.has(ActivityGamePlatforms.ActivityGamePlatforms.IOS)) {
          items.push(obj.MOBILE);
        }
        const hasItem = set.has(tmp(9738).ActivityGamePlatforms.PLAYSTATION_4) || set.has(tmp(9738).ActivityGamePlatforms.PLAYSTATION_5);
        if (hasItem) {
          items.push(obj.PLAYSTATION);
        }
        if (set.has(ActivityGamePlatforms.ActivityGamePlatforms.XBOX)) {
          items.push(obj.XBOX);
        }
        if (set.has(ActivityGamePlatforms.ActivityGamePlatforms.DESKTOP)) {
          items.push(obj.DESKTOP);
        }
        tmp16 = items;
        if (set.has(ActivityGamePlatforms.ActivityGamePlatforms.META_QUEST)) {
          items.push(obj.VR);
          tmp16 = items;
        }
      }
      if (set.has(ActivityGamePlatforms.ActivityGamePlatforms.ANDROID)) {
        items.push(obj.ANDROID);
      } else if (set.has(ActivityGamePlatforms.ActivityGamePlatforms.IOS)) {
        items.push(obj.IOS);
      }
    }
  }
  tmp16 = closure_4;
}
const IconKey = { DESKTOP: "desktop", MOBILE: "mobile", ANDROID: "android", IOS: "ios", PLAYSTATION: "playstation", XBOX: "xbox", VR: "vr" };
let closure_4 = [];
const obj2 = { [ActivityGamePlatforms.ActivityGamePlatforms.DESKTOP]: IconKey.DESKTOP, [ActivityGamePlatforms.ActivityGamePlatforms.ANDROID]: IconKey.ANDROID, [ActivityGamePlatforms.ActivityGamePlatforms.IOS]: IconKey.IOS, [ActivityGamePlatforms.ActivityGamePlatforms.XBOX]: IconKey.XBOX, [ActivityGamePlatforms.ActivityGamePlatforms.PLAYSTATION_4]: IconKey.PLAYSTATION, [ActivityGamePlatforms.ActivityGamePlatforms.PLAYSTATION_5]: IconKey.PLAYSTATION, [ActivityGamePlatforms.ActivityGamePlatforms.SAMSUNG]: null, [ActivityGamePlatforms.ActivityGamePlatforms.EMBEDDED]: null, [ActivityGamePlatforms.ActivityGamePlatforms.META_QUEST]: IconKey.VR };
const result = size.fileFinishedImporting("modules/activities/utils/useJoinFromSupportedPlatformsIconKeys.tsx");

export { IconKey };
export const ACTIVITY_GAME_PLATFORM_TO_ICON_KEY = obj2;
export { getJoinFromSupportedPlatformsIconKeys };
export function useJoinFromSupportedPlatformsIconKeys(platforms) {
  platforms = platforms.platforms;
  const currentPlatform = platforms.currentPlatform;
  const isGameLaunchable = platforms.isGameLaunchable;
  const items = [currentPlatform, platforms, isGameLaunchable];
  return isGameLaunchable.useMemo(() => {
    const obj = { platforms, currentPlatform, isGameLaunchable };
    return getJoinFromSupportedPlatformsIconKeys(obj);
  }, items);
}
