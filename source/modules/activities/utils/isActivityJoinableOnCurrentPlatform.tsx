// Module ID: 11958
// Function ID: 92427
// Name: getCurrentActivityGamePlatform
// Dependencies: [653, 478, 1553, 5689, 2]
// Exports: default

// Module 11958 (getCurrentActivityGamePlatform)
import ME from "ME";

let closure_3;
let closure_4;
let closure_5;
function getCurrentActivityGamePlatform() {
  if (obj.isIOS()) {
    let META_QUEST = constants2.IOS;
  } else {
    if (obj2.isMetaQuest()) {
      META_QUEST = constants2.META_QUEST;
    } else {
      META_QUEST = require(478) /* isWindows */.isAndroid() ? tmp5.ANDROID : tmp5.DESKTOP;
      const obj3 = require(478) /* isWindows */;
    }
    obj2 = require(1553) /* isMetaQuest */;
  }
  return META_QUEST;
}
function isActivityJoinable(type) {
  let tmp = null == type;
  if (!tmp) {
    tmp = !importDefault(5689)(type, constants.JOIN);
  }
  if (!tmp) {
    tmp = type.type !== constants3.PLAYING;
  }
  return !tmp;
}
({ ActivityFlags: closure_3, ActivityGamePlatforms: closure_4, ActivityTypes: closure_5 } = ME);
const result = require("isMetaQuest").fileFinishedImporting("modules/activities/utils/isActivityJoinableOnCurrentPlatform.tsx");

export default function isActivityJoinableOnCurrentPlatform(platform) {
  if (isActivityJoinable(platform)) {
    const tmp2 = getCurrentActivityGamePlatform();
    platform = undefined;
    if (null != platform) {
      platform = platform.platform;
    }
    if (null != platform) {
      let DESKTOP = platform.platform;
    } else {
      DESKTOP = constants2.DESKTOP;
    }
    if (DESKTOP === tmp2) {
      return true;
    } else {
      let supported_platforms;
      if (null != platform) {
        supported_platforms = platform.supported_platforms;
      }
      let hasItem = null != supported_platforms;
      if (hasItem) {
        hasItem = 0 !== supported_platforms.length;
      }
      if (hasItem) {
        hasItem = supported_platforms.includes(tmp2);
      }
      return hasItem;
    }
  } else {
    return false;
  }
};
export { getCurrentActivityGamePlatform };
export { isActivityJoinable };
