// Module ID: 19305
// Function ID: 19306
// Name: QuestFetchReconnectJitterExperiment
// Dependencies: [1104, 1455, 2]
// Exports: getQuestFetchReconnectJitterConfig

// Module 19305 (QuestFetchReconnectJitterExperiment)
import DurationsDefault from "Durations" /* 1104 */;
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj3;
let obj = { questFetchJitterMs: 5 * DurationsDefault.Millis.SECOND, questHomeHeroJitterMs: 5 * DurationsDefault.Millis.SECOND };
const obj2 = { name: "2026-06-quest-fetch-reconnect-jitter", kind: "user", defaultConfig: obj, variations: obj3 };
obj3 = { 1: null };
obj3[1] = { questFetchJitterMs: 60 * DurationsDefault.Millis.SECOND, questHomeHeroJitterMs: 60 * DurationsDefault.Millis.SECOND };
({ questFetchJitterMs: 60 * DurationsDefault.Millis.SECOND, questHomeHeroJitterMs: 60 * DurationsDefault.Millis.SECOND });
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/quests/experiments/QuestFetchReconnectJitterExperiment.tsx");

export default apexExperiment;
export const DEFAULT_QUEST_FETCH_JITTER_CONFIG = obj;
export const getQuestFetchReconnectJitterConfig = function getQuestFetchReconnectJitterConfig(location) {
  const obj = { location: location.location };
  return apexExperiment.getConfig(obj);
};
