// Module ID: 11270
// Function ID: 11271
// Name: ChannelSafetyWarningsActionCreators
// Dependencies: [10804, 1072, 572, 1282, 2]
// Exports: acknowledgeChannelSafetyWarningTooltip, clearChannelSafetyWarnings, dismissChannelSafetyWarnings, markAsStrangerDanger, reportFalsePositive, setChannelSafetyWarningFeedback

// Module 11270 (ChannelSafetyWarningsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10804 */;
import size from "module_2" /* 2 */;

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsActionCreators.tsx");

export function dismissChannelSafetyWarnings(channelId, items) {
  let obj4;
  const obj = DispatcherDefault;
  const obj2 = { type: "DISMISS_CHANNEL_SAFETY_WARNINGS", channelId, warningIds: items };
  obj.dispatch(obj2);
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(channelId), body: { warning_ids: items }, oldFormErrors: true, rejectWithError: obj4.rejectWithMigratedError() };
  const post = HTTP.post;
  obj4 = HTTPUtils;
  return post(request);
}
export function setChannelSafetyWarningFeedback(channelId, warningId, feedbackType) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CHANNEL_SAFETY_WARNING_FEEDBACK", channelId, warningId, feedbackType };
  obj.dispatch(obj2);
}
export function clearChannelSafetyWarnings(channelId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CLEAR_CHANNEL_SAFETY_WARNINGS", channelId };
  obj.dispatch(obj2);
}
export function acknowledgeChannelSafetyWarningTooltip(channelId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP", channelId };
  obj.dispatch(obj2);
}
export function reportFalsePositive(arg0) {
  let obj2;
  const HTTP = HTTPUtils.HTTP;
  const post = HTTP.post;
  const obj = { url: Endpoints.SAFETY_WARNING_FALSE_POSITIVE(arg0), rejectWithError: obj2.rejectWithMigratedError() };
  obj2 = HTTPUtils;
  return post(obj);
}
export function markAsStrangerDanger(id) {
  let obj;
  let obj3;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.ADD_SAFETY_WARNING(id), body: obj, rejectWithError: obj3.rejectWithMigratedError() };
  const post = HTTP.post;
  obj = { safety_warning_type: SafetyWarningTypes.STRANGER_DANGER };
  obj3 = HTTPUtils;
  return post(request);
}
