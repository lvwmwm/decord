// Module ID: 10164
// Function ID: 78610
// Name: dismissChannelSafetyWarnings
// Dependencies: [9139, 653, 686, 507, 2]
// Exports: acknowledgeChannelSafetyWarningTooltip, clearChannelSafetyWarnings, dismissChannelSafetyWarnings, markAsStrangerDanger, reportFalsePositive, setChannelSafetyWarningFeedback

// Module 10164 (dismissChannelSafetyWarnings)
import { SafetyWarningTypes } from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const result = require("dispatcher").fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsActionCreators.tsx");

export const dismissChannelSafetyWarnings = function dismissChannelSafetyWarnings(channelId, items) {
  let obj = importDefault(686);
  obj = { type: "DISMISS_CHANNEL_SAFETY_WARNINGS", channelId, warningIds: items };
  obj.dispatch(obj);
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(channelId), body: obj1, oldFormErrors: true, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  return HTTP.post(obj);
};
export const setChannelSafetyWarningFeedback = function setChannelSafetyWarningFeedback(channelId, warningId, feedbackType) {
  let obj = importDefault(686);
  obj = { type: "CHANNEL_SAFETY_WARNING_FEEDBACK", channelId, warningId, feedbackType };
  obj.dispatch(obj);
};
export const clearChannelSafetyWarnings = function clearChannelSafetyWarnings(channelId) {
  let obj = importDefault(686);
  obj = { type: "CLEAR_CHANNEL_SAFETY_WARNINGS", channelId };
  obj.dispatch(obj);
};
export const acknowledgeChannelSafetyWarningTooltip = function acknowledgeChannelSafetyWarningTooltip(channelId) {
  let obj = importDefault(686);
  obj = { type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP", channelId };
  obj.dispatch(obj);
};
export const reportFalsePositive = function reportFalsePositive(arg0) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  const obj = { url: Endpoints.SAFETY_WARNING_FALSE_POSITIVE(arg0), rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  return HTTP.post(obj);
};
export const markAsStrangerDanger = function markAsStrangerDanger(id) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: Endpoints.ADD_SAFETY_WARNING(id), body: obj };
  obj = { safety_warning_type: SafetyWarningTypes.STRANGER_DANGER, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  return HTTP.post(obj);
};
