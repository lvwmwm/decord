// Module ID: 12518
// Function ID: 96043
// Name: GAME_COMMUNITY_UPSELL_MULTI_EXPERIMENT
// Dependencies: []

// Module 12518 (GAME_COMMUNITY_UPSELL_MULTI_EXPERIMENT)
const _module = require(dependencyMap[0]);
const obj = { 844175713: null, 1387159956: null, defaultConfig: { "Null": false, "Null": false }, variations: { [1]: { "Null": true, "Null": true }, [2]: {} } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/game_community_upsell/native/GameCommunityUpsellExperiment.tsx");

export const GAME_COMMUNITY_UPSELL_MULTI_EXPERIMENT = "2026-02-game-community-upsell-multi";
export const GameCommunityUpsellMultiExperiment = apexExperiment;
