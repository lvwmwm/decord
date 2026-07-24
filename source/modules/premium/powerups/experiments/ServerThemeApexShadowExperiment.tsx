// Module ID: 4061
// Function ID: 33837
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 4061 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "guild", name: "2026-06-server-theme-apex-shadow", defaultConfig: { enabled: false, inExperiment: false, gatesApex: false }, variations: { [0]: { enabled: false, inExperiment: true, gatesApex: false }, [1]: { enabled: true, inExperiment: true, gatesApex: false }, [2]: { enabled: false, inExperiment: true, gatesApex: true }, [3]: { enabled: true, inExperiment: true, gatesApex: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/powerups/experiments/ServerThemeApexShadowExperiment.tsx");

export const ServerThemeApexShadowExperiment = apexExperiment;
