// Module ID: 10503
// Function ID: 81270
// Name: sendVideoProgress
// Dependencies: [4222, 6941, 6943, 653, 6939, 9480, 6964, 1212, 6958, 3981, 2, 10504]
// Exports: computeMaxSeekableTime, getVideoOrientation, getVideoQuestEndCardCtaText, getVideoQuestProgressRemainingAccessibilityLabel, handleVideoQuestModalClose, isVideoQuestProgressing

// Module 10503 (sendVideoProgress)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _toPropertyKey from "_toPropertyKey";
import { AnalyticEvents } from "ME";

const require = arg1;
function sendVideoProgress(quest, currentTime) {
  let isQuestExpiredResult = require(6939) /* _createForOfIteratorHelperLoose */.isQuestExpired(quest);
  if (!isQuestExpiredResult) {
    const userStatus = quest.userStatus;
    let enrolledAt;
    if (null != userStatus) {
      enrolledAt = userStatus.enrolledAt;
    }
    isQuestExpiredResult = null == enrolledAt;
  }
  if (!isQuestExpiredResult) {
    const userStatus2 = quest.userStatus;
    let completedAt;
    if (null != userStatus2) {
      completedAt = userStatus2.completedAt;
    }
    isQuestExpiredResult = null != completedAt;
  }
  if (!isQuestExpiredResult) {
    require(9480) /* _manuallyStartConsoleQuest */.updateVideoProgress(quest.id, currentTime);
    const obj2 = require(9480) /* _manuallyStartConsoleQuest */;
  }
}
function formatVideoProgressRatio(bound, current) {
  let num = 0;
  if (bound > 0) {
    num = 0;
    if (current > 0) {
      let num3 = 1;
      if (bound < current) {
        const _Math = Math;
        const _Math2 = Math;
        num3 = Math.min(1, Math.round(bound / current * 100) / 100);
      }
      num = num3;
    }
  }
  return num;
}
function getVideoQuestModalKey(id) {
  return "VIDEO-QUEST-" + id;
}
const result = require("_toPropertyKey").fileFinishedImporting("modules/quests/utils/VideoQuestUtils.tsx");

export const getVideoQuestWatchCtaText = require("formatWatchRemainingDurationShort").getVideoQuestWatchCtaText;
export { sendVideoProgress };
export const getVideoOrientation = function getVideoOrientation(assets) {
  const video = assets.assets.video;
  let str = "portrait";
  let str2 = "portrait";
  if (null != video) {
    str2 = str;
    if (null != video.width) {
      str2 = str;
      if (null != video.height) {
        if (video.width > video.height) {
          str = "landscape";
        }
        str2 = str;
      }
    }
  }
  return str2;
};
export const getVideoQuestProgressRemainingAccessibilityLabel = function getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, arg1) {
  let minutes;
  let seconds;
  if (arg1) {
    const intl5 = tmp(1212).intl;
    return intl5.string(tmp(1212).t["ij5E/5"]);
  } else {
    const remainingTaskTime = tmp(6964).getRemainingTaskTime(questTaskDetails);
    ({ minutes, seconds } = remainingTaskTime);
    if (minutes > 0) {
      if (seconds > 0) {
        const intl3 = require(1212) /* getSystemLocale */.intl;
        let obj = { minutes, seconds };
        let formatToPlainStringResult = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t["lW/66D"], obj);
      }
      const intl4 = require(1212) /* getSystemLocale */.intl;
      obj = { remainingTime: formatToPlainStringResult };
      return intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.nzYZrt, obj);
    }
    if (minutes > 0) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      const obj1 = { count: minutes };
      formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["SxnF/O"], obj1);
    } else {
      const intl = require(1212) /* getSystemLocale */.intl;
      const obj2 = { count: seconds };
      formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["0BZpdi"], obj2);
    }
    const tmpResult = tmp(6964);
  }
};
export { formatVideoProgressRatio };
export const getVideoQuestEndCardCtaText = function getVideoQuestEndCardCtaText(ctaConfig) {
  let buttonLabel = ctaConfig.ctaConfig.buttonLabel;
  if (null == buttonLabel) {
    const intl = require(1212) /* getSystemLocale */.intl;
    buttonLabel = intl.string(require(1212) /* getSystemLocale */.t.iiTtpJ);
  }
  return buttonLabel;
};
export const handleVideoQuestModalClose = function handleVideoQuestModalClose(arg0) {
  let questId;
  let sourceQuestContent;
  let videoSessionId;
  ({ questId, sourceQuestContent, videoSessionId } = arg0);
  const state = store.getState();
  state.setTranscriptEnabled(false);
  const state1 = store.getState();
  const videoProgress = state1.getVideoProgress(questId);
  if (null != videoProgress) {
    quest = quest.getQuest(questId);
    let tmp4 = null != quest;
    if (tmp4) {
      const userStatus = quest.userStatus;
      let enrolledAt;
      if (null != userStatus) {
        enrolledAt = userStatus.enrolledAt;
      }
      tmp4 = null != enrolledAt;
    }
    if (tmp4) {
      const userStatus2 = quest.userStatus;
      let completedAt;
      if (null != userStatus2) {
        completedAt = userStatus2.completedAt;
      }
      tmp4 = null == completedAt;
    }
    if (tmp4) {
      sendVideoProgress(quest, videoProgress.maxTimestampSec);
    }
    const tmp9 = formatVideoProgressRatio(videoProgress.maxTimestampSec, videoProgress.duration);
    let obj2 = require(6958) /* assignBillingSessionId */;
    let obj = { questId, event: AnalyticEvents.QUEST_VIDEO_PROGRESSED };
    obj = { progress: tmp9, video_timestamp_seconds: videoProgress.maxTimestampSec, video_session_id: videoSessionId };
    obj.properties = obj;
    obj.sourceQuestContent = sourceQuestContent;
    obj2.trackQuestEvent(obj);
    const obj1 = { questId, event: AnalyticEvents.QUEST_VIDEO_MODAL_CLOSED };
    obj2 = { video_progress: tmp9, video_session_id: videoSessionId, network_connection_speed: effectiveConnectionSpeed.getEffectiveConnectionSpeed() };
    obj1.properties = obj2;
    obj1.sourceQuestContent = sourceQuestContent;
    require(6958) /* assignBillingSessionId */.trackQuestEvent(obj1);
    const obj6 = require(6958) /* assignBillingSessionId */;
  }
};
export { getVideoQuestModalKey };
export const computeMaxSeekableTime = function computeMaxSeekableTime(arg0, arg1) {
  let bound = arg0;
  if (arg0 >= arg1 - 1) {
    const _Math = Math;
    bound = Math.max(arg0, arg1);
  }
  return bound;
};
export const isVideoQuestProgressing = function isVideoQuestProgressing(closure_0) {
  const tmp = !require(6964) /* _createForOfIteratorHelperLoose */.hasWatchVideoTasks(closure_0);
  let isModalOpenResult = !tmp;
  if (!tmp) {
    isModalOpenResult = require(3981) /* _createForOfIteratorHelperLoose */.isModalOpen(getVideoQuestModalKey(closure_0.id));
  }
  return isModalOpenResult;
};
