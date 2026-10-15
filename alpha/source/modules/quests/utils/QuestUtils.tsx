// Module ID: 7627
// Function ID: 7628
// Name: utils/QuestUtils
// Dependencies: [32, 5170, 2087, 4806, 5172, 7628, 6188, 7629, 7630, 6123, 7631, 7632, 2]
// Exports: canLaunchActivity, filterQuestsForSocialEntrypoints, getQuestType, isPlayAnyActivityQuest, isQuestFeaturedByHero, isShareableQuest, isStreamingAndCanWatch, setQuestHomeUtmContext, shouldShowBountiesGivenFilters

// Module 7627 (utils/QuestUtils)
import StreamPermissionUtils from "StreamPermissionUtils" /* 6123 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7629 */;
import QuestSharePolicy from "QuestSharePolicy" /* 7630 */;
import QuestType2 from "QuestType" /* 7631 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7632 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GameConsoleStore from "GameConsoleStore" /* 5170 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4806 */;
import VoiceStateStore from "VoiceStateStore" /* 5172 */;
import QuestUtmStore from "QuestUtmStore" /* 7628 */;
import QuestConstants from "QuestConstants" /* 6188 */;
import size from "module_2" /* 2 */;

let map, set;

let c10;
let c9;
let metroImportAll;
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
({ DISCORD_APPLICATION_ID: metroImportAll, QuestVariants: c9, RewardFilterTypes: c10 } = QuestConstants);
let result = size.fileFinishedImporting("modules/quests/utils/QuestUtils.tsx");

export { isSponsoredPlayQuest };
export const isPlayAnyActivityQuest = function isPlayAnyActivityQuest(quest) {
  const obj = QuestTaskUtils;
  return obj.getPlayActivityApplicationId(quest) === metroImportAll;
};
export { hasVariant };
export const canLaunchActivity = function canLaunchActivity(quest) {
  const obj = QuestTaskUtils;
  let hasPlayActivityTaskResult = obj.hasPlayActivityTask(quest);
  if (!hasPlayActivityTaskResult) {
    const tmpResult = QuestTaskUtils;
    hasPlayActivityTaskResult = tmpResult.hasAchievementActivityTask(quest);
  }
  return hasPlayActivityTaskResult;
};
export const filterQuestsForSocialEntrypoints = function filterQuestsForSocialEntrypoints(stateFromStores, has) {
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
};
export const isShareableQuest = function isShareableQuest(config) {
  return config.sharePolicy !== QuestSharePolicy.QuestSharePolicy.NOT_SHAREABLE;
};
export const isStreamingAndCanWatch = function isStreamingAndCanWatch(channelId, stateFromStores) {
  let first = null != channelId && null != stateFromStores;
  if (first) {
    const obj = StreamPermissionUtils;
    first = obj.canWatchStream(stateFromStores, VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore)[0];
  }
  return first;
};
export const getQuestType = function getQuestType(config) {
  const obj = QuestTaskUtils;
  const obj2 = { config };
  const hasWatchVideoTasksResult = obj.hasWatchVideoTasks(obj2);
  const QuestType = QuestType2.QuestType;
  return hasWatchVideoTasksResult ? QuestType.VIDEO : QuestType.GAMEPLAY;
};
export const isQuestFeaturedByHero = function isQuestFeaturedByHero(questHomeHero, id) {
  const questIds = questHomeHero.questIds;
  let flag;
  if (questIds != null) {
    flag = questIds.includes(id);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const shouldShowBountiesGivenFilters = function shouldShowBountiesGivenFilters(filters) {
  const f97149 = (group) => "task" === group.group;
  const f97150 = (group) => "reward" === group.group && group.filter === constants.VIRTUAL_CURRENCY;
  let tmp2 = !filters.some(f97149);
  filters.some(f97149);
  if (tmp2) {
    tmp2 = 0 === filters.length || filters.some(f97150);
    0 === filters.length || filters.some(f97150);
  }
  return tmp2;
};
export const setQuestHomeUtmContext = function setQuestHomeUtmContext(arg0) {
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
};
