// Module ID: 10464
// Function ID: 81028
// Name: sendVideoProgress
// Dependencies: []
// Exports: computeMaxSeekableTime, getVideoOrientation, getVideoQuestEndCardCtaText, getVideoQuestProgressRemainingAccessibilityLabel, handleVideoQuestModalClose, isVideoQuestProgressing

// Module 10464 (sendVideoProgress)
function sendVideoProgress(quest, currentTime) {
  let isQuestExpiredResult = currentTime(dependencyMap[4]).isQuestExpired(quest);
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
    currentTime(dependencyMap[5]).updateVideoProgress(quest.id, currentTime);
    const obj2 = currentTime(dependencyMap[5]);
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/quests/utils/VideoQuestUtils.tsx");

export const getVideoQuestWatchCtaText = arg1(dependencyMap[11]).getVideoQuestWatchCtaText;
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
    const intl5 = tmp(tmp2[7]).intl;
    return intl5.string(tmp(tmp2[7]).t.ij5E/5);
  } else {
    const remainingTaskTime = tmp(tmp2[6]).getRemainingTaskTime(questTaskDetails);
    ({ minutes, seconds } = remainingTaskTime);
    if (minutes > 0) {
      if (seconds > 0) {
        const intl3 = arg1(dependencyMap[7]).intl;
        let obj = { minutes, seconds };
        let formatToPlainStringResult = intl3.formatToPlainString(arg1(dependencyMap[7]).t.lW/66D, obj);
      }
      const intl4 = arg1(dependencyMap[7]).intl;
      obj = { remainingTime: formatToPlainStringResult };
      return intl4.formatToPlainString(arg1(dependencyMap[7]).t.nzYZrt, obj);
    }
    if (minutes > 0) {
      const intl2 = arg1(dependencyMap[7]).intl;
      const obj1 = { count: minutes };
      formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[7]).t.SxnF/O, obj1);
    } else {
      const intl = arg1(dependencyMap[7]).intl;
      const obj2 = { count: seconds };
      formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[7]).t.0BZpdi, obj2);
    }
    const tmpResult = tmp(tmp2[6]);
  }
};
export { formatVideoProgressRatio };
export const getVideoQuestEndCardCtaText = function getVideoQuestEndCardCtaText(ctaConfig) {
  let buttonLabel = ctaConfig.ctaConfig.buttonLabel;
  if (null == buttonLabel) {
    const intl = arg1(dependencyMap[7]).intl;
    buttonLabel = intl.string(arg1(dependencyMap[7]).t.iiTtpJ);
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
    const quest = quest.getQuest(questId);
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
    let obj2 = arg1(dependencyMap[8]);
    let obj = { questId, event: AnalyticEvents.QUEST_VIDEO_PROGRESSED };
    obj = { progress: tmp9, video_timestamp_seconds: videoProgress.maxTimestampSec, video_session_id: videoSessionId };
    obj.properties = obj;
    obj.sourceQuestContent = sourceQuestContent;
    obj2.trackQuestEvent(obj);
    const obj1 = { questId, event: AnalyticEvents.QUEST_VIDEO_MODAL_CLOSED };
    obj2 = { video_progress: tmp9, video_session_id: videoSessionId, network_connection_speed: effectiveConnectionSpeed.getEffectiveConnectionSpeed() };
    obj1.properties = obj2;
    obj1.sourceQuestContent = sourceQuestContent;
    arg1(dependencyMap[8]).trackQuestEvent(obj1);
    const obj6 = arg1(dependencyMap[8]);
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
export const isVideoQuestProgressing = function isVideoQuestProgressing(id) {
  const tmp = !arg1(dependencyMap[6]).hasWatchVideoTasks(id);
  let isModalOpenResult = !tmp;
  if (!tmp) {
    isModalOpenResult = arg1(dependencyMap[9]).isModalOpen(getVideoQuestModalKey(id.id));
  }
  return isModalOpenResult;
};
