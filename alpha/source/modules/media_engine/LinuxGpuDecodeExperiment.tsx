// Module ID: 5661
// Function ID: 5662
// Name: LinuxGpuDecodeExperiment
// Dependencies: [1452, 2]
// Exports: getLinuxGpuDecodeExperimentConfig

// Module 5661 (LinuxGpuDecodeExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-09-linux-gpu-decode", defaultConfig: { mode: "all" }, variations: { 0: { mode: "all" }, 1: { mode: "disable_nvidia" }, 2: { mode: "disable_all" } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/LinuxGpuDecodeExperiment.tsx");

export function getLinuxGpuDecodeExperimentConfig(_chooseExperiments) {
  const obj = { location: _chooseExperiments };
  return config.getConfig(obj);
}
