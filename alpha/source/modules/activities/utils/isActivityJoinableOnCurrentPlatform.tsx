// Module ID: 15093
// Function ID: 15094
// Name: isActivityJoinableOnCurrentPlatform
// Dependencies: [1072, 1357, 9844, 1624, 7570, 5918, 2]
// Exports: default, getCurrentActivityGamePlatform, isActivityJoinable

// Module 15093 (isActivityJoinableOnCurrentPlatform)
import Constants from "Constants" /* 1072 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import ActivityTypes from "ActivityTypes" /* 5918 */;
import hasFlagDefault from "hasFlag" /* 7570 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isActivityJoinableOnCurrentPlatform.tsx");

export default function isActivityJoinableOnCurrentPlatform(type) {
  const tmp = null == type || !hasFlagDefault(type, ActivityFlags.JOIN) || type.type !== ActivityTypes.ActivityTypes.PLAYING;
  if (!tmp) {
    let META_QUEST;
    let DESKTOP;
    const obj = utils_PlatformUtils;
    if (obj.isIOS()) {
      META_QUEST = tmp7(9844).ActivityGamePlatforms.IOS;
    } else {
      const tmp7Result = MetaQuestUtils;
      if (tmp7Result.isMetaQuest()) {
        META_QUEST = tmp7(9844).ActivityGamePlatforms.META_QUEST;
      } else {
        const tmp7Result2 = utils_PlatformUtils;
        const isAndroidResult = tmp7Result2.isAndroid();
        const ActivityGamePlatforms = tmp7(9844).ActivityGamePlatforms;
        META_QUEST = isAndroidResult ? ActivityGamePlatforms.ANDROID : ActivityGamePlatforms.DESKTOP;
      }
    }
    let platform;
    if (type != null) {
      platform = type.platform;
    }
    if (null != platform) {
      DESKTOP = type.platform;
    } else {
      DESKTOP = tmp7(9844).ActivityGamePlatforms.DESKTOP;
    }
    if (DESKTOP === META_QUEST) {
      return true;
    } else {
      let supported_platforms;
      if (type != null) {
        supported_platforms = type.supported_platforms;
      }
      const hasItem = null != supported_platforms && 0 !== supported_platforms.length && supported_platforms.includes(META_QUEST);
      return hasItem;
    }
  } else {
    return false;
  }
};
export function getCurrentActivityGamePlatform() {
  let META_QUEST;
  const obj = utils_PlatformUtils;
  if (obj.isIOS()) {
    META_QUEST = tmp(9844).ActivityGamePlatforms.IOS;
  } else {
    const tmpResult = MetaQuestUtils;
    if (tmpResult.isMetaQuest()) {
      META_QUEST = tmp(9844).ActivityGamePlatforms.META_QUEST;
    } else {
      const tmpResult2 = utils_PlatformUtils;
      const isAndroidResult = tmpResult2.isAndroid();
      const ActivityGamePlatforms = tmp(9844).ActivityGamePlatforms;
      META_QUEST = isAndroidResult ? ActivityGamePlatforms.ANDROID : ActivityGamePlatforms.DESKTOP;
    }
  }
  return META_QUEST;
}
export function isActivityJoinable(type) {
  const tmp = null == type || !hasFlagDefault(type, ActivityFlags.JOIN) || type.type !== ActivityTypes.ActivityTypes.PLAYING;
  return !tmp;
}
