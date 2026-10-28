// Module ID: 5875
// Function ID: 5876
// Name: LinuxGpuDecodeExperiment
// Dependencies: [1452, 2]
// Exports: getLinuxGpuDecodeExperimentConfig

// Module 5875 (LinuxGpuDecodeExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-09-linux-gpu-decode", defaultConfig: { mode: "all" }, variations: { 0: { mode: "all" }, 1: { mode: "disable_nvidia" }, 2: { mode: "disable_all" } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/LinuxGpuDecodeExperiment.tsx");

export const getLinuxGpuDecodeExperimentConfig = function getLinuxGpuDecodeExperimentConfig(_chooseExperiments) {
  const obj = { location: _chooseExperiments };
  return config.getConfig(obj);
};
