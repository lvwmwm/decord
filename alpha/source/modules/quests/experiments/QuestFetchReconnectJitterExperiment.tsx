// Module ID: 20025
// Function ID: 20026
// Name: QuestFetchReconnectJitterExperiment
// Dependencies: [1089, 1447, 2]
// Exports: getQuestFetchReconnectJitterConfig

// Module 20025 (QuestFetchReconnectJitterExperiment)
import DurationsDefault from "Durations" /* 1089 */;
import ApexExperiment from "ApexExperiment" /* 1447 */;
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
export function getQuestFetchReconnectJitterConfig(location) {
  const obj = { location: location.location };
  return apexExperiment.getConfig(obj);
}
