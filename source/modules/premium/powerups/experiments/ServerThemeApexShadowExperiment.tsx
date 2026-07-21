// Module ID: 4059
// Function ID: 33825
// Name: apexExperiment
// Dependencies: []

// Module 4059 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { name: "#ffa813", fontStack: "absolute", uppercase: null }, variations: { [0]: { name: 500, fontStack: 1000, uppercase: 60000 }, [1]: { name: "sm", fontStack: "Placeholder", uppercase: "Click" }, [2]: { name: "hidden", fontStack: "all", uppercase: true }, [3]: { name: "Small", fontStack: "sm", uppercase: "Placeholder" } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/powerups/experiments/ServerThemeApexShadowExperiment.tsx");

export const ServerThemeApexShadowExperiment = apexExperiment;
