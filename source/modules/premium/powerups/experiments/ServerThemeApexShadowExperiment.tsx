// Module ID: 4059
// Function ID: 33820
// Name: apexExperiment
// Dependencies: []

// Module 4059 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { uppercase: true, trinketAnimationUrl: false, bundleType: false }, variations: { [0]: { uppercase: true, trinketAnimationUrl: true, bundleType: true }, [1]: { uppercase: true, trinketAnimationUrl: true, bundleType: true }, [2]: {}, [3]: {} } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/powerups/experiments/ServerThemeApexShadowExperiment.tsx");

export const ServerThemeApexShadowExperiment = apexExperiment;
