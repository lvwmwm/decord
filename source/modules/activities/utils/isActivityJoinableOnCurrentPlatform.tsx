// Module ID: 11945
// Function ID: 92360
// Name: getCurrentActivityGamePlatform
// Dependencies: []
// Exports: default

// Module 11945 (getCurrentActivityGamePlatform)
function getCurrentActivityGamePlatform() {
  if (obj.isIOS()) {
    let META_QUEST = constants2.IOS;
  } else {
    if (obj2.isMetaQuest()) {
      META_QUEST = constants2.META_QUEST;
    } else {
      META_QUEST = require(dependencyMap[1]).isAndroid() ? tmp5.ANDROID : tmp5.DESKTOP;
      const obj3 = require(dependencyMap[1]);
    }
    const obj2 = require(dependencyMap[2]);
  }
  return META_QUEST;
}
function isActivityJoinable(type) {
  let tmp = null == type;
  if (!tmp) {
    tmp = !importDefault(dependencyMap[3])(type, constants.JOIN);
  }
  if (!tmp) {
    tmp = type.type !== constants3.PLAYING;
  }
  return !tmp;
}
const _module = require(dependencyMap[0]);
({ ActivityFlags: closure_3, ActivityGamePlatforms: closure_4, ActivityTypes: closure_5 } = _module);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/activities/utils/isActivityJoinableOnCurrentPlatform.tsx");

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
