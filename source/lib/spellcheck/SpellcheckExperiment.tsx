// Module ID: 5349
// Function ID: 5350
// Name: apexExperiment
// Dependencies: [1471, 2]
// Exports: isElectronMultilangSpellcheckEnabled

// Module 5349 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enableElectronMultilangSpellcheck: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-05-electron-multilang-spellcheck", defaultConfig: { enableElectronMultilangSpellcheck: false }, variations: obj });
const result = require("set").fileFinishedImporting("lib/spellcheck/SpellcheckExperiment.tsx");

export const SpellcheckExperiment = apexExperiment;
export const isElectronMultilangSpellcheckEnabled = function isElectronMultilangSpellcheckEnabled() {
  return apexExperiment.getConfig({ location: "isElectronMultilangSpellcheckEnabled" }).enableElectronMultilangSpellcheck;
};
