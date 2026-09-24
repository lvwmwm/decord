// Module ID: 10448
// Function ID: 10449
// Name: InappropriateConversationsActionCreators
// Dependencies: [1078, 577, 1275, 1275, 2]
// Exports: deleteAllSafetyWarnings, markAsInappropriateConversation, pauseVibingWumpusMusic, playVibingWumpusMusic, stopVibingWumpusMusic

// Module 10448 (InappropriateConversationsActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import Constants from "Constants" /* 1078 */;
import HTTPUtils from "HTTPUtils" /* 1275 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationsActionCreators.tsx");

export const playVibingWumpusMusic = function playVibingWumpusMusic() {
  DispatcherDefault.dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
};
export const stopVibingWumpusMusic = function stopVibingWumpusMusic() {
  DispatcherDefault.dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
};
export const pauseVibingWumpusMusic = function pauseVibingWumpusMusic() {
  DispatcherDefault.dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
};
export const deleteAllSafetyWarnings = function deleteAllSafetyWarnings(arg0) {
  const HTTP = HTTPUtils.HTTP;
  const obj = { url: Endpoints.DELETE_SAFETY_WARNINGS(arg0), rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.del(obj);
};
export const markAsInappropriateConversation = function markAsInappropriateConversation(id, INAPPROPRIATE_CONVERSATION_TIER_1) {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.ADD_SAFETY_WARNING(id), body: { safety_warning_type: INAPPROPRIATE_CONVERSATION_TIER_1 }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.post(request);
};
