// Module ID: 5324
// Function ID: 5325
// Name: SoundboardFavoritesExperiment
// Dependencies: [1435, 2]

// Module 5324 (SoundboardFavoritesExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-09-soundboard-favorites", defaultConfig: { sortOrder: "creation-date", allowReordering: false }, variations: obj2 };
obj2 = { 1: null, 2: { sortOrder: "favorite-date", allowReordering: false } };
obj2[2] = { sortOrder: "favorite-date", allowReordering: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/soundboard/experiments/SoundboardFavoritesExperiment.tsx");

export const SoundboardFavoritesExperiment = apexExperiment;
