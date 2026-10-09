// Module ID: 6144
// Function ID: 6145
// Name: SpellcheckExperiment
// Dependencies: [1453, 2]
// Exports: isElectronMultilangSpellcheckEnabled

// Module 6144 (SpellcheckExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-05-electron-multilang-spellcheck", defaultConfig: { enableElectronMultilangSpellcheck: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enableElectronMultilangSpellcheck: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("lib/spellcheck/SpellcheckExperiment.tsx");

export const SpellcheckExperiment = apexExperiment;
export const isElectronMultilangSpellcheckEnabled = function isElectronMultilangSpellcheckEnabled() {
  return apexExperiment.getConfig({ location: "isElectronMultilangSpellcheckEnabled" }).enableElectronMultilangSpellcheck;
};
