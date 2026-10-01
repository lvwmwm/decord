// Module ID: 16889
// Function ID: 16890
// Name: TopSoundboardSoundsExperiment
// Dependencies: [1435, 2]

// Module 16889 (TopSoundboardSoundsExperiment)
import ApexExperiment_mod from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj4;
let ApexExperiment = ApexExperiment_mod;
const obj = { kind: "user", name: "2026-08-top-soundboard-sounds", defaultConfig: { enabled: false, topSoundsFirst: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, topSoundsFirst: true } };
obj2[2] = { enabled: true, topSoundsFirst: false };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
const obj3 = { kind: "user", name: "2026-08-top-soundboard-sounds-mobile", defaultConfig: { enabled: false, topSoundsFirst: false }, variations: obj4 };
obj4 = { 1: null, 2: { enabled: true, topSoundsFirst: true } };
obj4[2] = { enabled: true, topSoundsFirst: false };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj3);
const result = size.fileFinishedImporting("modules/soundboard/top_sounds/TopSoundboardSoundsExperiment.tsx");

export default apexExperiment;
export const TopSoundboardSoundsExperiment = apexExperiment;
export const TopSoundboardSoundsMobileExperiment = apexExperiment1;
