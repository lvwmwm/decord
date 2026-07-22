// Module ID: 6972
// Function ID: 55738
// Name: apexExperiment
// Dependencies: []

// Module 6972 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { MARKDOWN_SPOILER_REGEXP: true, USD: true }, variations: { [1]: { MARKDOWN_SPOILER_REGEXP: null, USD: null }, [2]: { MARKDOWN_SPOILER_REGEXP: "<string:1040334421>", USD: "<string:1040334338>" } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/game_profile/GameProfileExperiments.tsx");

export const GameProfileShareLinkExperiment = apexExperiment;
