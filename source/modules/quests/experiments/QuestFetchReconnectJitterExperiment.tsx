// Module ID: 16509
// Function ID: 128777
// Name: apexExperiment
// Dependencies: [664, 1428, 2]
// Exports: getQuestFetchReconnectJitterConfig

// Module 16509 (apexExperiment)
import ApexExperiment from "ApexExperiment";

let obj = { questFetchJitterMs: 5 * require("set").Millis.SECOND, questHomeHeroJitterMs: 5 * require("set").Millis.SECOND };
obj = { name: "2026-06-quest-fetch-reconnect-jitter", kind: "user" };
obj.defaultConfig = obj;
obj = {};
obj[1] = { questFetchJitterMs: 60 * require("set").Millis.SECOND, questHomeHeroJitterMs: 60 * require("set").Millis.SECOND };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const obj1 = { questFetchJitterMs: 60 * require("set").Millis.SECOND, questHomeHeroJitterMs: 60 * require("set").Millis.SECOND };
const result = require("set").fileFinishedImporting("modules/quests/experiments/QuestFetchReconnectJitterExperiment.tsx");

export default apexExperiment;
export const DEFAULT_QUEST_FETCH_JITTER_CONFIG = obj;
export const getQuestFetchReconnectJitterConfig = function getQuestFetchReconnectJitterConfig(location) {
  return apexExperiment.getConfig({ location: location.location });
};
