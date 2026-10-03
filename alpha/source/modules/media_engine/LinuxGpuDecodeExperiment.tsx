// Module ID: 13619
// Function ID: 13620
// Name: LinuxGpuDecodeExperiment
// Dependencies: [1440, 2]
// Exports: getLinuxGpuDecodeExperimentConfig

// Module 13619 (LinuxGpuDecodeExperiment)
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-09-linux-gpu-decode", defaultConfig: { mode: "all" }, variations: { 0: { mode: "all" }, 1: { mode: "disable_nvidia" }, 2: { mode: "disable_all" } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/LinuxGpuDecodeExperiment.tsx");

export const getLinuxGpuDecodeExperimentConfig = function getLinuxGpuDecodeExperimentConfig(_chooseExperiments) {
  const obj = { location: _chooseExperiments };
  return config.getConfig(obj);
};
