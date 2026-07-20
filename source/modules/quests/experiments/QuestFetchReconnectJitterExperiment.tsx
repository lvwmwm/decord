// Module ID: 16369
// Function ID: 126469
// Name: apexExperiment
// Dependencies: []
// Exports: getQuestFetchReconnectJitterConfig

// Module 16369 (apexExperiment)
let obj = { questFetchJitterMs: 5 * importDefault(dependencyMap[0]).Millis.SECOND, questHomeHeroJitterMs: 5 * importDefault(dependencyMap[0]).Millis.SECOND };
const _module = require(dependencyMap[1]);
obj = { defaultConfig: obj };
obj = {};
obj[1] = { questFetchJitterMs: 60 * importDefault(dependencyMap[0]).Millis.SECOND, questHomeHeroJitterMs: 60 * importDefault(dependencyMap[0]).Millis.SECOND };
obj.variations = obj;
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/quests/experiments/QuestFetchReconnectJitterExperiment.tsx");

export default apexExperiment;
export const DEFAULT_QUEST_FETCH_JITTER_CONFIG = obj;
export const getQuestFetchReconnectJitterConfig = function getQuestFetchReconnectJitterConfig(location) {
  return apexExperiment.getConfig({ location: location.location });
};
