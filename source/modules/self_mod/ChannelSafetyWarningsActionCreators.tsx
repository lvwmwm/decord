// Module ID: 10124
// Function ID: 78376
// Name: dismissChannelSafetyWarnings
// Dependencies: []
// Exports: acknowledgeChannelSafetyWarningTooltip, clearChannelSafetyWarnings, dismissChannelSafetyWarnings, markAsStrangerDanger, reportFalsePositive, setChannelSafetyWarningFeedback

// Module 10124 (dismissChannelSafetyWarnings)
const SafetyWarningTypes = require(dependencyMap[0]).SafetyWarningTypes;
const Endpoints = require(dependencyMap[1]).Endpoints;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsActionCreators.tsx");

export const dismissChannelSafetyWarnings = function dismissChannelSafetyWarnings(channelId, items) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "DISMISS_CHANNEL_SAFETY_WARNINGS", channelId, warningIds: items };
  obj.dispatch(obj);
  const HTTP = require(dependencyMap[3]).HTTP;
  obj = { url: Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(channelId), body: obj1, oldFormErrors: true, rejectWithError: require(dependencyMap[3]).rejectWithMigratedError() };
  return HTTP.post(obj);
};
export const setChannelSafetyWarningFeedback = function setChannelSafetyWarningFeedback(channelId, warningId, feedbackType) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "CHANNEL_SAFETY_WARNING_FEEDBACK", channelId, warningId, feedbackType };
  obj.dispatch(obj);
};
export const clearChannelSafetyWarnings = function clearChannelSafetyWarnings(channelId) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "CLEAR_CHANNEL_SAFETY_WARNINGS", channelId };
  obj.dispatch(obj);
};
export const acknowledgeChannelSafetyWarningTooltip = function acknowledgeChannelSafetyWarningTooltip(channelId) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP", channelId };
  obj.dispatch(obj);
};
export const reportFalsePositive = function reportFalsePositive(arg0) {
  const HTTP = require(dependencyMap[3]).HTTP;
  const obj = { url: Endpoints.SAFETY_WARNING_FALSE_POSITIVE(arg0), rejectWithError: require(dependencyMap[3]).rejectWithMigratedError() };
  return HTTP.post(obj);
};
export const markAsStrangerDanger = function markAsStrangerDanger(id) {
  const HTTP = require(dependencyMap[3]).HTTP;
  let obj = { url: Endpoints.ADD_SAFETY_WARNING(id), body: obj };
  obj = { safety_warning_type: SafetyWarningTypes.STRANGER_DANGER, rejectWithError: require(dependencyMap[3]).rejectWithMigratedError() };
  return HTTP.post(obj);
};
