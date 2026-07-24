// Module ID: 5033
// Function ID: 43337
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 5033 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2025-10-emoji-search-ranking-tweaks", kind: "user", defaultConfig: { boostFavorites: false, boostCapitalizedWords: false, boostAtEnd: false, boostsIgnoreDisambiguators: false }, variations: { [1]: { boostFavorites: true, boostCapitalizedWords: true, boostAtEnd: true, boostsIgnoreDisambiguators: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/emojis/EmojiSearchRankingTweaksExperiment.tsx");

export default apexExperiment;
