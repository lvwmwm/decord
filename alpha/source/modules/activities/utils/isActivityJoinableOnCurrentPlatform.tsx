// Module ID: 12574
// Function ID: 12575
// Name: isActivityJoinableOnCurrentPlatform
// Dependencies: [1074, 1365, 1609, 6726, 2]
// Exports: default, getCurrentActivityGamePlatform, isActivityJoinable

// Module 12574 (isActivityJoinableOnCurrentPlatform)
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import hasFlagDefault from "hasFlag" /* 6726 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ ActivityFlags: c3, ActivityGamePlatforms: closure_4, ActivityTypes: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/isActivityJoinableOnCurrentPlatform.tsx");

export default function isActivityJoinableOnCurrentPlatform(type) {
  let tmp = null == type;
  if (!tmp) {
    tmp = !hasFlagDefault(type, constants.JOIN);
  }
  if (!tmp) {
    tmp = type.type !== constants3.PLAYING;
  }
  if (!tmp) {
    if (obj.isIOS()) {
      let DESKTOP = constants2.IOS;
      let tmp9 = constants2;
    } else {
      if (tmp6Result.isMetaQuest()) {
        DESKTOP = constants2.META_QUEST;
        tmp9 = constants2;
      } else {
        if (tmp6Result2.isAndroid()) {
          DESKTOP = tmp8.ANDROID;
          tmp9 = tmp8;
        } else {
          DESKTOP = tmp8.DESKTOP;
          tmp9 = tmp8;
        }
        tmp6Result2 = tmp6(1365);
      }
      tmp6Result = tmp6(1609);
    }
    let platform;
    if (type != null) {
      platform = type.platform;
    }
    if ((null != platform ? type.platform : tmp9.DESKTOP) === DESKTOP) {
      return true;
    } else {
      let supported_platforms;
      if (type != null) {
        supported_platforms = type.supported_platforms;
      }
      let hasItem = null != supported_platforms;
      if (hasItem) {
        hasItem = 0 !== supported_platforms.length;
      }
      if (hasItem) {
        hasItem = supported_platforms.includes(DESKTOP);
      }
      return hasItem;
    }
    obj = utils_PlatformUtils;
  } else {
    return false;
  }
};
export const getCurrentActivityGamePlatform = function getCurrentActivityGamePlatform() {
  if (obj.isIOS()) {
    let META_QUEST = constants2.IOS;
  } else {
    if (tmpResult.isMetaQuest()) {
      META_QUEST = constants2.META_QUEST;
    } else {
      META_QUEST = tmp(1365).isAndroid() ? tmp3.ANDROID : tmp3.DESKTOP;
      const tmpResult2 = tmp(1365);
    }
    tmpResult = tmp(1609);
  }
  return META_QUEST;
};
export const isActivityJoinable = function isActivityJoinable(type) {
  let tmp = null == type;
  if (!tmp) {
    tmp = !hasFlagDefault(type, constants.JOIN);
  }
  if (!tmp) {
    tmp = type.type !== constants3.PLAYING;
  }
  return !tmp;
};
