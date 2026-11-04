// Module ID: 14896
// Function ID: 14897
// Name: VideoQuestUtils
// Dependencies: [6036, 7986, 7988, 1072, 7992, 9832, 8008, 1113, 8002, 5322, 2, 14897]
// Exports: computeMaxSeekableTime, formatVideoProgressRatio, getVideoOrientation, getVideoQuestModalKey, getVideoQuestProgressRemainingAccessibilityLabel, handleVideoQuestModalClose, isValidDuration, isVideoQuestProgressing, sendVideoProgress

// Module 14896 (VideoQuestUtils)
import Constants from "Constants" /* 1072 */;
import intl6 from "intl" /* 1113 */;
import QuestExpirationUtils from "QuestExpirationUtils" /* 7992 */;
import AnalyticsActions from "AnalyticsActions" /* 8002 */;
import QuestTaskUtils from "QuestTaskUtils" /* 8008 */;
import MobileQuestVideoWatchCtaCopy from "MobileQuestVideoWatchCtaCopy" /* 14897 */;
import NetworkStore from "NetworkStore" /* 6036 */;
import QuestStore from "QuestStore" /* 7986 */;
import VideoQuestUIStore from "VideoQuestUIStore" /* 7988 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationRouteUtils = tmp(5322);
const QuestActionCreators = tmp(9832);
const AnalyticEvents = Constants.AnalyticEvents;
const portrait = "portrait";
const result = size.fileFinishedImporting("modules/quests/utils/VideoQuestUtils.tsx");

export const getVideoQuestWatchCtaText = MobileQuestVideoWatchCtaCopy.getVideoQuestWatchCtaText;
export function sendVideoProgress(quest, currentTime) {
  const obj = QuestExpirationUtils;
  let isQuestExpiredResult = obj.isQuestExpired(quest);
  if (!isQuestExpiredResult) {
    const userStatus = quest.userStatus;
    let enrolledAt;
    if (userStatus != null) {
      enrolledAt = userStatus.enrolledAt;
    }
    isQuestExpiredResult = null == enrolledAt;
  }
  if (!isQuestExpiredResult) {
    const userStatus2 = quest.userStatus;
    let completedAt;
    if (userStatus2 != null) {
      completedAt = userStatus2.completedAt;
    }
    isQuestExpiredResult = null != completedAt;
  }
  if (!isQuestExpiredResult) {
    const tmpResult = QuestActionCreators;
    tmpResult.updateVideoProgress(quest.id, currentTime);
  }
}
export function getVideoOrientation(assets) {
  const video = assets.assets.video;
  if (null != video) {
    if (null != video.width) {
      let str;
      if (null != video.height) {
        str = "portrait";
        if (video.width > video.height) {
          str = "landscape";
        }
      }
      return str;
    }
  }
  str = portrait;
}
export function getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, arg1) {
  let minutes;
  let seconds;
  const tmp3 = arg1;
  if (tmp3) {
    const intl5 = tmp(1113).intl;
    return intl5.string(intl6.t["ij5E/5"]);
  } else {
    let formatToPlainStringResult;
    const tmpResult = QuestTaskUtils;
    const remainingTaskTime = tmpResult.getRemainingTaskTime(questTaskDetails);
    ({ minutes, seconds } = remainingTaskTime);
    if (minutes > 0) {
      if (seconds > 0) {
        const intl3 = tmp(1113).intl;
        const time = { minutes, seconds };
        formatToPlainStringResult = intl3.formatToPlainString(tmp(1113).t["lW/66D"], time);
      }
      const intl4 = tmp(1113).intl;
      const obj = { remainingTime: formatToPlainStringResult };
      return intl4.formatToPlainString(intl6.t.nzYZrt, obj);
    }
    if (minutes > 0) {
      const intl2 = tmp(1113).intl;
      const obj2 = { count: minutes };
      formatToPlainStringResult = intl2.formatToPlainString(tmp(1113).t["SxnF/O"], obj2);
    } else {
      const intl = tmp(1113).intl;
      const obj3 = { count: seconds };
      formatToPlainStringResult = intl.formatToPlainString(tmp(1113).t["0BZpdi"], obj3);
    }
  }
}
export function formatVideoProgressRatio(maxVideoProgressSeconds, current) {
  let num = 0;
  if (maxVideoProgressSeconds > 0) {
    num = 0;
    if (current > 0) {
      let num3 = 1;
      if (maxVideoProgressSeconds < current) {
        const _Math = Math;
        const _Math2 = Math;
        num3 = Math.min(1, Math.round(maxVideoProgressSeconds / current * 100) / 100);
      }
      num = num3;
    }
  }
  return num;
}
export function isValidDuration(arg0) {
  const isFiniteResult = Number.isFinite(arg0) && arg0 > 0;
  return isFiniteResult;
}
export function handleVideoQuestModalClose(arg0) {
  let duration;
  let maxTimestampSec2;
  let obj3;
  let obj6;
  let questId;
  let sourceQuestContent;
  let videoSessionId;
  ({ questId, sourceQuestContent, videoSessionId } = arg0);
  const state = VideoQuestUIStore.getState();
  const videoProgress = state.getVideoProgress(questId);
  if (null != videoProgress) {
    const quest = QuestStore.getQuest(questId);
    let tmp3 = null != quest;
    if (tmp3) {
      const userStatus = quest.userStatus;
      let enrolledAt;
      if (userStatus != null) {
        enrolledAt = userStatus.enrolledAt;
      }
      tmp3 = null != enrolledAt;
    }
    if (tmp3) {
      const userStatus2 = quest.userStatus;
      let completedAt;
      if (userStatus2 != null) {
        completedAt = userStatus2.completedAt;
      }
      tmp3 = null == completedAt;
    }
    if (tmp3) {
      const maxTimestampSec = videoProgress.maxTimestampSec;
      const obj2 = QuestExpirationUtils;
      let isQuestExpiredResult = obj2.isQuestExpired(quest);
      const tmp5 = require;
      if (!isQuestExpiredResult) {
        const userStatus3 = quest.userStatus;
        let enrolledAt1;
        if (userStatus3 != null) {
          enrolledAt1 = userStatus3.enrolledAt;
        }
        isQuestExpiredResult = null == enrolledAt1;
      }
      if (!isQuestExpiredResult) {
        const userStatus4 = quest.userStatus;
        let completedAt1;
        if (userStatus4 != null) {
          completedAt1 = userStatus4.completedAt;
        }
        isQuestExpiredResult = null != completedAt1;
      }
      if (!isQuestExpiredResult) {
        const tmp5Result = tmp5(9832);
        tmp5Result.updateVideoProgress(quest.id, maxTimestampSec);
      }
    }
    ({ maxTimestampSec: maxTimestampSec2, duration } = videoProgress);
    let num2 = 0;
    if (maxTimestampSec2 > 0) {
      num2 = 0;
      if (duration > 0) {
        let num4 = 1;
        if (maxTimestampSec2 < duration) {
          const _Math = Math;
          const _Math2 = Math;
          num4 = Math.min(1, Math.round(maxTimestampSec2 / duration * 100) / 100);
        }
        num2 = num4;
      }
    }
    const obj = { questId, event: AnalyticEvents.QUEST_VIDEO_PROGRESSED, properties: obj3, sourceQuestContent };
    obj3 = { progress: num2, video_timestamp_seconds: videoProgress.maxTimestampSec, video_session_id: videoSessionId };
    const obj4 = AnalyticsActions;
    obj4.trackQuestEvent(obj);
    const obj5 = { questId, event: AnalyticEvents.QUEST_VIDEO_MODAL_CLOSED, properties: obj6, sourceQuestContent };
    obj6 = { video_progress: num2, video_session_id: videoSessionId, network_connection_speed: NetworkStore.getEffectiveConnectionSpeed() };
    const trackQuestEvent = AnalyticsActions.trackQuestEvent;
    AnalyticsActions;
    trackQuestEvent(obj5);
  }
}
export function getVideoQuestModalKey(questId) {
  return "VIDEO-QUEST-" + questId;
}
export function computeMaxSeekableTime(arg0, arg1) {
  let bound = arg0;
  if (arg0 >= arg1 - 1) {
    const _Math = Math;
    bound = Math.max(arg0, arg1);
  }
  return bound;
}
export function isVideoQuestProgressing(id) {
  const obj = QuestTaskUtils;
  let isModalOpenResult = obj.hasWatchVideoTasks(id);
  if (isModalOpenResult) {
    const _HermesInternal = HermesInternal;
    isModalOpenResult = NavigationRouteUtils.isModalOpen("VIDEO-QUEST-" + id.id);
  }
  return isModalOpenResult;
}
