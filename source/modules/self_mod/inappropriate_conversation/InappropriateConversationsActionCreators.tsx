// Module ID: 10140
// Function ID: 78472
// Name: playVibingWumpusMusic
// Dependencies: [31, 33, 689, 3831, 10152]
// Exports: deleteAllSafetyWarnings, markAsInappropriateConversation, pauseVibingWumpusMusic, playVibingWumpusMusic, stopVibingWumpusMusic

// Module 10140 (playVibingWumpusMusic)
import { Endpoints } from "module_31";
import module_10152 from "module_10152";

const result = module_10152.fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationsActionCreators.tsx");

export const playVibingWumpusMusic = function playVibingWumpusMusic() {
  importDefault(dependencyMap[1]).dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
};
export const stopVibingWumpusMusic = function stopVibingWumpusMusic() {
  importDefault(dependencyMap[1]).dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
};
export const pauseVibingWumpusMusic = function pauseVibingWumpusMusic() {
  importDefault(dependencyMap[1]).dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
};
export const deleteAllSafetyWarnings = function deleteAllSafetyWarnings(arg0) {
  const HTTP = require(dependencyMap[2]).HTTP;
  const obj = { url: Endpoints.DELETE_SAFETY_WARNINGS(arg0), rejectWithError: require(dependencyMap[3]).rejectWithMigratedError() };
  return HTTP.del(obj);
};
export const markAsInappropriateConversation = function markAsInappropriateConversation(id, INAPPROPRIATE_CONVERSATION_TIER_1) {
  const HTTP = require(dependencyMap[2]).HTTP;
  let obj = { url: Endpoints.ADD_SAFETY_WARNING(id), body: obj };
  obj = { safety_warning_type: INAPPROPRIATE_CONVERSATION_TIER_1, rejectWithError: require(dependencyMap[3]).rejectWithMigratedError() };
  return HTTP.post(obj);
};
