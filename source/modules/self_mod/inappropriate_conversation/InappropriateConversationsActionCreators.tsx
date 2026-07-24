// Module ID: 10180
// Function ID: 78706
// Name: playVibingWumpusMusic
// Dependencies: [653, 686, 507, 507, 2]
// Exports: deleteAllSafetyWarnings, markAsInappropriateConversation, pauseVibingWumpusMusic, playVibingWumpusMusic, stopVibingWumpusMusic

// Module 10180 (playVibingWumpusMusic)
import { Endpoints } from "ME";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationsActionCreators.tsx");

export const playVibingWumpusMusic = function playVibingWumpusMusic() {
  importDefault(686).dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
};
export const stopVibingWumpusMusic = function stopVibingWumpusMusic() {
  importDefault(686).dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
};
export const pauseVibingWumpusMusic = function pauseVibingWumpusMusic() {
  importDefault(686).dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
};
export const deleteAllSafetyWarnings = function deleteAllSafetyWarnings(arg0) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  const obj = { url: Endpoints.DELETE_SAFETY_WARNINGS(arg0), rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  return HTTP.del(obj);
};
export const markAsInappropriateConversation = function markAsInappropriateConversation(id, INAPPROPRIATE_CONVERSATION_TIER_1) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: Endpoints.ADD_SAFETY_WARNING(id), body: obj };
  obj = { safety_warning_type: INAPPROPRIATE_CONVERSATION_TIER_1, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  return HTTP.post(obj);
};
