// Module ID: 5990
// Function ID: 5991
// Name: apexExperiment
// Dependencies: [1471, 2]

// Module 5990 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-game-mentions-v2-mobile", kind: "user", defaultConfig: { enabled: false, showNewTag: false, combineMentionAutocomplete: false }, variations: { 0: { enabled: false, showNewTag: false, combineMentionAutocomplete: false }, 1: { enabled: true, showNewTag: true, combineMentionAutocomplete: false }, 2: { enabled: true, showNewTag: false, combineMentionAutocomplete: false }, 3: { enabled: true, showNewTag: false, combineMentionAutocomplete: true } } });
const result = require("set").fileFinishedImporting("modules/game_mentions/GameMentionsMobileExperiment.tsx");

export const GameMentionsMobileExperiment = apexExperiment;
