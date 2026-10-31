// Module ID: 7866
// Function ID: 7867
// Name: utils/QuestUtils
// Dependencies: [32, 5765, 4885, 4946, 5679, 7867, 6781, 7868, 7869, 6724, 7870, 7871, 2]
// Exports: canLaunchActivity, filterQuestsForSocialEntrypoints, getQuestType, isPlayAnyActivityQuest, isQuestFeaturedByHero, isShareableQuest, isStreamingAndCanWatch, setQuestHomeUtmContext, shouldShowBountiesGivenFilters

// Module 7866 (utils/QuestUtils)
import StreamPermissionUtils from "StreamPermissionUtils" /* 6724 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7868 */;
import QuestSharePolicy from "QuestSharePolicy" /* 7869 */;
import QuestType2 from "QuestType" /* 7870 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7871 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GameConsoleStore from "GameConsoleStore" /* 5765 */;
import GuildStore from "GuildStore" /* 4885 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import VoiceStateStore from "VoiceStateStore" /* 5679 */;
import QuestUtmStore from "QuestUtmStore" /* 7867 */;
import QuestConstants from "QuestConstants" /* 6781 */;
import size from "module_2" /* 2 */;

let map, set;

let c10;
let c9;
let metroImportAll;
let unpackModuleId;
function isSponsoredPlayQuest(quest) {
  if (null == quest) {
    return false;
  } else {
    const obj = QuestTaskUtils;
    const desktopApplicationIds = obj.getDesktopApplicationIds(quest);
    return null != desktopApplicationIds && desktopApplicationIds.length > 1;
  }
}
function hasVariant(nextResult, MOBILE_ACTIVITY_QUEST) {
  set = new Set(nextResult.config.features);
  return set.has(MOBILE_ACTIVITY_QUEST);
}
({ DISCORD_APPLICATION_ID: metroImportAll, QuestVariants: c9, RewardFilterTypes: c10, TaskFilterTypes: unpackModuleId } = QuestConstants);
let result = size.fileFinishedImporting("modules/quests/utils/QuestUtils.tsx");

export { isSponsoredPlayQuest };
export function isPlayAnyActivityQuest(quest) {
  const obj = QuestTaskUtils;
  return obj.getPlayActivityApplicationId(quest) === metroImportAll;
}
export { hasVariant };
export function canLaunchActivity(quest) {
  const obj = QuestTaskUtils;
  let hasPlayActivityTaskResult = obj.hasPlayActivityTask(quest);
  if (!hasPlayActivityTaskResult) {
    const tmpResult = QuestTaskUtils;
    hasPlayActivityTaskResult = tmpResult.hasAchievementActivityTask(quest);
  }
  return hasPlayActivityTaskResult;
}
export function filterQuestsForSocialEntrypoints(stateFromStores, has) {
  let tmp5;
  let tmp6;
  map = new Map();
  const tmp = stateFromStores[Symbol.iterator]();
  while (tmp !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    [tmp5, tmp6] = tmp4;
    let tmp7 = tmp6;
    if (!isSponsoredPlayQuest(tmp6)) {
      if (!hasVariant(tmp7, constants.NON_GAMING_PLAY_QUEST)) {
        let obj2 = QuestTaskUtils;
        let questTaskTypes = obj2.getQuestTaskTypes(tmp7);
        for (const item10038 of questTaskTypes) {
          if (has.has(item10038)) {
            let result = map.set(tmp5, tmp7);
            obj3.return();
            break;
          }
          continue;
        }
      }
    }
    continue;
  }
  return map;
}
export function isShareableQuest(config) {
  return config.sharePolicy !== QuestSharePolicy.QuestSharePolicy.NOT_SHAREABLE;
}
export function isStreamingAndCanWatch(arg0, stateFromStores) {
  let first = null != arg0 && null != stateFromStores;
  if (first) {
    const obj = StreamPermissionUtils;
    first = obj.canWatchStream(stateFromStores, VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore)[0];
  }
  return first;
}
export function getQuestType(config) {
  const obj = QuestTaskUtils;
  const obj2 = { config };
  const hasWatchVideoTasksResult = obj.hasWatchVideoTasks(obj2);
  const QuestType = QuestType2.QuestType;
  return hasWatchVideoTasksResult ? QuestType.VIDEO : QuestType.GAMEPLAY;
}
export function isQuestFeaturedByHero(questHomeHero, id) {
  const questIds = questHomeHero.questIds;
  let flag;
  if (questIds != null) {
    flag = questIds.includes(id);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}
export function shouldShowBountiesGivenFilters(filters) {
  let constants2;
  const f91785 = (item) => item.filter === constants.VIRTUAL_CURRENCY;
  const found = filters.filter((group) => "task" === group.group);
  const found1 = filters.filter((group) => "reward" === group.group);
  let tmp = 0 === found.length || found.some((item) => item.filter === constants2.VIDEO);
  if (tmp) {
    tmp = 0 === found1.length || found1.some(f91785);
    0 === found1.length || found1.some(f91785);
  }
  return tmp;
}
export function setQuestHomeUtmContext(arg0) {
  let fromContent;
  let obj2;
  let questId;
  let utmMedium;
  let utmSource;
  ({ questId, fromContent, utmSource, utmMedium } = arg0);
  const state = QuestUtmStore.getState();
  const setUtmCurrentContext = state.setUtmCurrentContext;
  const obj = { utmSourceCurrent: utmSource, utmMediumCurrent: utmMedium, utmCampaignCurrent: questId, utmContentCurrent: obj2.getQuestContentName(fromContent) };
  obj2 = AnalyticsTypes;
  setUtmCurrentContext(obj);
}
