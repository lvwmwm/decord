// Module ID: 14239
// Function ID: 14240
// Name: isActivityJoinableOnCurrentPlatform
// Dependencies: [1072, 1360, 6955, 1627, 7942, 5531, 2]
// Exports: default, getCurrentActivityGamePlatform, isActivityJoinable

// Module 14239 (isActivityJoinableOnCurrentPlatform)
import Constants from "Constants" /* 1072 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1360 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import ActivityTypes from "ActivityTypes" /* 5531 */;
import hasFlagDefault from "hasFlag" /* 7942 */;
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
      META_QUEST = tmp7(6955).ActivityGamePlatforms.IOS;
    } else {
      const tmp7Result = MetaQuestUtils;
      if (!tmp7Result.isMetaQuest()) {
        const tmp7Result3 = utils_PlatformUtils;
        if (!tmp7Result3.isOculusWeb()) {
          const tmp7Result4 = utils_PlatformUtils;
          const isAndroidResult = tmp7Result4.isAndroid();
          const ActivityGamePlatforms = tmp7(6955).ActivityGamePlatforms;
          META_QUEST = isAndroidResult ? ActivityGamePlatforms.ANDROID : ActivityGamePlatforms.DESKTOP;
        }
      }
      META_QUEST = tmp7(6955).ActivityGamePlatforms.META_QUEST;
    }
    let platform;
    if (type != null) {
      platform = type.platform;
    }
    if (null != platform) {
      DESKTOP = type.platform;
    } else {
      DESKTOP = tmp7(6955).ActivityGamePlatforms.DESKTOP;
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
    META_QUEST = tmp(6955).ActivityGamePlatforms.IOS;
  } else {
    const tmpResult = MetaQuestUtils;
    if (!tmpResult.isMetaQuest()) {
      const tmpResult3 = utils_PlatformUtils;
      if (!tmpResult3.isOculusWeb()) {
        const tmpResult4 = utils_PlatformUtils;
        const isAndroidResult = tmpResult4.isAndroid();
        const ActivityGamePlatforms = tmp(6955).ActivityGamePlatforms;
        META_QUEST = isAndroidResult ? ActivityGamePlatforms.ANDROID : ActivityGamePlatforms.DESKTOP;
      }
    }
    META_QUEST = tmp(6955).ActivityGamePlatforms.META_QUEST;
  }
  return META_QUEST;
}
export function isActivityJoinable(type) {
  const tmp = null == type || !hasFlagDefault(type, ActivityFlags.JOIN) || type.type !== ActivityTypes.ActivityTypes.PLAYING;
  return !tmp;
}
