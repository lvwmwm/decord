// Module ID: 12637
// Function ID: 98227
// Name: GAME_COMMUNITY_UPSELL_MULTI_EXPERIMENT
// Dependencies: [1428, 2]

// Module 12637 (GAME_COMMUNITY_UPSELL_MULTI_EXPERIMENT)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-02-game-community-upsell-multi", kind: "user", defaultConfig: { enabled: false, visualVariant: "one-column" }, variations: { [1]: { enabled: true, visualVariant: "one-column" }, [2]: { enabled: true, visualVariant: "two-column" } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/game_community_upsell/native/GameCommunityUpsellExperiment.tsx");

export const GAME_COMMUNITY_UPSELL_MULTI_EXPERIMENT = "2026-02-game-community-upsell-multi";
export const GameCommunityUpsellMultiExperiment = apexExperiment;
