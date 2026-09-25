// Module ID: 5317
// Function ID: 5318
// Name: SoundboardFavoritesExperiment
// Dependencies: [1434, 2]

// Module 5317 (SoundboardFavoritesExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-09-soundboard-favorites", defaultConfig: { sortOrder: "creation-date", allowReordering: false }, variations: null };
const obj2 = { 1: null, 2: { sortOrder: "favorite-date", allowReordering: false } };
obj2[2] = { sortOrder: "favorite-date", allowReordering: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/soundboard/experiments/SoundboardFavoritesExperiment.tsx");

export const SoundboardFavoritesExperiment = apexExperiment;
