// Module ID: 5964
// Function ID: 5965
// Name: SoundboardFavoritesExperiment
// Dependencies: [1455, 2]

// Module 5964 (SoundboardFavoritesExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-09-soundboard-favorites", defaultConfig: { sortOrder: "creation-date", allowReordering: false }, variations: obj2 };
obj2 = { 1: null, 2: { sortOrder: "favorite-date", allowReordering: false } };
obj2[2] = { sortOrder: "favorite-date", allowReordering: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/soundboard/experiments/SoundboardFavoritesExperiment.tsx");

export const SoundboardFavoritesExperiment = apexExperiment;
