// Module ID: 12243
// Function ID: 12244
// Name: isActivityJoinableOnCurrentPlatform
// Dependencies: [676, 501, 1605, 5868, 2]
// Exports: default, getCurrentActivityGamePlatform, isActivityJoinable

// Module 12243 (isActivityJoinableOnCurrentPlatform)
import ME from "ME";

let c3;
let c4;
let c5;
({ ActivityFlags: c3, ActivityGamePlatforms: c4, ActivityTypes: c5 } = ME);
const result = require("isMetaQuest").fileFinishedImporting("modules/activities/utils/isActivityJoinableOnCurrentPlatform.tsx");

export default function isActivityJoinableOnCurrentPlatform(type) {
  let tmp = null == type;
  if (!tmp) {
    tmp = !importDefault(5868)(type, constants.JOIN);
  }
  if (!tmp) {
    tmp = type.type !== constants3.PLAYING;
  }
  if (!tmp) {
    if (obj.isIOS()) {
      let DESKTOP = constants2.IOS;
      let tmp9 = constants2;
    } else {
      let tmp6Result = tmp6(1605);
      if (tmp6Result.isMetaQuest()) {
        DESKTOP = constants2.META_QUEST;
        tmp9 = constants2;
      } else {
        tmp6Result = tmp6(501);
        if (tmp6Result.isAndroid()) {
          DESKTOP = tmp8.ANDROID;
          tmp9 = tmp8;
        } else {
          DESKTOP = tmp8.DESKTOP;
          tmp9 = tmp8;
        }
      }
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
    obj = require(501) /* PlatformTypes */;
  } else {
    return false;
  }
};
export const getCurrentActivityGamePlatform = function getCurrentActivityGamePlatform() {
  if (obj.isIOS()) {
    let META_QUEST = constants2.IOS;
  } else {
    let tmpResult = tmp(1605);
    if (tmpResult.isMetaQuest()) {
      META_QUEST = constants2.META_QUEST;
    } else {
      tmpResult = tmp(501);
      META_QUEST = tmpResult.isAndroid() ? tmp3.ANDROID : tmp3.DESKTOP;
    }
  }
  return META_QUEST;
};
export const isActivityJoinable = function isActivityJoinable(type) {
  let tmp = null == type;
  if (!tmp) {
    tmp = !importDefault(5868)(type, constants.JOIN);
  }
  if (!tmp) {
    tmp = type.type !== constants3.PLAYING;
  }
  return !tmp;
};
