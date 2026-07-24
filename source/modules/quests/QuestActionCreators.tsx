// Module ID: 9480
// Function ID: 73708
// Name: _manuallyStartConsoleQuest
// Dependencies: [5, 9481, 4971, 4222, 4970, 6941, 6943, 4976, 653, 507, 686, 4030, 4979, 1212, 6948, 1184, 4942, 480, 9482, 9485, 9486, 9487, 6969, 6958, 9488, 6939, 9489, 6697, 6961, 9490, 3965, 9491, 675, 6918, 9493, 9494, 664, 9508, 2]
// Exports: claimQuestReward, clearQuestAdDecision, completeQuestPreview, dismissProgressTrackingFailureNotice, dismissQuestActivityModal, dismissQuestContent, enrollInQuest, fetchClaimedQuests, fetchCurrentQuests, fetchEarnedQuestToDeliver, fetchQuest, fetchQuestHomeHero, fetchQuestHomeHeroPreview, fetchQuestPreview, fetchQuestRewardCode, fetchQuestToDeliver, fetchVideoTranscript, manualStopConsoleQuest, manuallyStartConsoleQuest, markAdContentSeen, markAdContentUnseen, markQuestDiscovered, overrideQuestForPlacement, questsVisibleMobileMessagesChanged, resetOptimisticProgress, resetQuestDismissibilityStatus, resetQuestPreviewStatus, resetRecentQuestCompletions, selectTaskPlatform, sendHeartbeat, setAutoEnroll, updateOptimisticProgress, updatePrevRestingQuestDockMode, updateQuestDockVisibilityEligibility, updateVideoProgress

// Module 9480 (_manuallyStartConsoleQuest)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { getVisibleGuildIdsMethod } from "SidebarVisibilityMethodStore";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import _toPropertyKey from "_toPropertyKey";
import { FetchStatus } from "_toPropertyKey";
import { ORBS_INTRO_QUEST_ID } from "QuestsExperimentLocations";
import ME from "ME";

let closure_12;
let closure_13;
const require = arg1;
function _manuallyStartConsoleQuest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _manualStopConsoleQuest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _resetRecentQuestCompletions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchCurrentQuests() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _sendHeartbeat() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _enrollInQuest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _claimQuestReward() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchQuestRewardCode() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _dismissQuestContent() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _completeQuestPreview() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _resetQuestPreviewStatus() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _resetQuestDismissibilityStatus() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchClaimedQuests() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchQuestToDeliver() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchEarnedQuestToDeliver() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _updateVideoProgress() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchVideoTranscript() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchQuest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchQuestPreview() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchQuestHomeHero() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchQuestHomeHeroPreview() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ AnalyticEvents: closure_12, Endpoints: closure_13 } = ME);
let obj = { SUCCESS: "success", CAPTCHA_FAILED: "captcha_failed", UNKNOWN_ERROR: "unknown_error", PREVIOUS_IN_FLIGHT_REQUEST: "previous_in_flight_request" };
let closure_15 = 5 * require("set").Millis.MINUTE;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/QuestActionCreators.tsx");

export const manuallyStartConsoleQuest = function manuallyStartConsoleQuest(id, arg1) {
  return _manuallyStartConsoleQuest(...arguments);
};
export const manualStopConsoleQuest = function manualStopConsoleQuest(id) {
  return _manualStopConsoleQuest(...arguments);
};
export const resetRecentQuestCompletions = function resetRecentQuestCompletions() {
  return _resetRecentQuestCompletions(...arguments);
};
export const fetchCurrentQuests = function fetchCurrentQuests() {
  return _fetchCurrentQuests(...arguments);
};
export const sendHeartbeat = function sendHeartbeat(arg0) {
  return _sendHeartbeat(...arguments);
};
export const QuestEnrollmentResultType = obj;
export const enrollInQuest = function enrollInQuest(id, arg1) {
  return _enrollInQuest(...arguments);
};
export const claimQuestReward = function claimQuestReward(id, defaultPlatform, QUEST_HOME_MOBILE) {
  return _claimQuestReward(...arguments);
};
export const fetchQuestRewardCode = function fetchQuestRewardCode(arg0) {
  return _fetchQuestRewardCode(...arguments);
};
export const dismissQuestContent = function dismissQuestContent(id, QUEST_BAR_MOBILE) {
  return _dismissQuestContent(...arguments);
};
export const dismissProgressTrackingFailureNotice = function dismissProgressTrackingFailureNotice(streamKey) {
  let obj = importDefault(686);
  obj = { type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey };
  obj.dispatch(obj);
};
export const completeQuestPreview = function completeQuestPreview(outer1_0, random) {
  return _completeQuestPreview(...arguments);
};
export const resetQuestPreviewStatus = function resetQuestPreviewStatus(outer1_0) {
  return _resetQuestPreviewStatus(...arguments);
};
export const resetQuestDismissibilityStatus = function resetQuestDismissibilityStatus(outer1_0) {
  return _resetQuestDismissibilityStatus(...arguments);
};
export const overrideQuestForPlacement = function overrideQuestForPlacement(placement, outer1_0) {
  let obj = importDefault(686);
  obj = { type: "QUESTS_PREVIEW_OVERRIDE", placement, questId: outer1_0 };
  obj.dispatch(obj);
};
export const selectTaskPlatform = function selectTaskPlatform(closure_0, platform) {
  let obj = importDefault(686);
  obj = { type: "QUESTS_SELECT_TASK_PLATFORM", questId: closure_0, platform };
  obj.dispatch(obj);
};
export const questsVisibleMobileMessagesChanged = function questsVisibleMobileMessagesChanged(payload) {
  let obj = importDefault(686);
  obj = { type: "QUESTS_VISIBLE_MOBILE_MESSAGES_CHANGED", payload };
  obj.dispatch(obj);
};
export const fetchClaimedQuests = function fetchClaimedQuests() {
  return _fetchClaimedQuests(...arguments);
};
export const updateOptimisticProgress = function updateOptimisticProgress(id, taskType, currentTime) {
  let obj = importDefault(686);
  obj = { type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: id, taskEventName: taskType, progress: currentTime };
  obj.dispatch(obj);
};
export const resetOptimisticProgress = function resetOptimisticProgress(questId) {
  let obj = importDefault(686);
  obj = { type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId };
  obj.dispatch(obj);
};
export const fetchQuestToDeliver = function fetchQuestToDeliver(MOBILE_HOME_DOCK_AREA, callerSource) {
  return _fetchQuestToDeliver(...arguments);
};
export const clearQuestAdDecision = function clearQuestAdDecision(placement, ttlMillis) {
  let obj = importDefault(686);
  obj = { type: "QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER", placement, fetchedAt: Date.now(), responseTtlSeconds: ttlMillis / 1000 };
  obj.dispatch(obj);
};
export const fetchEarnedQuestToDeliver = function fetchEarnedQuestToDeliver() {
  return _fetchEarnedQuestToDeliver(...arguments);
};
export const updatePrevRestingQuestDockMode = function updatePrevRestingQuestDockMode(mode) {
  let obj = importDefault(686);
  obj = { type: "QUESTS_PREV_RESTING_QUEST_DOCK_MODE_UPDATE", mode };
  obj.dispatch(obj);
};
export const updateVideoProgress = function updateVideoProgress(id, currentTime) {
  return _updateVideoProgress(...arguments);
};
export const fetchVideoTranscript = function fetchVideoTranscript(quest, arg1) {
  return _fetchVideoTranscript(...arguments);
};
export const updateQuestDockVisibilityEligibility = function updateQuestDockVisibilityEligibility(isEligibleToBeVisible) {
  importDefault(686).dispatch({ type: "QUESTS_DOCK_VISIBILITY_ELIGIBILITY_UPDATE", isEligibleToBeVisible: isEligibleToBeVisible.isEligibleToBeVisible });
};
export const fetchQuest = function fetchQuest() {
  return _fetchQuest(...arguments);
};
export const fetchQuestPreview = function fetchQuestPreview(first) {
  return _fetchQuestPreview(...arguments);
};
export const fetchQuestHomeHero = function fetchQuestHomeHero() {
  return _fetchQuestHomeHero(...arguments);
};
export const fetchQuestHomeHeroPreview = function fetchQuestHomeHeroPreview() {
  return _fetchQuestHomeHeroPreview(...arguments);
};
export const dismissQuestActivityModal = function dismissQuestActivityModal(id) {
  let obj = importDefault(686);
  obj = { type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: id };
  obj.dispatch(obj);
};
export const setAutoEnroll = function setAutoEnroll(autoEnroll) {
  let obj = importDefault(686);
  obj = { type: "UNENROLLED_ACTIVITY_QUEST_AUTO_ENROLL", autoEnroll };
  obj.dispatch(obj);
};
export const markAdContentSeen = function markAdContentSeen(QUEST, items) {
  let obj = importDefault(686);
  obj = { type: "AD_CONTENT_MARK_SEEN", adCreativeType: QUEST, contentIds: items };
  obj.dispatch(obj);
};
export const markAdContentUnseen = function markAdContentUnseen(QUEST, items) {
  let obj = importDefault(686);
  obj = { type: "AD_CONTENT_MARK_UNSEEN", adCreativeType: QUEST, contentIds: items };
  obj.dispatch(obj);
};
export const markQuestDiscovered = function markQuestDiscovered(questId) {
  let obj = importDefault(686);
  obj = { type: "QUESTS_MARK_DISCOVERED", questId };
  obj.dispatch(obj);
};
