// Module ID: 7072
// Function ID: 7073
// Name: SpellcheckExperiment
// Dependencies: [1449, 2]
// Exports: isElectronMultilangSpellcheckEnabled

// Module 7072 (SpellcheckExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-05-electron-multilang-spellcheck", defaultConfig: { enableElectronMultilangSpellcheck: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enableElectronMultilangSpellcheck: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("lib/spellcheck/SpellcheckExperiment.tsx");

export const SpellcheckExperiment = apexExperiment;
export function isElectronMultilangSpellcheckEnabled() {
  return apexExperiment.getConfig({ location: "isElectronMultilangSpellcheckEnabled" }).enableElectronMultilangSpellcheck;
}
