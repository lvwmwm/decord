// Module ID: 9437
// Function ID: 73458
// Name: _manuallyStartConsoleQuest
// Dependencies: []
// Exports: claimQuestReward, clearQuestAdDecision, completeQuestPreview, dismissProgressTrackingFailureNotice, dismissQuestActivityModal, dismissQuestContent, enrollInQuest, fetchClaimedQuests, fetchCurrentQuests, fetchEarnedQuestToDeliver, fetchQuest, fetchQuestHomeHero, fetchQuestHomeHeroPreview, fetchQuestPreview, fetchQuestRewardCode, fetchQuestToDeliver, fetchVideoTranscript, manualStopConsoleQuest, manuallyStartConsoleQuest, markAdContentSeen, markAdContentUnseen, markQuestDiscovered, overrideQuestForPlacement, questsVisibleMobileMessagesChanged, resetOptimisticProgress, resetQuestDismissibilityStatus, resetQuestPreviewStatus, resetRecentQuestCompletions, selectTaskPlatform, sendHeartbeat, setAutoEnroll, updateOptimisticProgress, updatePrevRestingQuestDockMode, updateQuestDockVisibilityEligibility, updateVideoProgress

// Module 9437 (_manuallyStartConsoleQuest)
function _manuallyStartConsoleQuest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _manuallyStartConsoleQuest = obj;
  return obj(...arguments);
}
function _manualStopConsoleQuest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _manualStopConsoleQuest = obj;
  return obj(...arguments);
}
function _resetRecentQuestCompletions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _resetRecentQuestCompletions = obj;
  return obj(...arguments);
}
function _fetchCurrentQuests() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchCurrentQuests = obj;
  return obj(...arguments);
}
function _sendHeartbeat() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _sendHeartbeat = obj;
  return obj(...arguments);
}
function _enrollInQuest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _enrollInQuest = obj;
  return obj(...arguments);
}
function _claimQuestReward() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _claimQuestReward = obj;
  return obj(...arguments);
}
function _fetchQuestRewardCode() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchQuestRewardCode = obj;
  return obj(...arguments);
}
function _dismissQuestContent() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _dismissQuestContent = obj;
  return obj(...arguments);
}
function _completeQuestPreview() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _completeQuestPreview = obj;
  return obj(...arguments);
}
function _resetQuestPreviewStatus() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _resetQuestPreviewStatus = obj;
  return obj(...arguments);
}
function _resetQuestDismissibilityStatus() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _resetQuestDismissibilityStatus = obj;
  return obj(...arguments);
}
function _fetchClaimedQuests() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchClaimedQuests = obj;
  return obj(...arguments);
}
function _fetchQuestToDeliver() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchQuestToDeliver = obj;
  return obj(...arguments);
}
function _fetchEarnedQuestToDeliver() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchEarnedQuestToDeliver = obj;
  return obj(...arguments);
}
function _updateVideoProgress() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _updateVideoProgress = obj;
  return obj(...arguments);
}
function _fetchVideoTranscript() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchVideoTranscript = obj;
  return obj(...arguments);
}
function _fetchQuest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchQuest = obj;
  return obj(...arguments);
}
function _fetchQuestPreview() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchQuestPreview = obj;
  return obj(...arguments);
}
function _fetchQuestHomeHero() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchQuestHomeHero = obj;
  return obj(...arguments);
}
function _fetchQuestHomeHeroPreview() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchQuestHomeHeroPreview = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const getVisibleGuildIdsMethod = arg1(dependencyMap[1]).getVisibleGuildIdsMethod;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const FetchStatus = arg1(dependencyMap[6]).FetchStatus;
const ORBS_INTRO_QUEST_ID = arg1(dependencyMap[7]).ORBS_INTRO_QUEST_ID;
({ AnalyticEvents: closure_12, Endpoints: closure_13 } = arg1(dependencyMap[8]));
const obj = { SUCCESS: "success", CAPTCHA_FAILED: "captcha_failed", UNKNOWN_ERROR: "unknown_error", PREVIOUS_IN_FLIGHT_REQUEST: "previous_in_flight_request" };
let closure_15 = 5 * importDefault(dependencyMap[36]).Millis.MINUTE;
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[38]).fileFinishedImporting("modules/quests/QuestActionCreators.tsx");

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
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey };
  obj.dispatch(obj);
};
export const completeQuestPreview = function completeQuestPreview(closure_0, random) {
  return _completeQuestPreview(...arguments);
};
export const resetQuestPreviewStatus = function resetQuestPreviewStatus(closure_0) {
  return _resetQuestPreviewStatus(...arguments);
};
export const resetQuestDismissibilityStatus = function resetQuestDismissibilityStatus(closure_0) {
  return _resetQuestDismissibilityStatus(...arguments);
};
export const overrideQuestForPlacement = function overrideQuestForPlacement(placement, closure_0) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "QUESTS_PREVIEW_OVERRIDE", placement, questId: closure_0 };
  obj.dispatch(obj);
};
export const selectTaskPlatform = function selectTaskPlatform(questId, platform) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "QUESTS_SELECT_TASK_PLATFORM", questId, platform };
  obj.dispatch(obj);
};
export const questsVisibleMobileMessagesChanged = function questsVisibleMobileMessagesChanged(payload) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "QUESTS_VISIBLE_MOBILE_MESSAGES_CHANGED", payload };
  obj.dispatch(obj);
};
export const fetchClaimedQuests = function fetchClaimedQuests() {
  return _fetchClaimedQuests(...arguments);
};
export const updateOptimisticProgress = function updateOptimisticProgress(id, taskType, currentTime) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: id, taskEventName: taskType, progress: currentTime };
  obj.dispatch(obj);
};
export const resetOptimisticProgress = function resetOptimisticProgress(questId) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId };
  obj.dispatch(obj);
};
export const fetchQuestToDeliver = function fetchQuestToDeliver(MOBILE_HOME_DOCK_AREA, callerSource) {
  return _fetchQuestToDeliver(...arguments);
};
export const clearQuestAdDecision = function clearQuestAdDecision(placement, ttlMillis) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER", placement, fetchedAt: Date.now(), responseTtlSeconds: ttlMillis / 1000 };
  obj.dispatch(obj);
};
export const fetchEarnedQuestToDeliver = function fetchEarnedQuestToDeliver() {
  return _fetchEarnedQuestToDeliver(...arguments);
};
export const updatePrevRestingQuestDockMode = function updatePrevRestingQuestDockMode(mode) {
  let obj = importDefault(dependencyMap[10]);
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
  importDefault(dependencyMap[10]).dispatch({ type: "QUESTS_DOCK_VISIBILITY_ELIGIBILITY_UPDATE", isEligibleToBeVisible: isEligibleToBeVisible.isEligibleToBeVisible });
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
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: id };
  obj.dispatch(obj);
};
export const setAutoEnroll = function setAutoEnroll(autoEnroll) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "UNENROLLED_ACTIVITY_QUEST_AUTO_ENROLL", autoEnroll };
  obj.dispatch(obj);
};
export const markAdContentSeen = function markAdContentSeen(QUEST, items) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "AD_CONTENT_MARK_SEEN", adCreativeType: QUEST, contentIds: items };
  obj.dispatch(obj);
};
export const markAdContentUnseen = function markAdContentUnseen(QUEST, items) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "AD_CONTENT_MARK_UNSEEN", adCreativeType: QUEST, contentIds: items };
  obj.dispatch(obj);
};
export const markQuestDiscovered = function markQuestDiscovered(questId) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "QUESTS_MARK_DISCOVERED", questId };
  obj.dispatch(obj);
};
