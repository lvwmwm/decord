// Module ID: 12509
// Function ID: 95998
// Name: GAME_COMMUNITY_UPSELL_MULTI_EXPERIMENT
// Dependencies: []

// Module 12509 (GAME_COMMUNITY_UPSELL_MULTI_EXPERIMENT)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: null, -1845285747: null, defaultConfig: { y: "r", createResolvingGuildInvite: "isArray" }, variations: { [1]: { y: true, createResolvingGuildInvite: true }, [2]: {} } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/game_community_upsell/native/GameCommunityUpsellExperiment.tsx");

export const GAME_COMMUNITY_UPSELL_MULTI_EXPERIMENT = "2026-02-game-community-upsell-multi";
export const GameCommunityUpsellMultiExperiment = apexExperiment;
